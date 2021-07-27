import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight, FlatList} from 'react-native';
/*import {FlatList, TouchableHighlight} from 'react-native-gesture-handler'; absolute속성사용시 요소사라져서 감춰둠 */
import {getCart, updateCart} from '../../Function/Cart/AsyncCart';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);
const ShoppingBag = ({navigation}) => {

  const [cartItems, setCartItems] = useState([]);
  // 장바구니 가져오기
  useEffect(() => {
    getCart()
      .then((resGet) => {
        setCartItems(JSON.parse(resGet));
      })
      .catch((err) => {
        alert(err);
      });
  }, [navigation]);

  // 총 결제금액
  var totalPrice = 0;
  cartItems.map((item) => {
    totalPrice += item.price;
  });

  // 메뉴 삭제
  const delItem = (item) => {
    var rmItem = cartItems.filter((data) => data !== item);
    updateCart(rmItem)
      .then((resUpdate) => {
        if (resUpdate) {
          console.log('updateCart 완료');
        } else {
          console.log('updateCart 실패 : ' + resUpdate);
        }
      })
      .catch((err) => {
        console.log('updateCart 에러 : ' + err);
      });
    setCartItems(rmItem);
  };

  // 결제창으로
  const goPayPage = () => {
    if (totalPrice === 0) {
      alert('결제 할 메뉴가 없습니다.');
    } else {
      const cartData = {
        cartItems: cartItems,
        totalPrice: totalPrice,
      };
      navigation.navigate('PayPage', cartData);
    }
  };

  // flatlist 돌릴 컴포넌트
  const renderItem = ({item}) => (
    <View style={[styleCommon.photoList1Item]}>
      <View style={[styleCommon.photoList1ImgWrap]}>
        {
          item.id.charAt(0) === "D" && (
            <Image
              source={require('../../../assets/img/sample_coffee.png')}
              style={styleCommon.photoList1Img}
            />
          ) || 
          item.id.charAt(0) === "B" && (
            <Image
              source={require('../../../assets/img/sample_bread.png')}
              style={styleCommon.photoList1Img}
            />
          ) || 
          item.id.charAt(0) === "G" && (
            <Image
              source={require('../../../assets/img/sample_goods.png')}
              style={styleCommon.photoList1Img}
            />
          )
        }
      </View>
      <View style={styleCommon.photoList1Txtbox}>
        <View style={styleCommon.flexRow}>
          <Text style={[styleCommon.txtSizeLg, styleCommon.txtBold]}>{item.name}</Text>
        </View>
        <View style={[styleCommon.flexRow, styleCommon.photoList1Cnt]}>
          <Text style={[styles.orderNoticeMnCnt, styleCommon.txtBold]}>{item.cnt}</Text>
          <Text style={styles.orderNoticeMnCnt}>개</Text>
        </View>
        <View style={styleCommon.flexRow}>
          
          {Object.keys(item.option).map((option, index) => (
            <Text style={styleCommon.txtSizeSm} key={index}>
              {(item.option[option] !== null && item.option[option] !== "") && `/${item.option[option]}`}
            </Text>
          ))}
        </View>
        <Text style={[styleCommon.txtSizeXl, styleCommon.photoList1Price]}>
          <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxl]}>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>₩
        </Text>
        <TouchableHighlight
          underlayColor=""
          style={styles.cartBtnDelItem}
          onPress={() => {
            delItem(item);
          }}>
          <Image
            style={styleCommon.btnDelItemImg}
            source={require('../../../assets/img/icon/btn_close_gy.png')}
          />
        </TouchableHighlight>
    </View>
      
    </View>

  );

  return (  
    <View style={[styleCommon.pageBg]}>
      <View style={[styleCommon.photoList1]}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={
            <>
              <View style={styles.cartTotalBox}>
                <Text style={styleCommon.txtSizeLg}>총 <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXl]}>{cartItems.length}</Text>개</Text>
                <Text style={styleCommon.txtSizeXl}>
                  <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxl]}>{String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>원
                </Text>
              </View>

              <Text style={styleCommon.conTit1}>매장선택</Text>
              <View style={styles.cartStore}>
                <View style={styles.cartStoreSelected}>
                  <View>
                    <Text style={styles.cartStoreName}>헤일로 그린로점</Text>
                    <Text style={[styleCommon.txtSizeXs, styleCommon.txtColorGy]}>전남나주시 그린로 379 상야1길 21</Text>
                    <Text style={[styleCommon.txtSizeXs, styleCommon.txtColorGy]}>061)332-9227</Text>
                  </View>
                  <View style={[styles.cartStoreImgWrap]}>
                    <Image
                      source={require('../../../assets/img/sample_store.png')}
                      style={styles.cartStoreImg}
                    />
                  </View>
                </View>
                <TouchableHighlight
                  underlayColor=""
                  style={[styleCommon.btn1Light, styleCommon.btn1SmH]}
                  onPress={() => {}}>
                  <Text style={styleCommon.btn1txtDark}>다른 매장 선택하기</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor=""
                  style={styles.btnAddFav}
                  onPress={() => {alert("즐겨찾는 매장 추가")}}>
                  <>
                    <Image
                      style={styles.btnAddFavImg}
                      source={require('../../../assets/img/icon/ico_fav_bk.png')}
                    />
                    <Text style={[styleCommon.btn2, styleCommon.txtSizeMd]}>Add Favorites</Text>
                  </>
                </TouchableHighlight>
              </View>
              
              {/* 주문버튼 이 위치에 두면 화면하단고정 해제됨 
               <TouchableHighlight
                underlayColor=""
                style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
                onPress={() => goPayPage()}>
                <Text style={styleCommon.btn1txtLight}>주문하기</Text>
              </TouchableHighlight> */}
            </>
          }
        />
      </View>
      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
        onPress={() => goPayPage()}>
        <Text style={styleCommon.btn1txtLight}>주문하기</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ShoppingBag;
