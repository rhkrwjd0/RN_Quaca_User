import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserCouponHistory} from '../../Function/ApiAxios/User';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';


const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);
const CouponHistory = () => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    getUserCouponHistory(_UrlContext.url, _UserContext.user.SsoKey)
      .then((resCoupon) => setCoupon(resCoupon))
      .catch((err) => {
        console.log(`getUserCouponHistory error: ${err}`);
      });
  }, []);

  console.log('CouponHistory > ', coupon);

  const renderItem = ({item}) => {
    return (
      <View style={styleCommon.photoList1Item}>
          <Image
            source={require('../../../assets/img/sample_dessert.png')}
            style={[styleCommon.photoList1Img, styles.couponUsed]}
          />
        <View style={styleCommon.photoList1Txtbox}>
          <Text style={[styleCommon.txtSizeXl, styleCommon.txtBold]}>{item.Title}</Text>
          <Text style={[styleCommon.txtSizeSm]}>3,500원 할인</Text>
          <Text style={[styleCommon.txtSizeSm]}>{item.InsertDt} ~ {item.EndDate}</Text>
          <Text style={[styles.couponUseDate]}>{item.Used === 'Y' && item.UseDate != null? item.UseDate : ''}</Text>
          <Text style={styles.couponStatus}>{item.State}</Text>
        </View>
      </View>
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
        <Text style={styleCommon.listEmpty}>쿠폰 히스토리 정보가 없습니다.</Text>
      )}
    </View>
  );
};

export default CouponHistory;
