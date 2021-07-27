import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {removeCart} from '../../Function/Cart/AsyncCart';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {insertPayment} from '../../Function/ApiAxios/Pay';
import StyleCommon from '../../Style/StyleCommon'

function PaymentResult(props) {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const nickName = _UserContext.user.NickName;

  
  const {
    imp_success,
    success,
    imp_uid,
    merchant_uid,
    error_msg,
  } = props.route.params.response;
  const cartParam = props.route.params.cartParam;
  const storeId = props.route.params.storeId;

  // [WARNING: 이해를 돕기 위한 것일 뿐, imp_success 또는 success 파라미터로 결제 성공 여부를 장담할 수 없습니다.]
  // 아임포트 서버로 결제내역 조회(GET /payments/${imp_uid})를 통해 그 응답(status)에 따라 결제 성공 여부를 판단하세요.
  const isSuccess = !(
    imp_success === 'false' ||
    imp_success === false ||
    success === 'false' ||
    success === false
  );
  console.log('_UserContext > ',_UserContext)

  let [orderNumber, setOrderNumber] = useState("045");
  // 결제 성공
  if (isSuccess) {
    // 서버에 데이터보내기
    const payParam = {
      SsoKey: _UserContext.user.SsoKey,
      PGUid: imp_uid,
      merchant_uid: merchant_uid,
      cartParam: cartParam,
      StoreId: storeId,
    };
    insertPayment(_UrlContext.url, payParam)
      .then((resData) => {
        console.log(resData);
        //setOrderNumber(resData);
        console.log('insertPayment success');
      })
      .catch((err) => {
        console.log('insertPayment fail : ', err);
      });

    // 장바구니 비우기
    removeCart()
      .then((resRemove) => {
        if (resRemove) {
          alert('장바구니가 비워졌습니다.');
          props.navigation.navigate('Drawer');
        } else {
          alert(resRemove);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.completeTxt, {fontWeight: '700', marginBottom: 50}]}>
        주문이 {isSuccess ? '완료' : '실패'} 되었습니다.
      </Text>
      {isSuccess ? (
        <View>
          <Text style={styles.completeTxt2}>주문번호 <Text style={styles.txtSizeLg}>{orderNumber}</Text></Text>
        </View>
      ) : (
        <View>
          <Text style={styles.completeTxt2}>결제취소 {error_msg}</Text>
        </View>
      )}
      <TouchableHighlight
        style={[StyleCommon.btn1Dark, StyleCommon.btn1Btm,{marginBottom: 170}]}
        onPress={() => {
          props.navigation.popToTop();
        }}>
        <Text style={StyleCommon.btn1txtLight}>확인</Text>
      </TouchableHighlight>
      <View>
        <Text style={[styles.completeTxt3,{marginTop: 20}]}><Text style={[styleCommon.txtPoint, styleCommon.txtSizeLg]}>{nickName}</Text>님의 닉네임으로 주문하신 음료가</Text>
        <Text style={styles.completeTxt3}>준비 예정입니다.</Text>
      </View>
    </SafeAreaView>
  );
}
const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeTxt: {
    fontSize: 20,
    textAlign: 'center',
    color:'#222222',
  },
  completeTxt2: {
    fontSize: 14,
    textAlign: 'center',
    color:'#222222',
  },
  completeTxt3: {
    fontSize: 13,
    textAlign: 'center',
    color:'#222222',
    textAlign: 'center',
  },
  goHomeBtn: {
    backgroundColor: '#A60030',
    width: 200,
    height: 50,
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default PaymentResult;
