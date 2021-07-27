import axios from 'axios';
import {nowUrl} from '../../UrlAddress';
import {CurrentPosition} from '../../LBS/CurrentPosition';
import {Alert} from 'react-native';

// 위도/경도 추출 및 위도/경도 -> 주소로 변환
export const getGeoLocation = () => {
  return new Promise((resolve, reject) => {
    // 위도/경도 정보 요청하기
    CurrentPosition()
      .then((resLocation) => {
        if (resLocation.code === 0) {
          // 위도/경도 -> 주소로 변환해주는 api 요청
          nowUrl().then((commonUrl) => {
            const url = `${commonUrl.express}geo/reversegeo`;
            const param = {
              lat: resLocation.lat,
              lon: resLocation.lon,
            };
            axios
              .post(url, param)
              .then((resReverseGeo) => {
                if (resReverseGeo.data.success) {
                  resolve(resReverseGeo.data.info);
                } else {
                  console.log('ReverseGeo axios 실패 : ', resReverseGeo.data);
                  resolve(resReverseGeo.data.msg);
                }
              })
              .catch((err) => {
                console.log('ReverseGeo axios 에러 : ', err);
                Alert.alert(
                  err,
                  '위치정보를 받아 올 수 없습니다. 네트워크 연결상태를 확인해주세요.',
                );
                reject(err);
              });
          });
        } else if (resLocation.code === 1 || resLocation.code === 5) {
          reject(resLocation.msg);
        } else {
          console.log('CurrentPosition 실패 : ', resLocation.msg);
          Alert.alert('CurrentPosition fail', resLocation.msg);
          reject(resLocation.msg);
        }
      })
      .catch((err) => {
        console.log('CurrentPosition catch : ', err);
        Alert.alert('CurrentPosition error', err);
        reject(err);
      });
  });
};
