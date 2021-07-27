import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableHighlight} from 'react-native';
//import {TouchableHighlight} from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {getUserPay, getUserPayDetail} from '../../Function/ApiAxios/Pay';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {PayStatus} from './changeKo';
import ReceiptDetail from './ReceiptDetail';
import Styles from '../../Style/Style';
import StyleCommon from '../../Style/StyleCommon';

import Modal from 'react-native-modal';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const PayHistory = ({navigation, route}) => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [payInfo, setPayInfo] = useState(null);
  const period = route.params.orderHistoryPeriod;
  const [startDatePicker, setStartDatePicker] = useState(false);
  const [endDatePicker, setEndDatePicker] = useState(false);
  var [startDate, setStartDate] = useState("");
  var [endDate, setEndDate] = useState("");

  const showDatePickerStart = () => {
    setStartDatePicker(true);
  };
  const hideDatePickerStart = () => {
    setStartDatePicker(false);
  };
  const setDateStart = (date) => {
    setStartDate(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
    hideDatePickerStart();
  };
  const showDatePickerEnd = () => {
    setEndDatePicker(true);
  };
  const hideDatePickerEnd = () => {
    setEndDatePicker(false);
  };
  const setDateEnd = (date) => {
    setEndDate(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
    hideDatePickerEnd();
  };

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var today = year+"-"+month+"-"+date;
    setStartDate(today);
    setEndDate(today);
    getUserPay(_UrlContext.url, _UserContext.user.SsoKey, period, today, today)
    .then((resPay) => {
      setPayInfo(resPay);
    })
    .catch((err) => {
      console.log('getUserPay error: ', err);
    });
  }, []);

  // 기간 검색
  const searchDataUpdate = () => {
    getUserPay(_UrlContext.url, _UserContext.user.SsoKey, period, startDate, endDate)
    .then((resPay) => {
      setPayInfo(resPay);
    })
    .catch((err) => {
      console.log('getUserPay error: ', err);
    });
  }
  // 영수증 데이터 조회
  const [payDetail, setPayDetail] = useState(null);
  const [StoreId, setStoreId] = useState(null);
  const searchReceiptDetail = (UserPayId) =>{
    
    getUserPayDetail(_UrlContext.url, UserPayId)
      .then((resPayDetail) => {
        setPayDetail(resPayDetail);
      })
      .catch((err) => {
        console.log(`getUserPayDetail error: ${err}`);
      });
  }

  // 영수증 모달
  const [openReceipt, setOpenReceipt] = useState(false);
  const ReceiptModal = () => {
    return (
      <Modal
        statusBarTranslucent
        animationInTiming={500}
        animationOutTiming={500}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        useNativeDriver={true}
        isVisible={openReceipt}
        style={styleCommon.modalWrap}
      >
        <TouchableHighlight
          underlayColor=""
          style={[styleCommon.modalClose]}
          onPress={() => setOpenReceipt(!openReceipt)}>
          <Image
            style={styleCommon.modalCloseImg}
            source={require('../../../assets/img/icon/btn_close_wh.png')}
          />
        </TouchableHighlight>

        <View style={[styleCommon.modalPopup, styleCommon.modalPopLeft]}>
          <View style={styleCommon.modalPopLeftInner}>
            <ReceiptDetail payDetail={payDetail} StoreId={StoreId} />
          </View>
        </View>
      </Modal>
    );
  };
  // 달력
  const ShowInputCalendar = () => {
      return (
        (period === "term") &&
        <View style={styleCommon.periodSearchBox}>
          <TouchableHighlight underlayColor="" style={styleCommon.periodDatePickerWrap} onPress={showDatePickerStart}>
            <View>
              <Text style={[styleCommon.inputBox, styleCommon.periodDatePicker]}>{startDate}</Text>
              <Image style={styleCommon.periodDateImg} source={require('../../../assets/img/icon/ico_calendar.png')} />
              <DateTimePickerModal
                isVisible={startDatePicker}
                mode="date"
                onConfirm={setDateStart}
                onCancel={hideDatePickerStart}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="" style={styleCommon.periodDatePickerWrap} onPress={showDatePickerEnd}>
            <View>
              <Text style={[styleCommon.inputBox, styleCommon.periodDatePicker]}>{endDate}</Text>
              <Image style={styleCommon.periodDateImg} source={require('../../../assets/img/icon/ico_calendar.png')} />
              <DateTimePickerModal
                isVisible={endDatePicker}
                mode="date"
                onConfirm={setDateEnd}
                onCancel={hideDatePickerEnd}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight 
            underlayColor=""
            style={styleCommon.btnSrch}
            onPress={() => {
              searchDataUpdate();
            }}
          >
            <Image
              style={styleCommon.btnSrchImg}
              source={require('../../../assets/img/icon/ico_search.png')}
            />
          </TouchableHighlight>
        </View>
      );
  }

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight 
        underlayColor=""
        onPress={ () => {
          setStoreId(item.StoreId);
          searchReceiptDetail(item.UserPayId);
          setOpenReceipt(!openReceipt);
        }}
      >
        <View style={[styleCommon.photoList1, styles.historyList]}>
          <Text style={styles.historyListInfo}>{item.PayCompleteTime} / No.{JSON.parse(item.MenuList)[0].OrderNum}</Text>
          <Text style={styles.historyStatus}>
            <Text style={styleCommon.txtColorRd}>{item.OrderStatus}</Text>
          </Text>
          <Text style={styles.historyPriceTotal}>
            <Text style={styles.historyPriceTotalNum}>{item.TotalPrice}</Text>원
          </Text>
          {
            JSON.parse(item.MenuList).map((menuItem, index) => {
              return(
                <View style={[styleCommon.photoList1Item, styles.historyListItem]} key={index}>
                  <Image
                    source={require('../../../assets/img/sample_coffee.png')}
                    style={styleCommon.photoList1ImgS}
                  />
                  <View style={styleCommon.photoList1Txtbox}>
                    <View style={styleCommon.flexRow}>
                      <Text style={[styleCommon.txtSizeMd, styleCommon.txtBold]}>{menuItem.MenuName}</Text>
                      <Text style={[styleCommon.txtPoint, styleCommon.mgLeftSm]}>{menuItem.OrderCnt+"개"}</Text>
                    </View>
                    <Text style={styleCommon.txtSizeXs}>{menuItem.OptionA}{menuItem.OptionB != null & menuItem.OptionB != "" ? " / "+menuItem.OptionB : ""}{menuItem.OptionC != null & menuItem.OptionC != "" ? " / "+menuItem.OptionC : ""}</Text>
                    <Text style={[styleCommon.txtSizeXl, styleCommon.photoList1Price]}>
                      <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXl]}>{menuItem.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>₩
                    </Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </TouchableHighlight>
    );
  };
  
  return (
    <View style={[styleCommon.pageBg]}>
      <ShowInputCalendar />
        {payInfo !== null && payInfo.length > 0 ? (
          <FlatList
            data={payInfo}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={StyleCommon.listEmpty}>아직 결제내역이 없습니다.</Text>
        )}
        {ReceiptModal()}
    </View>
  );
};

export default PayHistory;
