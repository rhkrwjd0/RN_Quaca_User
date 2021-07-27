import React, {useContext, useState, useEffect} from 'react';
import {TouchableHighlight, StyleSheet, View, Text, Image, FlatList, Alert} from 'react-native';
import Modal from 'react-native-modal';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserAvialableCoupon} from '../../Function/ApiAxios/User';
import QrCode from './QrCode';
import StyleCommon from '../../Style/StyleCommon';
import Style from '../../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Style);

const Coupon = () => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [coupon, setCoupon] = useState(null);
  const [qrCodeModal, setQrCodeModal] = useState(false);

  useEffect(() => {
    getUserAvialableCoupon(_UrlContext.url, _UserContext.user.SsoKey)
      .then((resCoupon) => setCoupon(resCoupon))
      .catch((err) => {
        console.log(`getUserAvialableCoupon error: ${err}`);
      });
  }, []);

  console.log('coupon > ', coupon);

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight 
        underlayColor=""
        onPress={ () => { 
          setQrCodeModal(!qrCodeModal);
        }}
      >
        <View style={styleCommon.photoList1Item}>
          <Image
            source={require('../../../assets/img/sample_coffee.png')}
            style={styleCommon.photoList1Img}
          />
          <View style={styleCommon.photoList1Txtbox}>
            <Text style={[styleCommon.txtSizeXl, styleCommon.txtBold]}>{item.Title}</Text>
            <Text style={[styleCommon.txtSizeSm]}>3,500원 할인</Text>
            <Text style={[styleCommon.txtSizeSm]}>{item.InsertDt} ~ {item.EndDate}까지</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  

  // QR코드 모달
  const QrCodeModal = () => {
    return (
      <Modal
        statusBarTranslucent
        isVisible={qrCodeModal}
        animationInTiming={400}
        animationOutTiming={500}
        useNativeDriver={true}
        style={styleCommon.modalWrap}>
        <TouchableHighlight
          underlayColor=""
          style={[styleCommon.modalClose]}
          onPress={() => setQrCodeModal(!qrCodeModal)}
          >
          <Image
            style={styleCommon.modalCloseImg}
            source={require('../../../assets/img/icon/btn_close_wh.png')}
          />
        </TouchableHighlight>

        <View style={[styleCommon.modalPopup, styleCommon.modalPopLeft]}>
          <View style={styles.couponQrPopup}>
            <QrCode />
          </View>
        </View>
        
      </Modal>
    );
  };

  return (
    <View style={[styleCommon.pageBg, styleCommon.photoList1]}>
      {coupon !== null ? (
        <FlatList 
          data={coupon}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styleCommon.listEmpty}>사용가능쿠폰이 없습니다.</Text>
      )}
      {QrCodeModal()}
    </View>
    
  );
};

export default Coupon;
