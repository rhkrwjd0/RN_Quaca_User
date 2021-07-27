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

const StoreList = ({navigation}) => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [storeList, setStoreList] = useState(null);
  const {setLocation} = useContext(UserContext);

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

  return (
    <View>
      <View style={styles.geoBox}>
        <Text>{_UserContext.location}</Text>
        <View style={styles.geoBtnBox}>
          <TouchableHighlight
            underlayColor="rgba(200,200,200,0.5)"
            onPress={() => {
              alert('위치 재설정');
            }}>
            <Text style={styles.geoBtn}>재설정</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(200,200,200,0.5)"
            onPress={() => {
              alert('주소변경기능 추가하기');
            }}>
            <Text style={styles.geoBtn}>변경</Text>
          </TouchableHighlight>
        </View>
      </View>
      <ScrollView>
        <View style={styles.storeList}>
          {storeList !== null &&
            storeList.map((item, index) => (
              <TouchableHighlight
                key={index}
                underlayColor="rgba(200,200,200,0.5)"
                style={styles.storeTouchBox}
                onPress={() => {
                  navigation.replace('StoreInfo', {storeId: item.StoreId});
                }}>
                <View>
                  <Image
                    style={styles.storeImg}
                    source={{uri: item.MainImgUrl}}
                  />
                  <Text style={styles.title}>{item.StoreName}</Text>
                  <Text style={styles.txt}>{item.TelNo}</Text>
                  <Text style={styles.txt}>
                    {item.Addr1} {item.Addr2}
                  </Text>
                </View>
              </TouchableHighlight>
            ))}
        </View>
        {/* 하단바로 가리는부분! */}
        <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  geoBox: {
    width: '96%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  geoBtnBox: {
    flexDirection: 'row',
  },
  geoBtn: {
    width: 70,
    backgroundColor: '#A60030',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    marginRight: 5,
  },
  storeTouchBox: {
    width: '49%',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 5,
  },
  storeList: {
    width: '96%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  storeImg: {
    width: '100%',
    height: 150,
  },
  title: {
    fontWeight: '700',
  },
  txt: {
    fontSize: 12,
  },
});

export default StoreList;
