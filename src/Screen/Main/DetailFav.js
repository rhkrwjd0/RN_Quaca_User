import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserAvialableCoupon} from '../../Function/ApiAxios/User';
import StyleCommon from '../../Style/StyleCommon';
import Style from '../../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Style);

const DetailFav = (props) => {
  
  return (
    <View style={styles.receiptDetail}>
    {/* 스타일확인용 임시태그 */}
    <View style={styles2.receiptDetailLine}>
        <View style={styles2.receiptDetailTitle}>
            <Text style={styles2.receiptDetailTitleText}>FAVORITAE DETAIL</Text>
        </View>
        <View style={styles.receiptDetailBoxLine}>
                <Text style={[styles.receiptDetailTxt,{fontSize:15,fontWeight:'bold'}]}>에티오피아 예가체프 아메리카노</Text>
                <View style={styleCommon.flexRow}>
                  <Text style={[styles.receiptDetailNum,{fontSize:16}]}> <Text style={[styles.receiptDetailNum,{fontWeight:'bold',fontSize:16}]}>1</Text>개</Text>
                </View>
        </View>
        <View style={[styles.receiptDetailBoxLin,{marginBottom:10}]}>
           <Text style={[styles.receiptDetailTxt,{fontWeight:'bold'}]}>얼음량 조금/Tall/일회용컵</Text>
        </View>
        <View style={[styles.receiptDetailBoxLine,{marginBottom:15}]}>
            <Text style={[styles.receiptDetailTxt,{fontSize:14}]}><Text style={[styles.receiptDetailNum,{fontWeight:'bold',fontSize:15}]}>3,000</Text>원</Text>
        </View>
    </View>
    <View style={styles2.receiptDetailLine}>
        <View style={[styles.receiptDetailBoxLine,{marginTop:20}]}>
                <Text style={[styles.receiptDetailTxt,{fontSize:15,fontWeight:'bold'}]}>콜롬비아 슈프리모 아메리카노</Text>
                <View style={styleCommon.flexRow}>
                  <Text style={[styles.receiptDetailNum,{fontSize:16}]}> <Text style={[styles.receiptDetailNum,{fontWeight:'bold',fontSize:16}]}>1</Text>개</Text>
                </View>
        </View>
        <View style={[styles.receiptDetailBoxLin,{marginBottom:10}]}>
           <Text style={[styles.receiptDetailTxt,{fontWeight:'bold'}]}>얼음량 조금/Tall/일회용컵</Text>
        </View>
        <View style={[styles.receiptDetailBoxLine,{marginBottom:15}]}>
            <Text style={[styles.receiptDetailTxt,{fontSize:14}]}><Text style={[styles.receiptDetailNum,{fontWeight:'bold',fontSize:15}]}>3,500</Text>원</Text>
        </View>
    </View>

    <View style={styles.receiptDetailFooter}>
        <Text style={[styles.receiptDetailTxt,{fontWeight:'bold'}]}><Text style={[styles.receiptDetailNum,{fontWeight:'bold',fontSize:14}]}>주문매장</Text> : 그린로점</Text>
    </View>
    {/* //스타일확인용 임시태그 */}
</View>
  );
};

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
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default DetailFav;
