import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {getUserPayDetail} from '../../Function/ApiAxios/Pay';
import Modal from 'react-native-modal';
import Receipt from './Receipt';
import {PayMethod} from './changeKo';
import UrlContext from '../../Provider/UrlContext'


const PayDetail = ({navigation, route}) => {
  const _UrlContext = useContext(UrlContext)
  const [payDetail, setPayDetail] = useState(null);
  var UserPayId = route.params.UserPayId;

  useEffect(() => {
    getUserPayDetail(_UrlContext.url, UserPayId)
      .then((resPayDetail) => {
        setPayDetail(resPayDetail);
      })
      .catch((err) => {
        console.log(`getUserPayDetail error: ${err}`);
      });
  }, []);


  const renderItem = ({item, index}) => {
    let option = '';
    if (item.OptionA !== null) {
      option = option + item.OptionA + '/';
    }
    if (item.OptionB !== null) {
      option = option + item.OptionB + '/';
    }
    if (item.OptionC !== null) {
      option = option + item.OptionC;
    }

    return (
      <View style={[index !== 0 && styles.menuBox, {paddingBottom: 10}]}>
        <Text style={styles.menuName}>{item.MenuName}</Text>
        <View style={styles.timePrice}>
          <Text>{option}</Text>
          <Text>{item.Price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</Text>
        </View>
      </View>
    );
  };

  const PayDetailView = () => {
    return (
      <>
        <Text style={styles.orderNum}>주문번호 {payDetail.OrderNum}</Text>
        <View style={styles.orderBox}>
          <View style={{marginBottom: 20}}>
            <Text>결제완료</Text>
            <Text>{payDetail.PayCompleteTime}</Text>
          </View>
          <View>
            <Text>제조완료</Text>
            <Text>
              {payDetail.MenuCompleteTime !== null
                ? payDetail.MenuCompleteTime
                : '아직 메뉴가 준비되지 않았습니다.'}
            </Text>
          </View>
        </View>
        <View style={styles.orderBox}>
          <FlatList
            data={payDetail.OrderMenu}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.orderBox}>
          <Text>{PayMethod[payDetail.PayMethod]}</Text>
          <View style={styles.cntPrice}>
            <Text>총 {payDetail.OrderMenu.length} 개</Text>
            <Text>
              {payDetail.TotalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
            </Text>
          </View>
        </View>
      </>
    );
  };

  // 영수증 모달
  const [openReceipt, setOpenReceipt] = useState(false);
  const ReceiptModal = () => {
    return (
      <Modal
        statusBarTranslucent
        animationInTiming={500}
        animationOutTiming={500}
        isVisible={openReceipt}
        style={styles.modalPosition}>
        <View style={styles.modalTop}>
          <Text style={styles.modalTitle}>Receipt</Text>
          <TouchableHighlight
            style={styles.cancelBtnTouch}
            underlayColor="rgba(200,200,200,0.5)"
            onPress={() => setOpenReceipt(!openReceipt)}>
            <Image
              style={styles.cancelBtn}
              source={require('../../../assets/img/icon/cancel.png')}
            />
          </TouchableHighlight>
        </View>
        <ScrollView>
          <Receipt payDetail={payDetail} UserPayId={UserPayId} />
        </ScrollView>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {payDetail !== null ? PayDetailView() : <Text>로딩중...</Text>}
      <TouchableHighlight
        underlayColor="rgba(200,200,200,0.5)"
        onPress={() => {
          setOpenReceipt(!openReceipt);
        }}>
        <Text style={styles.goHistoryBtn}>영수증보기</Text>
      </TouchableHighlight>
      {openReceipt && ReceiptModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  orderNum: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  orderBox: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
  },
  menuBox: {
    borderTopColor: 'whitesmoke',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  cntPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goHistoryBtn: {
    width: '100%',
    backgroundColor: '#A60030',
    color: 'white',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  modalPosition: {
    backgroundColor: '#E6E6E6',
  },
  modalTop: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingLeft: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
  },
  cancelBtnTouch: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    width: 15,
    height: 15,
  },
});

export default PayDetail;
