import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import {naverLogin, getUserProfile} from '../../Function/Login/Naver';
import {kakaoLogin, getProfile} from '../../Function/Login/Kakao';
import {googleLogin} from '../../Function/Login/Google';
import {QuacaLogin, GetToken} from '../../Function/Login/Quaca';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import Styles from '../../Style/Style';
import StyleCommon from '../../Style/StyleCommon';

const Login = ({navigation}) => {
  const _UrlContext = useContext(UrlContext);
  const {setUser} = useContext(UserContext);

  const LoginFunc = (id, type) => {
    QuacaLogin(_UrlContext.url, id)
      .then((resLogin) => {
        if (resLogin.success) {
          // 사용자정보 context에 저장 후 홈으로
          setUser({user: resLogin.info});
          navigation.navigate('Drawer');
        } else {
          // 회원가입으로
          navigation.navigate('Join', {id: id, type: type});
        }
      })
      .catch((err) => {
        console.log('login fail', err);
        Alert.alert('login fail', err);
      });
  };

  return (
    <SafeAreaView style={[styleCommon.container, styles.containerLogin]}>
      <Text style={[styles.loginTit]}>Sign in</Text>
      <Text style={[styles.loginGuide]}>
        {`회원미가입시 해당서비스 로그인버튼을 클릭하시면\n자동으로 회원가입이 진행됩니다.`}
      </Text>

      <View style={styles.loginBtnBox}>
        {/* 구글 */}
        <TouchableHighlight
          underlayColor=""
          style={[styles.loginBtn]}
          onPress={() =>
            googleLogin()
              .then((resToken) => {
                console.log('res google > ', resToken);
                LoginFunc(resToken.user.id, 'G');
              })
              .catch((err) => {
                Alert.alert('google login error', err);
              })
          }>
          <View style={styles.loginLogoTxtBox}>
            <Image
              style={styles.loginSocialLogo}
              source={require('../../../assets/img/login/ico_login_google.png')}
            />
            <Text style={[styles.loginBtntxt]}>
              구글아이디로 로그인
            </Text>
          </View>
        </TouchableHighlight>

        {/* 네이버 */}
        <TouchableHighlight
          underlayColor=""
          style={[styles.loginBtn]}
          onPress={() =>
            naverLogin()
              .then((resToken) => {
                getUserProfile(resToken).then((resProfile) => {
                  if (!resProfile) {
                    Alert.alert('naver login fail', resProfile);
                  } else {
                    console.log('res naver > ', resProfile);
                    LoginFunc(resProfile.response.id, 'N');
                  }
                });
              })
              .catch((err) => {
                Alert.alert('naver login error', err);
              })
          }>
          <View style={styles.loginLogoTxtBox}>
            <Image
              style={styles.loginSocialLogo}
              source={require('../../../assets/img/login/ico_login_naver.png')}
            />
            <Text style={[styles.loginBtntxt, {color: '#FFFFFF'}]}>
              네이버아이디로 로그인
            </Text>
          </View>
        </TouchableHighlight>

        {/* 카카오 */}
        <TouchableHighlight
          underlayColor=""
          style={[styles.loginBtn]}
          onPress={() =>
            kakaoLogin()
              .then((resToken) => {
                console.log('resToken > ',resToken)
                getProfile()
                  .then((resProfile) => {
                    console.log('res kakao > ', resProfile);
                    LoginFunc(resProfile.id, 'K');
                  })
                  .catch((err) => {
                    Alert.alert('kakao profile error', err);
                  });
              })
              .catch((err) => {
                Alert.alert('kakao login error', err);
              })
          }>
          <View style={styles.loginLogoTxtBox}>
            <Image
              style={styles.loginSocialLogo}
              source={require('../../../assets/img/login/ico_login_kakao.png')}
            />
            <Text style={[styles.loginBtntxt]}>
              카카오아이디로 로그인
            </Text>
          </View>
        </TouchableHighlight>

        {/* 애플 */}
        <TouchableHighlight
          underlayColor=""
          style={[styles.loginBtn, {opacity:0.8}]}
          >
          <View style={styles.loginLogoTxtBox}>
            <Image
              style={styles.loginSocialLogo}
              source={require('../../../assets/img/login/ico_login_apple.png')}
            />
            <Text style={[styles.loginBtntxt]}>
              애플아이디로 로그인
            </Text>
          </View>
        </TouchableHighlight>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

export default Login;
