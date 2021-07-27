import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from 'react-native';
import {getStoreInfo} from '../../Function/ApiAxios/Store';
import UrlContext from '../../Provider/UrlContext';
import Styles from '../../Style/Style';
import StyleCommon from '../../Style/StyleCommon';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const StoreInfo = ({navigation, route}) => {
  const _UrlContext = useContext(UrlContext);
  var storeId = route.params.storeId;
  const [storeInfo, setStoreInfo] = useState(null);


  useEffect(() => {
    getStoreInfo(_UrlContext.url, storeId)
      .then((resStore) => {
        setStoreInfo(resStore);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const StoreInfoView = () => {
    return (
      <ScrollView>
        <Image style={styles.mainImg} source={{uri: storeInfo.MainImgUrl}} />
        {/* <ScrollView horizontal={true} style={styles.imgBox}>
          {storeInfo.detailImgUrl.map((data, index) => (
            <Image key={index} style={styles.detailImg} source={{uri: data}} />
          ))}
        </ScrollView> */}

        <View style={styles.infoBox}>
          <View style={styles.infoTop}>
            <Text style={styles.infoName}>{storeInfo.StoreName}</Text>
            <TouchableHighlight
              style={[styleCommon.btn2, styles.btnOtherStore]}
              onPress={() => navigation.replace('Stores')}>
              <Text style={styles.btn2Txt}>다른 매장찾기</Text>
            </TouchableHighlight>
          </View>

          <View style={[styleCommon.flexRow, styleCommon.mgTopSm]}>
            <Text style={styles.infoTitle}>영업시간</Text>
            <Text style={styles.infoTxt}>
              {storeInfo.OpenTime} ~ {storeInfo.CloseTime}
            </Text>
          </View>
          <View style={[styleCommon.flexRow, styleCommon.mgTopSm]}>
            <Text style={styles.infoTitle}>휴무일</Text>
            <Text style={styles.infoTxt}>{storeInfo.DayOff}</Text>
          </View>
          <View style={[styleCommon.flexRow, styleCommon.mgTopSm]}>
            <Text style={styles.infoTitle}>전화번호</Text>
            <Text style={styles.infoTxt}>{storeInfo.TelNo}</Text>
          </View>
          <View style={[styleCommon.flexRow, styleCommon.mgTopSm]}>
            <Text style={styles.infoTitle}>주소</Text>
            <Text style={styles.infoTxt}>
              {storeInfo.Addr1} {storeInfo.Addr2}
            </Text>
          </View>

          <Image
            style={styles.mapImg}
            source={require('../../../assets/img/map_img.png')}
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.StoreInfo}>
      {storeInfo !== null ? <StoreInfoView /> : <Text>로딩중...</Text>}
      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
        onPress={() => {
          navigation.navigate('StoreMenu', {storeId: storeId});
        }}>
        <Text style={styleCommon.btn1txtLight}>메뉴보기</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  StoreInfo: {
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
  },
  mainImg: {
    width: '100%',
    height: 200,
  },
  imgBox: {
    marginTop: 8,
  },
  detailImg: {
    width: 120,
    height: 70,
    marginRight: 5,
  },
  infoBox: {
    width: '89%',
    alignSelf: 'center',
    marginTop: 20,
  },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchTouch: {
    backgroundColor: '#A60030',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 3,
  },
  searchTxt: {
    color: 'white',
  },
  btnOtherStore: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  infoName: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  infoTitle: {
    fontWeight: '700',
    width: 70,
    fontSize: 13,
  },
  infoTxt: {
    marginLeft: 10,
    fontSize: 13,
    width: 270,
  },
  mapImg: {
    width: wp(100),
    height: 250,
    marginTop: 25,
    marginBottom: 90,
    marginLeft: '-5.5%',
  },
});

export default StoreInfo;
