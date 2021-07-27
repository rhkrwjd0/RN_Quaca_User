import React, {useState} from 'react';
import {StyleSheet, View, TouchableHighlight, Image, Text} from 'react-native';
import Modal from 'react-native-modal';
import OrderNotice from './OrderNotice';
import Styles from '../../Style/Style';
import StyleCommon from '../../Style/StyleCommon';

import messaging from '@react-native-firebase/messaging';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);
const Topbar = ({navigation}) => {
  const [orderNotice, setOrderNotice] = useState(false);

  const [msgData, setMsgData] = useState(null);
  // fcm 알림 받기
  messaging().onMessage(async (message) => {
    setMsgData(message);
    setOrderNotice(true);
  });

  // 오더준비완료 알림 모달
  const OrderNoticeModal = () => {
    return (
      <Modal
        statusBarTranslucent
        animationInTiming={500}
        animationOutTiming={500}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        useNativeDriver={true}
        isVisible={orderNotice}
        style={styleCommon.modalWrap}>
        <TouchableHighlight
          underlayColor=""
          style={[styleCommon.modalClose]}
          onPress={() => setOrderNotice(!orderNotice)}>
          <Image
            style={styleCommon.modalCloseImg}
            source={require('../../../assets/img/icon/btn_close_wh.png')}
          />
        </TouchableHighlight>

        <View style={[styleCommon.modalPopup, styleCommon.modalPopLeft]}>
          <View style={styleCommon.modalPopLeftInner}>
            <OrderNotice msgData={msgData} />
            <TouchableHighlight
              underlayColor=""
              style={[styleCommon.btn1Dark, styleCommon.btn1MdH]}
              onPress={() => setOrderNotice(!orderNotice)}>
              <Text style={styleCommon.btn1txtLight}>확인</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={[styles.topBar, styles.topBarMain]}>
      <TouchableHighlight
        style={styles.topBarBtn}
        underlayColor=""
        onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.btnNavi}
          source={require('../../../assets/img/main/ico_navi.png')}
        />
      </TouchableHighlight>
      {/*
      <Image
        style={styles.quacaLogo}
        source={require('../../../assets/img/main/logo.jpg')}
      />*/}
      <TouchableHighlight
        style={styles.topBarBtn}
        underlayColor=""
        onPress={() => {
          setOrderNotice(!orderNotice);
        }}>
        <Image
          style={styles.btnNotice}
          source={require('../../../assets/img/main/ico_notice.png')}
        />
      </TouchableHighlight>
      {OrderNoticeModal()}
    </View>
  );
};

export default Topbar;
