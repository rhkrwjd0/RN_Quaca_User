import axios from 'axios';
import {Alert} from 'react-native';


// 사용자 리워드 & 쿠폰 정보 가져오기 
export const getRewardCouponCount = (commonUrl, SsoKey) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}reward/rewardCouponCount`;
    const param = {
      SsoKey: SsoKey,
      StoreId: '1',
    };
    axios
      .post(url, param)
      .then((resReward) => {
        if (resReward.data.success) {
          resolve(resReward.data.info);
        } else {
          reject(resReward.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '리워드 정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};


// 사용자 리워드 정보 가져오기
export const getUserReward = (commonUrl, SsoKey) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}reward/reward`;
    const param = {
      SsoKey: SsoKey,
      StoreId: '1',
    };
    axios
      .post(url, param)
      .then((resReward) => {
        if (resReward.data.success) {
          resolve(resReward.data.info);
        } else {
          reject(resReward.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '리워드 정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 사용자 리워드 히스토리 가져오기
export const getUserRewardHistory = (commonUrl, SsoKey, SearchType) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}reward/rewardHistory`;
    const param = {
      SsoKey: SsoKey,
      SearchType : SearchType,
      StoreId: '1',
    };
    axios
      .post(url, param)
      .then((resReward) => {
        if (resReward.data.success) {
          resolve(resReward.data.History);
        } else {
          reject(resReward.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '리워드 히스토리를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 사용자 프리퀀시 정보 가져오기
export const getUserFrequency = (commonUrl, SsoKey) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}reward/frequency`;
    const param = {
      SsoKey: SsoKey,
      StoreId: '1',
    };
    axios
      .post(url, param)
      .then((resFrequency) => {
        if (resFrequency.data.success) {
          resolve(resFrequency.data.info);
        } else {
          reject(resFrequency.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '프리퀀시 정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 사용자 사용가능 쿠폰 정보 가져오기
export const getUserAvialableCoupon = (commonUrl, SsoKey) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}reward/Avialable`;
    const param = {
      SsoKey: SsoKey,
      StoreId: '1',
    };
    axios
      .post(url, param)
      .then((resCoupon) => {
        if (resCoupon.data.success) {
          resolve(resCoupon.data.Coupon);
        } else {
          reject(resCoupon.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '사용가능 쿠폰 정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 사용자 쿠폰 히스토리 가져오기
export const getUserCouponHistory = (commonUrl, SsoKey) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}reward/Coupon`;
    const param = {
      SsoKey: SsoKey,
      StoreId: '1',
    };
    axios
      .post(url, param)
      .then((resCoupon) => {
        if (resCoupon.data.success) {
          resolve(resCoupon.data.Coupon);
        } else {
          reject(resCoupon.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '사용자 쿠폰 히스토리를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};
