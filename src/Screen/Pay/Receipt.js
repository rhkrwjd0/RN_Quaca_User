import React, {useEffect, useState,useContext} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {getStoreInfo} from '../../Function/ApiAxios/Store';
import Dash from 'react-native-dash';
import {PayMethod} from './changeKo';
import UrlContext from '../../Provider/UrlContext';


const Receipt = (props) => {

  const _UrlContext = useContext(UrlContext)
  const payDetail = props.payDetail;
  const UserPayId = props.UserPayId;

  const [storeInfo, setStoreInfo] = useState(null);
  useEffect(() => {
    getStoreInfo(_UrlContext.url, payDetail.StoreId)
      .then((resStore) => {
        setStoreInfo(resStore);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const StoreInfoBox = () => {
    return (
      <View style={styles.storeInfoBox}>
        <View style={styles.InfoBox}>
          <Text style={styles.infoTxt}>{storeInfo.StoreName}</Text>
          <Text style={styles.infoTxt}>T: {storeInfo.TelNo}</Text>
        </View>
        <View style={styles.InfoBox}>
          <Text style={styles.infoTxt}>{storeInfo.Addr1}</Text>
        </View>
        <View style={styles.InfoBox}>
          <Text style={styles.infoTxt}>{storeInfo.Addr2}</Text>
          <Text style={styles.infoTxt}>{payDetail.PayCompleteTime}</Text>
        </View>
        <Dash dashColor="gray" dashLength={5} dashGap={4} style={styles.dash} />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    let option = '';
    if (item.OptionA !== null) {
      option = option + item.OptionA;
    }
    if (item.OptionB !== null) {
      option = option + '/' + item.OptionB;
    }
    if (item.OptionC !== null) {
      option = option + '/' + item.OptionC;
    }

    return (
      <View style={[styles.receiptBox, index !== 0 && {paddingTop: 10}]}>
        <View>
          <Text style={styles.menuName}>{item.MenuName}</Text>
          <Text> - {option}</Text>
        </View>
        <Text>{item.Price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUACA</Text>
      {storeInfo !== null && StoreInfoBox()}
      <Text style={styles.orderNum}>주문번호 {payDetail.OrderNum}</Text>
      <Dash dashColor="gray" dashLength={5} dashGap={4} style={styles.dash} />
      <FlatList
        data={payDetail.OrderMenu}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Dash dashColor="gray" dashLength={5} dashGap={4} style={styles.dash} />
      <View style={styles.receiptBox}>
        <Text style={styles.priceTxt}>결제금액</Text>
        <Text style={styles.priceTxt}>{payDetail.TotalPrice} 원</Text>
      </View>
      <Dash dashColor="gray" dashLength={5} dashGap={4} style={styles.dash} />
      <View style={styles.receiptBox}>
        <Text>{PayMethod[payDetail.PayMethod]}</Text>
      </View>
      <View style={styles.receiptBox}>
        <Text>승인번호</Text>
        <Text>아직없음</Text>
      </View>
      <View style={styles.receiptBox}>
        <Text>주문번호</Text>
        <Text>{UserPayId}</Text>
      </View>
      <Dash dashColor="gray" dashLength={5} dashGap={4} style={styles.dash} />
      <Text style={styles.botTxt}>http://teraenergy.co.kr/</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  dash: {
    width: '100%',
    height: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
  },
  storeInfoBox: {
    marginTop: 30,
  },
  InfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoTxt: {
    fontSize: 12,
  },
  orderNum: {
    fontSize: 20,
    textAlign: 'center',
  },
  receiptBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTxt: {
    fontSize: 15,
    fontWeight: '700',
  },
  botTxt: {
    color: '#9d9ea1',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Receipt;
