import Geolocation from 'react-native-geolocation-service';
import {Alert} from 'react-native';

import {requestLocationPermission} from './requestLocationPermission';


// 현재위치 위도/경보 정보 가져오기
export const CurrentPosition = () => {
  return new Promise((resolve, reject) => {
    // 위치정보 권한요청하기
    requestLocationPermission().then((resPermission) => {
      if (resPermission) {
        // 위도/경도 가져오기
        Geolocation.getCurrentPosition(
          (position) => {
            console.log('getCurrentPosition success');
            const {latitude, longitude} = position.coords;
            resolve({code: 0, lat: latitude, lon: longitude});
          },
          (error) => {
            Alert.alert('getCurrentPosition error', error);
            console.log('getCurrentPosition error : ', error.message);
            if (error.code === 5) {
              resolve({
                code: error.code,
                msg:
                  '위치정보를 가져올 수 없습니다. 위치서비스를 활성화해주세요.',
              });
            } else {
              resolve({code: error.code, msg: error.message});
            }
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        resolve({code: 1, msg: '위치정보 사용을 거부하셨습니다.'});
      }
    });
  }).catch((err) => {
    Alert.alert('requestLocationPermission error : ', err);
    console.log('requestLocationPermission error : ', err);
    reject({code: 999, msg: err});
  });
};
