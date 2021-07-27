import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getStoreList} from '../../Function/ApiAxios/Store';
import {getGeoLocation} from '../../Function/ApiAxios/GeoLocation';
import Modal from 'react-native-modal';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);


const StoreFavorite = ({navigation}) => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [storeList, setStoreList] = useState(null);
  const {setLocation} = useContext(UserContext);
  const [storeFavEditModal, setStoreFavEditModal] = useState(false);

  useEffect(() => {
    getStoreList(_UrlContext.url)
      .then((resStoreList) => {
        setStoreList(resStoreList);
      })
      .catch((err) => {
        console.log('getStoreList err > ', err);
      });
  }, []);

  const geoChange = () => {
    getGeoLocation()
      .then((resLocation) => {
        setLocation({location: resLocation});
      })
      .catch((err) => {
        alert(err);
        setLocation({location: String(err)});
      });
  };

  // 매장 즐겨찾기 설정 modal
  const StoreFavEditModal = () => {
    return (
      <Modal
        statusBarTranslucent
        isVisible={storeFavEditModal}
        animationInTiming={500}
        animationOutTiming={500}
        animationIn="fadeIn"
        animationOut="fadeOut"
        useNativeDriver={true}
        style={styleCommon.modalWrap}>
        <TouchableHighlight
          underlayColor=""
          style={[styleCommon.modalClose]}
          onPress={() => setStoreFavEditModal(!storeFavEditModal)}
          >
          <Image
            style={styleCommon.modalCloseImg}
            source={require('../../../assets/img/icon/btn_close_wh.png')}
          />
        </TouchableHighlight>

        <View style={[styleCommon.modalPopup]}>
            <View style={styleCommon.modalMenuList}>
              <Text onPress={() => {}} style={styleCommon.modalMenuTxt}>즐겨찾기 기본으로 설정</Text>
              <Text onPress={() => {}} style={styleCommon.modalMenuTxt}>즐겨찾는 매장 목록 삭제</Text>
            </View>
        </View>
        
      </Modal>
    );
  };

  return (
    <>
      <ScrollView style={styles.storeFavList}>
        <View style={styleCommon.photoList2}>
          {storeList !== null &&
            storeList.map((item, index) => (
            <View style={styleCommon.photoList2ItemWrap}>
              <TouchableHighlight
                underlayColor=""
                style={styleCommon.photoList2BtnTop}
                onPress={() => setStoreFavEditModal(!storeFavEditModal)}
              >
                <Image
                  style={styles.storeBtnSetImg}
                  source={require('../../../assets/img/icon/ico_set_wh.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight
                key={index}
                underlayColor=""
                style={styleCommon.photoList2Item}
                onPress={() => {
                  navigation.replace('StoreInfo', {storeId: item.StoreId});
                }}>
                <View>
                  <Image
                    style={styleCommon.photoList2Img}
                    source={{uri: item.MainImgUrl}}
                  />
                  <View style={styleCommon.photoList2Txtbox}>
                    <Text style={styleCommon.photoList2Tit}>{item.StoreName}</Text>
                    {/* <Text style={styleCommon.photoList2Txt}>{item.TelNo}</Text> */}
                    <Text style={styleCommon.photoList2Txt}>{item.Addr1} {item.Addr2}</Text>
                    <Text style={styleCommon.photoList2TxtTop}>0.2km</Text>
                  </View>
                </View>
              </TouchableHighlight>
              </View>
            ))}
        </View>
      </ScrollView>
      
      {StoreFavEditModal()}
    </>
  );
};


export default StoreFavorite;
