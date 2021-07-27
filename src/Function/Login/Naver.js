import {Alert, Platform} from 'react-native';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';


// kConsumerKey, kConsumerSecret : 네이버개발자센터 -> Application -> 내 애플리케이션 -> QUACA 에서 확인가능
const iosKeys = {
  kConsumerKey: 'jprQfmQrzaKKQm7sWZnw',
  kConsumerSecret: 'Dc8uq0Jdfm',
  kServiceAppName: '쿼카테스트',
  kServiceAppUrlScheme: 'testapp', // only for iOS
};

const androidKeys = {
  kConsumerKey: 'jprQfmQrzaKKQm7sWZnw',
  kConsumerSecret: 'Dc8uq0Jdfm',
  kServiceAppName: '쿼카테스트',
};

export const naverLogin = () => {
  return new Promise((resolve, reject) => {
    const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;
    NaverLogin.login(initials, (err, token) => {
      if (err) {
        reject(`Login Failed:${err}`);
      } else {
        resolve(token);
      }
    });
  });
};

export const naverLogout = () => {
  NaverLogin.logout();
};


export const getUserProfile = async (naverToken) => {
  const profileResult = await getProfile(naverToken.accessToken);
  console.log('profileResult', profileResult);
  if (profileResult.resultcode === '024') {
    Alert.alert('로그인 실패', profileResult.message);
    return false;
  } else {
    return profileResult
  }
  
};
