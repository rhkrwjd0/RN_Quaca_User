import axios from 'axios';
import {Alert} from 'react-native';
import {sendFCM} from '../FCM/sendFCM';

// 사용자 결제내역 목록 가져오기
export const getUserPay = (commonUrl, SsoKey, SearchType, StartDt, EndDt) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}orders/UserPay`;
    const param = {
      StoreId: "1",
      SsoKey: SsoKey,
      SearchType : SearchType,
      StartDt : StartDt,
      EndDt : EndDt
    };
    axios
      .post(url, param)
      .then((resPay) => {
        if (resPay.data.success) {
          resolve(resPay.data.info);
        } else {
          reject(resPay.data);
        }
      })
      .catch((err) => {
        console.log('err > ', err);
        Alert.alert(
          err,
          '결제내역을 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 결제 상세정보 가져오기
export const getUserPayDetail = (commonUrl, UserPayId) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}orders/UserPayDetail`;
    const param = {
      UserPayId: UserPayId,
    };
    axios
      .post(url, param)
      .then((resPayDetail) => {
        if (resPayDetail.data.success) {
          resolve(resPayDetail.data.info);
        } else {
          reject(resPayDetail.data);
        }
      })
      .catch((err) => {
        console.log('err > ', err);
        Alert.alert(
          err,
          '주문정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 결제완료 후 결제정보 저장하기
export const insertPayment = (commonUrl, payParam) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}orders/payment`;
    axios
      .post(url, payParam)
      .then((resPay) => {
        if (resPay.data.success) {
          console.log('resPay.data > ', resPay.data);
          console.log('resPay > ', resPay.data.UserPayId);
          console.log('OrderNum > ', resPay.data.OrderNum);
          resolve(resPay.data.OrderNum);
          // 매장용앱에 알림보내기(관리자 알람 10초 ajax 호출로 처리로 인한 사용안함)
          // sendFCM(commonUrl, resPay.data.UserPayId)
          //   .then(() => {
          //     console.log('결제완료 후 매장에 알림보내기 완료!');
          //     resolve(true)
          //   })
          //   .catch((err) => {
          //     console.log('결제완료 후 매장에 알림보내기 실패!');
          //     reject(err)
          //   });
        }
      })
      .catch((err) => {
        console.log(`결제완료 서버저장 에러 : ${err}`);
        reject(err)
      });
  });
};
