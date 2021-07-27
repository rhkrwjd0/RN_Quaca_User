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
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';

import  {  useNavigation  }  from  '@react-navigation/native' ;

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const StoreSearch = () => {

  const navigation = useNavigation();

  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [storeList, setStoreList] = useState(null);
  const {setLocation} = useContext(UserContext);
  const [showMap, setShowMap] = useState(false);
  const [addr, setAddr] = useState("");

  useEffect(() => {
    getStoreList(_UrlContext.url, addr)
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

  const TabMap = () => {
    return (
      showMap &&
      <View style={styles.storeMap}>
        <Image
          style={[styles.storeMap]}
          source={require('../../../assets/img/sample_map.png')}
        />
      </View>
    );
  };

  return (
    <View style={styleCommon.pageBg}>
      <View style={styleCommon.searchBox}>
        <Text style={styleCommon.srchBar}>{_UserContext.location}</Text>
        <TouchableHighlight
          underlayColor=""
          style={styleCommon.btnReset}
          onPress={() => {
            alert('위치 재설정');
          }}>
          <Image
            style={styleCommon.btnResetImg}
            source={require('../../../assets/img/icon/ico_set_gy.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight 
          underlayColor=""
          style={styleCommon.btnSrch}
          onPress={() => {
            alert('주소변경기능 추가하기');
          }}
        >
          <Image
            style={styleCommon.btnSrchImg}
            source={require('../../../assets/img/icon/ico_search.png')}
          />
        </TouchableHighlight>
      </View>

      <View style={styleCommon.tab3Wrap}>
        <TouchableHighlight
          underlayColor=""
          onPress={() => {setShowMap(false)}}>
          <Text style={[styleCommon.tab3Menu, ( !showMap && styleCommon.tab3MenuActive)]}>매장목록</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor=""
          onPress={() => {setShowMap(true)}}>
          <Text style={[styleCommon.tab3Menu, ( showMap && styleCommon.tab3MenuActive)]}>지도보기</Text>
        </TouchableHighlight>
      </View>
      
      {
        !showMap ?
        <ScrollView>
          <View style={styleCommon.photoList2}>
            {storeList !== null &&
              storeList.map((item, index) => (
              <View style={styleCommon.photoList2ItemWrap} key={index}>
                <TouchableHighlight
                  underlayColor=""
                  style={styleCommon.photoList2BtnTop}
                  onPress={() => {
                    alert('즐겨찾기 추가');
                  }}>
                  <Image
                    style={styles.storeBtnFavImg}
                    source={require('../../../assets/img/icon/ico_fav_line.png')} // 즐겨찾기 추가시 ico_fav_yw.png로 파일명 변경
                  />
                </TouchableHighlight>
                <TouchableHighlight
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
        : <TabMap />
      }

      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
        onPress={() => {}}>
        <Text style={styleCommon.btn1txtLight}>선택완료</Text>
      </TouchableHighlight>
    </View>
  );
};

export default StoreSearch;
