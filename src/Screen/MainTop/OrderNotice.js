import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserPay} from '../../Function/ApiAxios/Pay';
import {PayStatus} from '../Pay/changeKo';
import Styles from '../../Style/Style';
import StyleCommon from '../../Style/StyleCommon';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);
const OrderNotice = (props) => {
  
  let payInfo = props.msgData;

  const renderItem = ({item}) => {
    return (
      <View style={styles.orderNoticeMn}>
        <Text style={styles.orderNoticeMnTxt}>{item.MenuName}</Text>
        <View style={styleCommon.flexRow}>
        <Text style={[styles.orderNoticeMnCnt, styleCommon.txtBold]}>{item.OrderCnt}</Text>
          <Text style={styles.orderNoticeMnCnt}>개</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.orderDoneNotice}>
      {/* 스타일확인용 임시태그 */}
      <Text style={styles.orderNoticeTit}>{payInfo != null ? payInfo.notification.body : "주문 정보가 존재하지 않습니다."}</Text>      
      {payInfo != null && (
        <View>
          <View style={styles.orderNoticeInfoBox}>
                <Text style={styles.orderNoticeInfo}>주문번호 : {payInfo != null ? JSON.parse(payInfo.data.info)[0].OrderNum : "-"}</Text>
                <Text style={styles.orderNoticeInfo}>{payInfo != null ? JSON.parse(payInfo.data.info)[0].InsertDt : "-"}</Text>
          </View>
          <View style={styles.orderNoticeMnBox}>
            <FlatList
                data={JSON.parse(payInfo.data.info)}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      )}
      {/* //스타일확인용 임시태그 */}
    </View>
  );
};

export default OrderNotice;
