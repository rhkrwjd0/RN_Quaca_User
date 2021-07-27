import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import {googleLogout} from './Google';
import {naverLogout} from './Naver';
import {kakaoLogout} from './Kakao';
import {Alert} from 'react-native';

// 쿼카 로그인 (소셜로그인 후 ssokey로 api에서 사용자정보 확인)
export const QuacaLogin = (commonUrl, SsoKey) => {
  return new Promise((resolve, reject) => {
    const url = `${commonUrl.express}users/select`;
    const param = {SsoKey: SsoKey};
    let userInfo = {};
    axios
      .post(url, param)
      .then((resLogin) => {
        if (resLogin.data.success) {
          userInfo = resLogin.data;
          // token 수정 될 수도있으니.. 로그인 할때마다 토큰한번씩 받아오기
          GetToken().then((resToken) => {
            if (resToken !== resLogin.data.info.Token) {
              // db토큰이랑 새로받은토큰이랑 다르면 db 수정
              TokenUpdate(commonUrl, SsoKey, resToken);
              userInfo['info']['Token'] = resToken;
              resolve(userInfo);
            } else {
              resolve(userInfo);
            }
          });
        } else {
          if (resLogin.data.msg === null) {
            resolve(resLogin.data);
          } else {
            console.log('resLogin.data > ',resLogin.data)
            reject(resLogin.data.msg);
          }
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// 쿼카 회원가입 (닉네임 입력 후 가입)
export const QuacaJoin = (commonUrl, SsoKey, token, nick, type) => {
  return new Promise((resolve, reject) => {
    console.log('SsoKey > ', SsoKey);
    console.log('token > ', token);
    console.log('nick > ', nick);
    const url = `${commonUrl.express}users/join`;
    const param = {Token: token, SsoKey: SsoKey, nickname: nick, LoginType: type};
    axios
      .post(url, param)
      .then((resJoin) => {
        console.log('resJoin > ', resJoin.data);
        if (resJoin.data.success) {
          QuacaLogin(commonUrl, SsoKey)
            .then((resLogin) => {
              resolve(resLogin);
              console.log('resLogin > ', resLogin);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          if (resJoin.data.msg === 'SsoKey값 중복') {
            resolve(false);
          } else {
            reject(resJoin.data.msg);
          }
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// 핸드폰 토큰 받아오기
export const GetToken = () => {
  return new Promise((resolve, reject) => {
    messaging()
      .getToken()
      .then((fcmToken) => {
        resolve(fcmToken);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// 로그아웃
export const QuacaLogout = (type) => {
  return new Promise((resolve, reject) => {
    if (type === 'G') {
      //구글로그아웃
      googleLogout()
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          console.log(`구글로그아웃 실패 : ${err}`);
          reject(err);
        });
    } else if (type === 'N') {
      //네이버 로그아웃
      naverLogout();
      resolve(true);
    } else if (type === 'K') {
      //카카오 로그아웃
      kakaoLogout()
        .then((resOut) => {
          console.log(`카카오 로그아웃 : ${resOut}`);
          resolve(true);
        })
        .catch((err) => {
          console.log(`카카오로그아웃 실패 : ${resOut}`);
          reject(err);
        });
    }
  });
};

// db토큰이랑 핸드폰 토큰이랑 다르면 db수정
export const TokenUpdate = (commonUrl, SsoKey, token) => {
  console.log('token > ', token);
  const url = `${commonUrl.express}users/update`;
  const param = {SsoKey: SsoKey, Token: token};
  axios
    .post(url, param)
    .then((resUpdate) => {
      if (resUpdate.data.success) {
        alert('토큰이 수정되었습니다.');
      } else {
        Alert.alert('TokenUpdate fail : ', resUpdate.data.msg);
      }
    })
    .catch((err) => {
      Alert.alert('TokenUpdate error : ', err);
    });
};
