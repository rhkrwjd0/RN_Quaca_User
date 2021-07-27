import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Image,
  View,
  Modal,
} from 'react-native';
import {QuacaJoin, GetToken} from '../../Function/Login/Quaca';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserAvialableCoupon} from '../../Function/ApiAxios/User';
import StyleCommon from '../../Style/StyleCommon';
import Style from '../../Style/Style';
import { State } from 'react-native-gesture-handler';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Style);




const LoginSuccess = (props) => {
  
  let closeDetailModalFun = ()=>{ props.closeDetailModal()};

  return (
    <View style={styles.receiptDetail}>
    {/* 스타일확인용 임시태그 */}
    <View style={styles2.receiptDetailLine}>
        <View style={styles2.receiptDetailTitle}>
            <Text style={styles2.receiptDetailTitleText}>회원가입이 완료 되었습니다.</Text>
        </View>       
    <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1MdH]}
        onPress={() => {
          closeDetailModalFun();
        }}>
        <Text style={styleCommon.btn1txtLight}>확인</Text>
      </TouchableHighlight>
    </View>
</View>
  );
}

const styles2 = StyleSheet.create({
  receiptDetailLine: {
    borderBottomWidth: 2,
    borderColor: '#f2f2f2',
  },
  receiptDetailTitle :{
    paddingTop: 25,
    paddingBottom: 25,
  },
  receiptDetailTitleText :{
    textAlign: 'center',
    fontSize: 16,
    marginTop:30,
    marginBottom:60,
    
  },
});
export default LoginSuccess;
