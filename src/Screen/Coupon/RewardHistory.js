import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserRewardHistory} from '../../Function/ApiAxios/User';

const RewardHistory = () => {

  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [rewardHistory, setRewardHistory] = useState(null);

  useEffect(() => {
    getUserRewardHistory(_UrlContext.url, _UserContext.user.SsoKey, "week")
      .then((resRewardHistory) => setRewardHistory(resRewardHistory))
      .catch((err) => {
        console.log(`getUserRewardHistory error: ${err}`);
      });
  }, []);

  // 기간 변경 할 함수 - 아직 안만듬
  const searchDataUpdate = (term) => {
    
    getUserRewardHistory(_UrlContext.url, _UserContext.user.SsoKey, term)
    .then((resRewardHistory) => setRewardHistory(resRewardHistory))
    .catch((err) => {
      console.log(`getUserRewardHistory error: ${err}`);
    });
  };
  
  console.log('rewardHistory > ', rewardHistory);

  // 상단 기간변경 박스
  const headerComp = () => (
    <View style={styles.termBox}>
      <TouchableHighlight
        onPress={() => searchDataUpdate('week')}
        style={styles.term}>
        <Text style={styles.termTxt}>1주일</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => searchDataUpdate('1month')}
        style={styles.term}>
        <Text style={styles.termTxt}>1개월</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => searchDataUpdate('3month')}
        style={styles.term}>
        <Text style={styles.termTxt}>3개월</Text>
      </TouchableHighlight>
    </View>
  );

  // 히스토리 한줄
  const renderItem = ({item}) => {
    return (
      <View style={styles.historyBox}>
        <Image
          style={styles.historyImg}
          source={require('../../../assets/img/moon2.png')}
        />
        <View>
          <Text>{item.CouponType}</Text>
          <Text>일자: {item.InsertDt}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {rewardHistory !== null && (
        <FlatList
          ListHeaderComponent={headerComp}
          data={rewardHistory}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '96%',
    alignSelf: 'center',
  },
  termBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  term: {
    width: '32%',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#A60030',
  },
  termTxt: {
    textAlign: 'center',
    color: 'white',
  },
  historyBox: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  historyImg: {
    width: '30%',
    height: 60,
    resizeMode: 'contain',
  },
});

export default RewardHistory;
