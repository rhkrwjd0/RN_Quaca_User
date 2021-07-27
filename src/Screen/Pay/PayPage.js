import Carousel from 'react-native-snap-carousel';
import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import UserContext from '../../Provider/UserContext';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);

function PayPage({navigation, route}) {
  const _UserContext = useContext(UserContext);
  const cartParam = route.params;

  const [method, setMethod] = useState('card');

  console.log('_UserContext > ', _UserContext.user);

  var user = {Email: 'test@test.com', TelNo: '010'};
  if (_UserContext.user === '') {
    user.NickName = '오리의질주';
  } else {
    user.NickName = _UserContext.user.NickName;
  }
  

  const params = {
    pg: 'html5_inicis',
    pay_method: method,
    merchant_uid: 'merchant_' + new Date().getTime(),
    name: '쿼카오더',
    amount: cartParam.totalPrice,
    buyer_email: user.Email,
    buyer_name: user.NickName,
    buyer_tel: user.TelNo,
    app_scheme: 'example',
    digital: true, // 휴대폰소액결제시 필수. 반드시 실물/컨텐츠를 정확히 구분해주어야 함
  };

  const payMethodItem = [
    {name: '신용카드', methodNm: 'card', img: require('../../../assets/img/pay/ico_pay_credit.png'), imgActive: require('../../../assets/img/pay/ico_pay_credit_active.png')}, 
    {name: 'SAMSUNG Pay', methodNm: 'samsung', img: require('../../../assets/img/pay/ico_pay_samsung.png'), imgActive: require('../../../assets/img/pay/ico_pay_samsung_active.png')}, 
    {name: '휴대폰소액결제', methodNm: 'phone', img: require('../../../assets/img/pay/ico_pay_phone.png'), imgActive: require('../../../assets/img/pay/ico_pay_phone_active.png')}]
  const renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        underlayColor=""
        style={styles.paymethodItem}
        onPress={() => {setMethod(item.methodNm)}}>
        <View style={[
          styles.paymethod, 
          method === item.methodNm ? styles.paymethodActive : {},
          ]}>
          
          {
            method === item.methodNm ? 
            <>
              <Image style={styles.paymethodIco} source={item.imgActive} />
              {
                item.methodNm != "samsung" ? 
                <Text style={styles.payMethodTxtActive}>{item.name}</Text> : 
                <Image
                  style={styles.paySamsung}
                  source= {require('../../../assets/img/pay/img_pay_samsung_active.png')}
                />
              }
            </> 
            : 
            <>
              <Image style={styles.paymethodIco} source={item.img} />
              {
                item.methodNm != "samsung" ? 
                <Text style={styles.payMethodTxt}>{item.name}</Text> : 
                <Image
                  style={styles.paySamsung}
                  source= {require('../../../assets/img/pay/img_pay_samsung.png')}
                />
              }
            </>
          }
          
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <SafeAreaView style={styleCommon.pageBg}>
       
        {/* 결제수단 */}
        <View  style={styles.paymethodWrap}>
          <Text style={styleCommon.conTit1}>결제수단</Text>
          <View style={styles.paymethodSlider}>
            <Carousel
              //ref={(c) => { this._carousel = c; }}
              layout={'default'}
              data={payMethodItem}
              renderItem={renderItem}
              sliderWidth={wp(70)}
              itemWidth={wp(62)}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
            />
          </View>
        </View>

        {/* 쿠폰적용 */}
        <Text style={styleCommon.conTit1}>쿠폰적용</Text>
        <TouchableHighlight
          underlayColor=""
          style={styles.payCoupon}
          onPress={() => {alert("쿠폰항목")}}>
          <View style={styleCommon.selectBox}>
            <Text style={styleCommon.selectTxt}>[REWARD] 아이스 아메리카노 쿠폰</Text>
            <Image
              style={styleCommon.selectArrow}
              source={require('../../../assets/img/icon/ico_selectbox.png')}
            />
          </View>
        </TouchableHighlight>

        {/* 결제 할 메뉴 
        <Text>결제 할 메뉴</Text>
        {cartParam.cartItems.map((item, index) => (
          <View key={index} style={[styles.box, styles.oneMenu]}>
            <Text>{item.name}</Text>
            <View style={styles.optionBox}>
              <Text>{item.cnt} 개</Text>
              {Object.keys(item.option).map((option, index) => (
                <Text key={index}>
                  {item.option[option] !== null && `/${item.option[option]}`}
                </Text>
              ))}
            </View>
            <Text style={styles.price}>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</Text>
          </View>
        ))}
        */}


        {/* 결제금액 및 결제버튼 */}
        <View style={styles.payMoney}>
          <Text style={styleCommon.txtSizeLg}>결재예정금액</Text>
          <Text style={styleCommon.txtSizeLg}>{String(cartParam.totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Text>
        </View>
        <View style={styles.payMoney}>
          <Text style={styleCommon.txtSizeLg}>할인금액</Text>
          <Text style={styleCommon.txtSizeLg}>0원</Text>
        </View>
        <View style={[styles.payMoney, styles.payMoneyTotal]}>
          <Text style={[styleCommon.txtSizeLg, styleCommon.txtBold]}>최종결제금액</Text>
          <View style={[styleCommon.flexRow, styleCommon.alignItemC]}>
            <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxls]}>{String(cartParam.totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
            <Text style={[styleCommon.txtSizeXl, styleCommon.txtBold]}>원</Text>
          </View>
        </View>

        <TouchableHighlight
          underlayColor=""
          style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
          onPress={() =>
            navigation.navigate('Payment', {
              params: params,
              cartParam: cartParam.cartItems,
            })
          }>
          <Text style={styleCommon.btn1txtLight}>결재요청</Text>
        </TouchableHighlight>
    </SafeAreaView>
  );
}

export default PayPage;
