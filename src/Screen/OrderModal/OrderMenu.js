import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);
const OrderMenu = (props) => {

  var orderMenu = props.orderMenu;
  var menuImage = props.menuImage;
  const [showMenuDetail, setShowMenuDetail] = useState(false);

  const [orderCnt, setOrderCnt] = useState(1);
  // 수량 1개 밑으로 안내려가게
  if (orderCnt < 1) {
    setOrderCnt(1);
  }
  var menuPrice = Number(orderMenu.Price) * orderCnt;
  // 수량변경 될 때 부모 state변경
  useEffect(() => {
    props.orderCntFunc(orderCnt);
  }, [orderCnt]);

  return (
    <View style={styles.storeMenuPopbox}>
      <Text style={styles.storeMenuPopNmEng}>Ethiopia Yirgacheffe</Text>
      <Text style={styles.storeMenuPopName}>{orderMenu.MenuName}</Text>
      <Text style={[styleCommon.txtSizeXxl]}>
        <Text style={styles.storeMenuPopPrice}>{menuPrice}</Text>₩
      </Text>
      <Image 
        style={styles.storeMenuPopImg} 
        //source={{uri: orderMenu.ImgUrl}} 
        source={menuImage}
      />
      { !showMenuDetail ?
        <TouchableHighlight style={[styleCommon.btnViewDetail, styles.storeMenuPopBtnDetail]} onPress={() => alert('메뉴 상세내용')}>
          <Image
            style={styleCommon.btnViewDetailImg}
            source={require('../../../assets/img/icon/ico_search_wh.png')}
          />
        </TouchableHighlight> 
        :
        <>
          <TouchableHighlight 
            underlayColor=""
            style={styles.drawerClose}
            onPress={() => {setShowMenuDetail(false)}}
          >
            <Image
              style={styles.drawerCloseImg}
              source={require('../../../assets/img/icon/btn_close_bk_s.png')}
            />
          </TouchableHighlight>
          <View style={styles.storeMenuPopDetail}><Text>진하고 마일드한 에스프레소와 부드러운 우유가 만나 더욱 고소한 풍미를 지닌 카페라떼</Text></View>
        </>
      }
      {/* <Text style={styles.storeMenuPopPriceBox}>
        <Text style={styles.storeMenuPopPriceTotal}>
          {String(menuPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
        </Text>
        원
      </Text> */}
      <View style={styles.storeMenuPopCntBox}>
        <TouchableHighlight
          underlayColor=""
          style={styles.storeMenuPopCntIconBox}
          onPress={() => setOrderCnt(orderCnt - 1)}>
          <Image
            style={styles.storeMenuPopCntIcon}
            source={require('../../../assets/img/icon/ico_minus.png')}
          />
        </TouchableHighlight>
        <Text style={styles.storeMenuPopCntTxt}>{orderCnt}</Text>
        <TouchableHighlight
          underlayColor=""
          style={styles.storeMenuPopCntIconBox}
          onPress={() => setOrderCnt(orderCnt + 1)}>
          <Image
            style={styles.storeMenuPopCntIcon}
            source={require('../../../assets/img/icon/ico_plus.png')}
          />
        </TouchableHighlight>
      </View>

      {/* <View style={styles.storeMenuPopOption}>
        <View style={styles.storeMenuPopOptionItem}>
          <Text style={styles.storeMenuPopOptionTxt}>얼음량</Text>
          <View style={[styleCommon.flexRow, styleCommon.alignItemC]}>
            <TouchableHighlight
              underlayColor=""
              style={styleCommon.btn3}
              onPress={() => {}}>
              <Text style={styleCommon.btn3Txt}>조금</Text>
            </TouchableHighlight>
            <View style={styleCommon.btn3Line}></View>
            <TouchableHighlight
              underlayColor=""
              style={styleCommon.btn3}
              onPress={() => {}}>
              <Text style={styleCommon.btn3TxtActive}>보통</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.storeMenuPopOptionItem}>
          <Text style={styles.storeMenuPopOptionTxt}>샷추가(+500원)</Text>
          <View style={[styleCommon.flexRow, styleCommon.alignItemC]}>
            <TouchableHighlight
              underlayColor=""
              style={styleCommon.btn3}
              onPress={() => {}}>
              <Text style={styleCommon.btn3TxtActive}>없음</Text>
            </TouchableHighlight>
            <View style={styleCommon.btn3Line}></View>
            <TouchableHighlight
              underlayColor=""
              style={styleCommon.btn3}
              onPress={() => {}}>
              <Text style={styleCommon.btn3Txt}>+1</Text>
            </TouchableHighlight>
            <View style={styleCommon.btn3Line}></View>
            <TouchableHighlight
              underlayColor=""
              style={styleCommon.btn3}
              onPress={() => {}}>
              <Text style={styleCommon.btn3Txt}>+2</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <TouchableHighlight
        underlayColor=""
        style={styleCommon.btn2}
        onPress={() => alert('추가옵션팝업')}>
        <Text style={[styles.btn2Txt, styleCommon.txtSizeLg]}>추가옵션</Text>
      </TouchableHighlight> */}
    </View>
  );
};

export default OrderMenu;
