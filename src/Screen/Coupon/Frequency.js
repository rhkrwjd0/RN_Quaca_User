import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView, ScrollView, TouchableHighlight} from 'react-native';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getUserFrequency} from '../../Function/ApiAxios/User';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);

const Frequency = () => {
  const s_list = [0, 1, 2];
  const b_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [frequency, setFrequency] = useState(null);

  useEffect(() => {
    getUserFrequency(_UrlContext.url, _UserContext.user.SsoKey)
      .then((resReward) => setFrequency(resReward))
      .catch((err) => {
        console.log(`getUserFrequency error: ${err}`);
      });
  }, []);

  console.log('frequency > ', frequency);
  

  // 스페셜티 스탬프
  const SpecialCup = (cnt, index) => {
    if (cnt < frequency.Special) {
      return (
        <Image
          key={index}
          style={styles.cupImg}
          source={require('../../../assets/img/on_special.png')}
        />
      );
    } else {
      return (
        <Image
          key={index}
          style={styles.cupImg}
          source={require('../../../assets/img/off_special.png')}
        />
      );
    }
  };

  // 일반음료 스탬프
  const BasicCup = (cnt, index) => {
    if (cnt < frequency.Basic) {
      return (
        <Image
          key={index}
          style={[styles.cupImg, {marginTop: 30}]}
          source={require('../../../assets/img/on_basic.png')}
        />
      );
    } else {
      return (
        <Image
          key={index}
          style={[styles.cupImg, {marginTop: 30}]}
          source={require('../../../assets/img/off_basic.png')}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styleCommon.pageBg}>
      <ScrollView>
        <View style={styles.freqPeriodBox}>
          <View style={styles.freqPeriodTxt}>
              <Text style={[styleCommon.txtSizeXs]}>적립기간</Text>
              <Text style={styles.freqPeriodDate}>2021.05.01 ~ 2021.07.15</Text>
          </View>
          <Text style={styles.freqDday}>D-52</Text>
          <View style={styleCommon.progressBarBox}>
            <View style={[styleCommon.progressBarActive, {
              width: 100 * 10 / 76 + "%"
            }]}></View>
            <View style={styleCommon.progressBar}></View>
          </View>
        </View>

        <Text style={styles.freqGuide}>
          프리퀀시를 통해 <Text style={styleCommon.txtColorBk}>미션음료 3잔 포함 총 15잔의 음료</Text>를 구매하시면 특별한 선물(<Text style={styleCommon.txtColorBk}>헤일로 텀블러/헤일로 머그컵</Text> 중 택1, 한정수량)을 드립니다.
        </Text>
        <View style={styles.freqGuideImgBox}>
          <View style={styles.freqGuideItem}>
            <Image
              style={[styles.freqImgSp, styles.freqImgNoMg]}
              source={require('../../../assets/img/frequency/img_freq_special_active.png')}
            />
            <Text style={styles.freqGuideMn}>미션음료</Text>
            <Text style={styles.freqCnt}>1</Text>
          </View>
          <Text style={[styles.freqGuideSign, styleCommon.txtSizeXl]}>＋</Text>
          <View style={styles.freqGuideItem}>
            <Image
              style={[styles.freqImgNmr, styles.freqImgNoMg]}
              source={require('../../../assets/img/frequency/img_freq_normal_active.png')}
            />
            <Text style={styles.freqGuideMn}>일반음료</Text>
            <Text style={styles.freqCnt}>2</Text>
          </View>
          <Text style={[styles.freqGuideSign, styleCommon.txtSizeXs]}>＞</Text>
          <View style={styles.freqGuideItem}>
            <Image
              style={styles.freqImgGift}
              source={require('../../../assets/img/frequency/img_freq_gift.png')}
            />
            <Text style={styles.freqGuideMn}>
              <Text style={styleCommon.txtPoint}>15개</Text> 완성
             </Text>
            <Text style={styles.freqCnt}>2</Text>
          </View>
          <TouchableHighlight 
            underlayColor=""
            style={[styleCommon.btnRefresh, styles.freqRefresh]}
            onPress={() => {
              alert('구매개수확인 새로고침');
            }}>
            <Image
              style={styleCommon.btnRefreshImg}
              source={require('../../../assets/img/icon/btn_refresh.png')}
            />
          </TouchableHighlight>
        </View>
        
        <View style={styles.freqImgboxSp}>
          <Image
            style={styles.freqImgSp}
            source={require('../../../assets/img/frequency/img_freq_special_active.png')}
          />
          <Image
            style={styles.freqImgSp}
            source={require('../../../assets/img/frequency/img_freq_special.png')}
          />
          <Image
            style={styles.freqImgSp}
            source={require('../../../assets/img/frequency/img_freq_special.png')}
          />
        </View>
        <View style={styles.freqImgboxNmr}>
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal_active.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal_active.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
          <Image
            style={styles.freqImgNmr}
            source={require('../../../assets/img/frequency/img_freq_normal.png')}
          />
        </View>
        {frequency !== null && (
          <View style={styles.stampBox}>
            <View style={styles.specialBox}>
              {s_list.map((cnt, index) => SpecialCup(cnt, index))}
            </View>
            <View style={styles.basicBox}>
              {b_list.map((cnt, index) => BasicCup(cnt, index))}
            </View>
          </View>
        )}

        <Text style={styleCommon.conTit1}>미션음료 목록</Text>
        <View style={[styleCommon.photoList3, styles.freqEventItem]}>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {}}>
            <View style={styleCommon.photoList3Item}>
              <Image
                source={require('../../../assets/img/sample_coffee2.png')}
                style={styleCommon.photoList3Img}
              />
              <Text style={styleCommon.photoList3Mn}>에티오피아{'\n'}예가체프</Text>
              <Text style={[styleCommon.txtSizeXl, styleCommon.photoList1Price]}>
                <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxls]}>3,500</Text>₩
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {}}>
            <View style={styleCommon.photoList3Item}>
              <Image
                source={require('../../../assets/img/sample_coffee2.png')}
                style={styleCommon.photoList3Img}
              />
              <Text style={styleCommon.photoList3Mn}>더블{'\n'}카페라떼</Text>
              <Text style={[styleCommon.txtSizeXl, styleCommon.photoList1Price]}>
                <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxls]}>3,500</Text>₩
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {}}>
            <View style={styleCommon.photoList3Item}>
              <Image
                source={require('../../../assets/img/sample_coffee2.png')}
                style={styleCommon.photoList3Img}
              />
              <Text style={styleCommon.photoList3Mn}>콜롬비아{'\n'}슈프리모</Text>
              <Text style={[styleCommon.txtSizeXl, styleCommon.photoList1Price]}>
                <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxls]}>3,500</Text>₩
              </Text>
            </View>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          underlayColor=""
          style={[styleCommon.btn1Dark, styleCommon.btn1Btm, styleCommon.btn1BtmNoFix]}
          onPress={() => {}}>
          <Text style={styleCommon.btn1txtLight}>프리퀀시 쿠폰 발행하기 (<Text style={styleCommon.txtColorYw}>2</Text>)</Text>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Frequency;
