import axios from 'axios';
import {Alert} from 'react-native';

// 해당매장 메뉴 전체 가져오기
export const getAllMenu = (commonUrl, storeId) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}menu/select`;
    const param = {
      StoreId: storeId,
    };
    console.log('storeId > ', storeId);
    axios
      .post(url, param)
      .then((resMenu) => {
        console.log('resMenu > ', resMenu.data);
        if (resMenu.data.success) {
          resolve(resMenu.data.info);
        } else {
          reject(resMenu.data);
        }
      })
      .catch((err) => {
        console.log('err > ', err);
        Alert.alert(
          err,
          '메뉴정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
        );
        reject(err);
      });
  });
};
