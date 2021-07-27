import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView, TouchableHighlight, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserReward} from '../../Function/ApiAxios/User';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);
const Reward = ({navigation}) => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [reward, setReward] = useState(null);

  useEffect(() => {
    getUserReward(_UrlContext.url, _UserContext.user.SsoKey)
      .then((resReward) => setReward(resReward))
      .catch((err) => {
        console.log(`getUserReward error: ${err}`);
      });
  }, []);

  console.log('reward > ', reward);

  // DB에서 리워드 수 12일때 쿠폰발행으로 되어있어서 12이면 0으로 변경
  const rewardCntTotal = 12;
  let rewardCnt = 0;
  if (reward !== null) {
    rewardCnt = reward.RewardCnt;
    if (reward.RewardCnt == rewardCntTotal) {
      rewardCnt = 0;
    }
  }

  return (
    <SafeAreaView style={styleCommon.pageBg}>
      <ScrollView>
      {/* <Text style={styles.nick}>{_UserContext.user.NickName} 님</Text> */}
        <View style={styles.rewardCntBox}>
          <View style={styles.rewardCntTxt}>
              <Text style={styles.rewardCnt}>{reward !== null ? rewardCnt : 0}</Text>
              <Text style={styles.rewardCntLine}>/</Text>
              <Text style={styles.rewardCntTotal}>{rewardCntTotal}</Text>
          </View>
          <Text style={[styleCommon.txtSizeSm, styleCommon.txtColorGy]}>
            <Text style={styles.rewardCntUntil}>{reward !== null ? rewardCntTotal - rewardCnt : rewardCntTotal - 0}</Text> Until Free Coupon
          </Text>
          <View style={styleCommon.mgTopSm}>
            <View style={[styleCommon.progressBarActive, {
              width: 100 * rewardCnt / rewardCntTotal + "%"
            }]}></View>
            <View style={styleCommon.progressBar}></View>
          </View>
        </View>
        
        <Text style={styleCommon.conTit1}>최근 REWARD쿠폰 사용내역</Text>
        {/* 리워드로 발급된 쿠/폰/들만 표시함. 기존에 RewardHistory.js에서는 리워드발급내역을 모두 표시했지만 사용자가 확인을 자주할 요소가 아니므로 디자인상 변경 */}
        <View style={[styleCommon.tab1Wrap, styleCommon.tab1NoFull]}>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {alert('1개월 쿠폰이력')}}
            style={[styleCommon.tab1Menu, styleCommon.tab1ActiveBg, {width: '33.3333%'}]}>
            <Text style={styleCommon.tab1ActiveTxt}>1개월</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {alert('3개월 쿠폰이력')}}
            style={[styleCommon.tab1Menu, {width: '33.3333%'}]}>
            <Text style={styleCommon.tab1Txt}>3개월</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {alert('6개월 쿠폰이력')}}
            style={[styleCommon.tab1Menu, {width: '33.3333%'}]}>
            <Text style={styleCommon.tab1Txt}>6개월</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.rewardListBox}>
          <View style={styles.rewardList}>
            <View style={[styles.rewardListItem]}>
              <Text style={styleCommon.txtSizeLg}>아메리카노 3500원 쿠폰</Text>
              <Text style={styleCommon.txtSizeMd}>~ 2021.05.31</Text>
            </View>
            <View style={[styles.rewardListItem]}>
              <Text style={styleCommon.txtSizeLg}>아메리카노 3500원 쿠폰</Text>
              <Text style={styleCommon.txtSizeMd}>사용완료</Text>
            </View>
            <View style={[styles.rewardListItem]}>
              <Text style={styleCommon.txtSizeLg}>아메리카노 3500원 쿠폰</Text>
              <Text style={styleCommon.txtSizeMd}>기한만료</Text>
            </View>
          </View>
          
          <Text 
            style={[styleCommon.btn2, styleCommon.txtSizeMd]}
            onPress={() => navigation.navigate('Coupon')}>
            보유쿠폰 확인
          </Text>      
        </View>

        <View style={[styleCommon.noteBox, styles.rewardNote]}>
          <Text style={styleCommon.noteTit}>리워드 유의사항</Text>
          <Text style={styleCommon.noteTxt}>음료 1잔 당 1개의 스탬프를 적립해 드립니다.</Text>
          <Text style={styleCommon.noteTxt}>디저트류, 기타 항목은 리워드항목에 포함되지 않습니다.</Text>
        </View>
      </ScrollView> 
    </SafeAreaView>
  );
};

export default Reward;
