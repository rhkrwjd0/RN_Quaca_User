import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import UserContext from '../../Provider/UserContext';
import TopBar from '../MainTop/TopBar';
import NoticeScreen from '../AppNotice/NoticeScreen';
import Styles from '../../Style/Style';
import StyleCommon from '../../Style/StyleCommon';
import { WithLocalSvg } from 'react-native-svg';
import Logo from '../../../assets/img/logo_halo.svg';

import UrlContext from '../../Provider/UrlContext';
import {getRewardCouponCount} from '../../Function/ApiAxios/User';
import rewardImages from '../Main/RewardImages';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const Home = ({navigation}) => {
  const _UserContext = useContext(UserContext);
  const [appNotice, setAppNotice] = useState(true);

  const _UrlContext = useContext(UrlContext);
  const [reward, setReward] = useState([]);
  const [rewardChk, setRewardChk] = useState(false);
  const [rewardImgUrl, setRewardImgUrl] = useState(require("../../../assets/img/main/bg_halo00.png"));

  // 20210713 추가 
  useEffect(() => {
    getRewardCouponCount(_UrlContext.url, _UserContext.user.SsoKey)
      .then((resReward) => {
        setReward(resReward);
        // 리워드 이미지 변경 처리
        setRewardImgUrl(rewardImages[resReward.RewardCnt]);
      })
      .catch((err) => {
        console.log(`getUserReward error: ${err}`);
      });
  }, [rewardChk]);

  // 큰아이콘 버튼 박스
  const IconBtnBox = ({navigation}) => {
    return (
      <View style={[styles.mainBox]}>
        <TouchableHighlight
          underlayColor=""
          style={[styles.menuBox, styles.mnL, styles.mnReward]}
          onPress={() => {
            navigation.navigate('Reward');
            setRewardChk(!rewardChk);
          }}>
          <View style={styleCommon.alignItemC}>
            <View style={styles.mnRewardShape}>
              <View style={styles.mnRewardCnt}>
                <Text style={[styles.mnRewardCntUser]}>{reward.RewardCnt != null & reward.RewardCnt != "" ?  reward.RewardCnt : "0"}</Text>
                <Text style={[styles.mnRewardCntTotal, styles.menuTxtW]}>/12</Text>
              </View>
              <Image
                style={styles.mnRewardImg}
                source={rewardImgUrl} 
                // 리워드개수(0~12)만큼 헤일로이미지 변경시 : 이미지이름 넘버변경(bg_halo00 ~ bg_halo12)
              />
            </View>
            <Text style={[styles.menuTxt, styles.menuTxtW]}>Reward</Text>
          </View>
        </TouchableHighlight> 
        <TouchableHighlight
          underlayColor=""
          style={[styles.menuBox, styles.mnOrder]}
          onPress={() => {
            alert('현위치에서 가장 가까운매장으로 검색됩니다.');
            navigation.navigate('StoreInfo', {storeId: '1'});
            setRewardChk(!rewardChk);
          }}>
          <View style={styleCommon.alignItemC}>
            <Image
              style={[styles.menuImg, styles.mnImgOrder]}
              source={require('../../../assets/img/main/ico_home_order.png')}
            />
            <Text style={styles.menuTxt}>Order</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor=""
          style={[styles.menuBox, styles.mnL, styles.mnCoupon]}
          onPress={() => {
            navigation.navigate('Coupon');
            setRewardChk(!rewardChk);
          }}>
          <View style={styleCommon.alignItemC}>
          <Text style={styles.mnCouponCnt}>{reward.CouponCnt}</Text>
            <Image
              style={[styles.menuImg, styles.mnImgCoupon]}
              source={require('../../../assets/img/main/ico_home_coupon.png')}
            />
            <Text style={styles.menuTxt}>coupon</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor=""
          style={[styles.menuBox, styles.mnFav]}
          onPress={() => {
            navigation.navigate('QuickOrder');
            setRewardChk(!rewardChk);
          }}>
          <View style={styleCommon.alignItemC}>
            <Image
              style={[styles.menuImg, styles.mnImgFav]}
              source={require('../../../assets/img/main/ico_home_favorites.png')}
            />
            <Text style={styles.menuTxt}>{`Order\nFavorites`}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor=""
          style={[styles.menuBox, styles.mnL, styles.mnStore]}
          onPress={() => {
            navigation.navigate('Stores');
            setRewardChk(!rewardChk);
          }}>
          <View style={styleCommon.alignItemC}>
            <Image
              style={[styles.menuImg, styles.mnImgStore]}
              source={require('../../../assets/img/main/ico_home_store.png')}
            />
            <Text style={styles.menuTxt}>Stores</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor=""
          style={[styles.menuBox, styles.mnHistory]}
          onPress={() => {
            navigation.navigate('History');
            setRewardChk(!rewardChk);
          }}>
          <View style={styleCommon.alignItemC}>
            <Image
              style={[styles.menuImg, styles.mnImgHistory]}
              source={require('../../../assets/img/main/ico_home_history.png')}
            />
            <Text style={styles.menuTxt}>History</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  // 공지모달
  const NoticeModal = () => {
    return (
      <Modal statusBarTranslucent animationType="slide" isVisible={appNotice} style={styleCommon.modalWrap}>
        <TouchableHighlight
          underlayColor=""
          style={[styleCommon.modalClose]}
          onPress={() => {
            setAppNotice(!appNotice);
          }}>
          <Image
              style={styleCommon.modalCloseImg}
              source={require('../../../assets/img/icon/btn_close_wh.png')}
            />
        </TouchableHighlight>
    
        <View style={[styleCommon.modalPopup, styleCommon.modalPopLeft]}>
          <View style={styleCommon.modalPopLeftInner}>
            <NoticeScreen />
            <TouchableHighlight
              underlayColor=""
              style={[styleCommon.btn1Dark, styleCommon.btn1MdH]}
              onPress={() => {
                setAppNotice(!appNotice);
              }}>
              <Text style={styleCommon.btn1txtLight}>확인</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={[styleCommon.container, styles.containerMain]}>
      <TopBar navigation={navigation} />
      {/* <View>
        <Text style={styles.geoBox}>{_UserContext.location}</Text>
      </View> */}
      <View style={[styles.pageBasic, styles.containerMainInner]}>
        <WithLocalSvg style={styles.logo} asset={Logo} />
        <IconBtnBox navigation={navigation} />
        {/* <NoticeModal /> */}
      </View>
    </View>
  );
};

export default Home;
