import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, StatusBar, Alert } from 'react-native';
import Splash from './src/Splash';
import HomeScreen from './src/HomeScreen';
import UrlProvider from './src/Provider/UrlProvider';
import UserProvider from './src/Provider/UserProvider';
import StoreProvider from './src/Provider/StoreProvider';
//import messaging from '@react-native-firebase/messaging';
import StyleCommon from './src/Style/StyleCommon';

const App = () => {
  // splash 
  const [isLoading, setLoading] = useState(false);
  /*
  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [{ text: '확인', onPress: () => console.log('OK Pressed') }],
      { cancelable: false },
    );
  };
  */
  // 권한... 도대체 왜 허용하냐는 창은 안뜨고 혼자 허용이니.......
  /*const fcmPermission = () => {
    messaging()
      .requestPermission()
      .then((authStatus) => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (enabled) {
          messaging()
            .getToken()
            .then((token) => {
              console.log('token >>> ' + token);
            });
        }
      });
  };*/

  // fcm 알림 받기
  /*messaging().onMessage(async (message) => {
    const { title, body } = message.notification;
    showAlert(title, body);
  });*/

  useEffect(() => {
    // 스플래시 1초
    setTimeout(() => {
      setLoading(true);
    }, 1000);

    /*fcmPermission();*/
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor={'transparent'}
        translucent={true}
      />
      <SafeAreaView>
        {!isLoading ? (
          <Splash />
        ) : (
          <UrlProvider>
            <StoreProvider>
              <UserProvider>
                <HomeScreen />
              </UserProvider>
            </StoreProvider>
          </UrlProvider>
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
