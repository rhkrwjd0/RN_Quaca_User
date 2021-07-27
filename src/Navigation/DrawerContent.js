import React, {useContext} from 'react';

import {Text} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';
import UserContext from '../Provider/UserContext';
import {QuacaLogout} from '../Function/Login/Quaca';
import {StackActions} from '@react-navigation/native';
import StyleCommon from '../Style/StyleCommon';
import Styles from '../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);
export function DrawerContent(props) {
  const _UserContext = useContext(UserContext);
  const {setUser} = useContext(UserContext);
  return (
    <View>
      {/* <View style={styles.drawerHeader}>
        <Text>
          <Text style={[styles.userNick]}>{_UserContext.user.NickName} </Text>님
          안녕하세요.
        </Text>
      </View> */}
      <TouchableOpacity 
        onPress={() => props.navigation.navigate('Home')}
        style={styles.drawerClose}
      >
        <Image
          style={styles.drawerCloseImg}
          source={require('../../assets/img/icon/btn_close_bk_s.png')}
        />
      </TouchableOpacity>
      <DrawerContentScrollView style={styles.drawerBox}>
        <View style={styles.drawerLine}></View>
        <View style={styles.drawerInner}>
          <View>
            <Text
              style={styles.drawerMn}
              onPress={() => props.navigation.navigate('Home')}>
              Home
            </Text>
          </View>
          <View>
            <Text
              style={styles.drawerMn}
              onPress={() => props.navigation.navigate('Reward')}>
              Reward
            </Text>
          </View>
          <View>
            <Text
              style={styles.drawerMn}
              onPress={() => props.navigation.navigate('StoreInfo', {storeId: '1'})}>
              Order
            </Text>
          </View>
          <View>
            <Text
              style={styles.drawerMn}
              onPress={() => props.navigation.navigate('QuickOrder')}>
              Order Favorites
            </Text>
          </View>
          <View>
            <Text
              style={styles.drawerMn}
              onPress={() => props.navigation.navigate('Frequency')}>
              Frequency
            </Text>
          </View>
          <View>
            <Text
              style={styles.drawerMn}
              onPress={() => props.navigation.navigate('History')}>
              History
            </Text>
          </View>
          <View>
            <Text
              style={styles.drawerMn}
              onPress={() => props.navigation.navigate('Coupon')}>
              Coupon
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.drawerBoxBtm}>
        <View style={styles.drawerLine}></View>
        <Text
          style={styles.drawerMnBtm}
          onPress={() => props.navigation.navigate('Stores')}>
          Stores
        </Text>
        <Text
          style={styles.drawerMnBtm}
          onPress={() => props.navigation.navigate('CustomerCenter')}>
          Customer Center
        </Text>
        
        <Text
          style={[styles.drawerMnLogout]}
          onPress={() => {
            QuacaLogout(_UserContext.user.LoginType)
              .then(() => {
                setUser({user: ''});
                alert('로그아웃 완료');
                props.navigation.dispatch(StackActions.popToTop());
              })
              .catch((err) => {
                Alert.alert('logout error', err);
              });
          }}>
          LOGOUT
        </Text>
        {/* <Text
          style={styles.botTxt}
          onPress={() => {
            props.navigation.navigate('FCMSetting');
          }}>
          알림설정
        </Text>
        <Text
          style={styles.botTxt}
          onPress={() => {
            props.navigation.navigate('Terms');
          }}>
          이용약관
        </Text>
        <Text
          style={styles.botTxt}
          onPress={() => {
            props.navigation.navigate('PrivacyPolicy');
          }}>
          개인정보처리방침
        </Text> */}
      </View>
    </View>
  );

}
