import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  FlatList,
  Alert,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import OrderMenu from '../OrderModal/OrderMenu';
import OrderOption from '../OrderModal/OrderOption';
import {
  setCart,
  getCart,
  updateStoreId,
  getStoreId,
  removeCart,
} from '../../Function/Cart/AsyncCart';
import {getAllMenu} from '../../Function/ApiAxios/Menu';
import UrlContext from '../../Provider/UrlContext';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';
import  {  useNavigation  }  from  '@react-navigation/native' ;

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);
const StoreMenu = ({ category, storeId }) => {

  const navigation = useNavigation();
  const _UrlContext = useContext(UrlContext);
  const [menuInfo, setMenuInfo] = useState(null);
  const [menuImage, setMenuImage] = useState(require("../../../assets/img/sample_coffee.png"));
  useEffect(() => {
    
    if(category == "bread"){
      setMenuImage(require("../../../assets/img/sample_bread.png"));
    }else if(category == "goods"){
      setMenuImage(require("../../../assets/img/sample_goods.png"));
    }

    getAllMenu(_UrlContext.url, storeId)
      .then((resMenu) => {
        setMenuInfo(resMenu[category]);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const [orderModal, setOrderModal] = useState(false); // 모달 열기/닫기
  const [modalStep, setModalStep] = useState('init'); // 모달 첫번째(메뉴,수량)인지 두번째(나머지옵션)인지
  const [orderMenu, setOrderMenu] = useState({}); // 클릭한 메뉴

  // flatlist 돌릴 컴포넌트
  const renderItem = ({item}) => (
    <TouchableHighlight
      underlayColor=""
      onPress={() => {
        setOrderModal(!orderModal);
        setOrderMenu(item);
      }}>
        <View style={[styleCommon.photoList1Item, styles.storeMenuItem]}>
          <View style={[styleCommon.photoList1ImgWrap]}>
            <Image
              //source={{uri: item.ImgUrl}}
              source={menuImage}
              style={styleCommon.photoList1Img}
            />
          </View>
          <View style={styleCommon.photoList1Txtbox}>
            <View style={styleCommon.flexRow}>
              <Text style={[styleCommon.txtSizeLg, styleCommon.txtBold]}>{item.MenuName}</Text>
              {item.Special == 'Y' && <Text style={styles.storeMenuLabel}>Special</Text>}
            </View>
            <Text style={[styleCommon.txtSizeXl, styleCommon.photoList1Price]}>
              <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxl]}>{item.Price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>₩
            </Text>
          </View>
        </View>
    </TouchableHighlight>
  );

  // 자식들한테 함수 보내면 자식들이 선택한 메뉴/옵션 담아줌
  const [menuCnt, setMenuCnt] = useState(1);
  const orderCntFunc = (cnt) => {
    setMenuCnt(cnt);
  };
  const [menuOptions, setMenuOptions] = useState({});
  const orderOptionFunc = (options) => {
    setMenuOptions(options);
  };

  const addCart = () => {
    return new Promise((resolve, reject) => {
      if (
        (orderMenu.OptionA !== null && menuOptions.OptionA === null) ||
        (orderMenu.OptionB !== null && menuOptions.OptionB === null) ||
        (orderMenu.OptionC !== null && menuOptions.OptionC === null)
      ) {
        resolve(false);
      } else {
        // 장바구니 담길 json
        const cartJson = {
          id: orderMenu.MenuId,
          name: orderMenu.MenuName,
          cnt: menuCnt,
          price: orderMenu.Price * menuCnt,
          option: menuOptions,
        };
        // AsyncStorage에 저장
        setCart(cartJson)
          .then((resSet) => {
            if (resSet) {
              resolve(true);
            } else {
              alert(resSet);
            }
          })
          .catch((err) => {
            alert(err);
          });
      }
    });
  };

  // 장바구니 담기
  const addCartFunc = () => {
    return new Promise((resolve, reject) => {
      getCart().then((resGet) => {
        console.log('getCart ??? ', resGet);
        if (resGet === '[]') {
          // 장바구니 비었으면 매장저장, 장바구니저장
          updateStoreId(String(storeId));
          addCart().then((resCart) => {
            resolve(resCart);
          });
        } else {
          getStoreId().then((resGet) => {
            console.log('getStoreId ??? ', resGet);
            if (resGet === String(storeId)) {
              // 기존 장바구니 매장과 같으면 담기
              addCart().then((resCart) => {
                resolve(resCart);
              });
            } else {
              // 기존 장바구니 매장과 다르면 기존 없애고 새로저장
              removeCart().then(() => {
                updateStoreId(String(storeId));
                addCart().then((resCart) => {
                  resolve(resCart);
                });
              });
              Alert.alert(
                '장바구니에는 같은 가게의 메뉴만 담을 수 있습니다.',
                '이전에 담은 메뉴가 삭제되고 메뉴가 담깁니다.',
              );
            }
          });
        }
      });
    });
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.storeMenuListLine}></View>
        <View style={[styleCommon.photoList1, styles.storeMenuList]}>
          <FlatList
            data={menuInfo}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            //scrollEnabled={false}
            ListHeaderComponent={
              <>
                <View style={styles.storeMenuTit}>
                  <Image
                    style={[styles.storeMenuTitImg]}
                    source={require('../../../assets/img/icon/ico_menu_tit_on.png')}
                  />
                  <Text style={styles.storeMenuTitTxt}>Americano</Text>
                </View>
                <View style={styles.storeMenuBgT}></View>
              </>
            }
            ListFooterComponent={
              <>
                <View style={styles.storeMenuBgB}></View>
              </>
            }
          />
        </View>
      </View>

      {/* <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
        onPress={() => {
          navigation.navigate('StoreMenu', {storeId: storeId});
        }}>
        <Text style={styleCommon.btn1txtLight}><Text style={styles.storeMenuNumSelected}>5</Text>개 주문하기</Text>
      </TouchableHighlight> */}

      {/* 메뉴주문 */}
      <Modal 
        statusBarTranslucent 
        isVisible={orderModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        animationInTiming={400}
        animationOutTiming={400}
        useNativeDriver={true} 
        style={styleCommon.modalWrap}
      >
        
        {/* 모달 닫으면서 주문모달 첫번째로 */}
        {modalStep === 'init' ? (
          <TouchableHighlight
            underlayColor=""
            style={[styleCommon.modalCloseFull]}
            onPress={() => {
              setOrderModal(!orderModal), setModalStep('init');
            }}>
            <Image 
              source={ require('../../../assets/img/icon/ico_back_bk.png') }
              style= {styleCommon.pageBackImg}
            />
          </TouchableHighlight>
          ) : (
          <TouchableHighlight
            underlayColor=""
            style={[styleCommon.modalClose]}
            onPress={() => {
              setOrderModal(!orderModal); 
              setTimeout(() => {
                setModalStep('init')
              }, 1000);
            }}>
            <Image
              style={styleCommon.modalCloseImg}
              source={require('../../../assets/img/icon/btn_close_wh.png')}
            />
          </TouchableHighlight>
          )
         }

        <View style={styleCommon.modalPopFull}>
          <View style={styleCommon.modalPopFullInner}>

            <OrderMenu orderMenu={orderMenu} orderCntFunc={orderCntFunc} menuImage={menuImage}/>
            <OrderOption orderMenu={orderMenu} orderOptionFunc={orderOptionFunc} category={category}/>
            
            <View style={[styleCommon.flexRow, styleCommon.btn1Btm]}>
              <TouchableHighlight
                underlayColor=""
                style={[styleCommon.btn1Light, styleCommon.btn1MdH, styleCommon.btn1HalfL]}
                onPress={() => {
                  addCartFunc().then((res) => {
                    if (res) {
                      setOrderModal(!orderModal);
                      setModalStep('init');
                      navigation.navigate('Cart');
                    } else {
                      alert('옵션을 모두 선택해 주세요.');
                    }
                  });
                }}
              >
                <Text style={styleCommon.btn1txtDark}>장바구니로 이동</Text>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor=""
                style={[styleCommon.btn1Dark, styleCommon.btn1MdH, styleCommon.btn1HalfR]}
                onPress={() => {
                  addCartFunc().then((res) => {
                    if (res) {
                      setOrderModal(!orderModal);
                      setModalStep('init');
                    }else{
                      alert('옵션을 모두 선택해 주세요.');
                    }
                  });
                }}
              >
                <Text style={styleCommon.btn1txtLight}>메뉴추가하기 이동</Text>
              </TouchableHighlight>
            </View>
          </View>  
        </View>
        
      </Modal>
    </SafeAreaView>
  );
};

export default StoreMenu;
