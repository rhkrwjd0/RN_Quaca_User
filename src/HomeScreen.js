import React, {useEffect, useContext} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {getGeoLocation} from './Function/ApiAxios/GeoLocation';
import {startCart} from './Function/Cart/AsyncCart';
import UrlContext from '../src/Provider/UrlContext';
import UserContext from '../src/Provider/UserContext';
import LoginStack from './Navigation/LoginStack';
import {nowUrl} from './UrlAddress';

const HomeScreen = () => {
  const {setUrl} = useContext(UrlContext);
  const {setLocation} = useContext(UserContext);

  useEffect(() => {
    // common url에서 api 주소 가져와서 context담기
    nowUrl().then((resUrl) => {
      setUrl({url: resUrl});
    });
    // 사용자 위치 정보 가져와서 context담기
    getGeoLocation()
    
      .then((resLocation) => {
        setLocation({location: resLocation});
      })
      .catch((err) => {
        alert(err);
        setLocation({location: String(err)});
      });
    // 장바구니 없으면 새로생성
    startCart().catch((err) => {
      alert(err);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default HomeScreen;
