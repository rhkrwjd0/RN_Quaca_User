import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserAvialableCoupon} from '../../Function/ApiAxios/User';
import StyleCommon from '../../Style/StyleCommon';
import Style from '../../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Style);

const QrCode = () => {
  return (
    <View style={styles.couponQrCode}>
      <Text style={styles.couponName}>[리워드] 아이스 아메리카노</Text>
      <Image
         style={styles.couponQr}
        source={require('../../../assets/img/sample_qr.png')}
      />
      <Text style={styles.couponCode}>213 - 2543 - 6433</Text>
    </View>
  );
};

export default QrCode;
