import React, {useState, useEffect} from 'react';
import IMP from 'iamport-react-native';
import Loading from './Loading';
import {getStoreId} from '../Cart/AsyncCart';

function Payment({navigation, route}) {
  const payParam = route.params.params; // 결제정보 파라미터
  const cartParam = route.params.cartParam; // 메뉴정보 파라미터

  console.log('payParam > ', payParam);
  const [storeId, setStoreId] = useState(null);

  useEffect(() => {
    // AsyncStorage에 저장 된 매장아이디 가져오기
    getStoreId().then((resGet) => {
      setStoreId(resGet);
    });
  }, []);

  return (
    <IMP.Payment
      userCode={'imp24769989'} // iamport 대시보드 -> 시스템설정 -> 내정보 -> 가맹점 식별코드
      loading={<Loading />}
      data={payParam}
      callback={(response) => {
        console.log('response > ', response);
        navigation.replace('PaymentResult', { // 결제완료 후 결제완료 페이지로
          response: response,
          cartParam: cartParam,
          storeId: storeId,
          payParam: payParam,
        });
      }}
    />
  );
}

export default Payment;
