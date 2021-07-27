import {PermissionsAndroid, Platform} from 'react-native';
import {Alert} from 'react-native';

// 위치정보 권한요청
export const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization('whenInUse');
  }
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App LOCATION Permission',
          message:
            'QUACA needs access to your LOCATION' +
            '위치정보 미제공시 앱 사용이 불안정 합니다.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        console.log('위치정보 사용을 허가');
        return true;
      } else {
        console.log('위치정보 사용을 거부');
        return false;
      }
    } catch (err) {
      Alert.alert('Permission Error', err);
      return err;
    }
  }
};
