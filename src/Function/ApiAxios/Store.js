import axios from 'axios';
import {Alert} from 'react-native';

// 해당매장 정보 가져오기 (이미지, 영업시간 등)
export const getStoreInfo = (commonUrl, storeId) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}store/select`;
    const param = {
      StoreId: storeId,
    };
    axios
      .post(url, param)
      .then((resStore) => {
        if (resStore.data.success) {
          resolve(resStore.data.info);
        } else {
          reject(resStore.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '매장정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};

// 매장전체 목록 가져오기
export const getStoreList = (commonUrl, Addr) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}store/storeselect`;
    const param = {
      Addr : Addr,
    };
    axios
      .post(url, param)
      .then((resStoreList) => {
        if (resStoreList.data.success) {
          resolve(resStoreList.data.info);
        } else {
          reject(resStoreList.data);
        }
      })
      .catch((err) => {
        Alert.alert(
          err,
          '매장정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};
