import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, Image, View, Text, TouchableHighlight, ImageBackground} from 'react-native';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';
import AskInsertModal from './AskInsertModal';
import {getAskList} from '../../Function/ApiAxios/Notice';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);

const CustomerCenter = ({navigation, route}) => {
  
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [storeId, setStoreId] = useState(1);
  const [askModal, setAskModal] = useState(false);

  const [askInfo, setAskInfo] = useState(null);

  const closeAskModal = () =>{
    setAskModal(false);
  }

  useEffect(() => {
    getAskList(_UrlContext.url, storeId, _UserContext.user.SsoKey)
    .then((resData) => {
        setAskInfo(resData[0]);
    })
    .catch((err) => {
      console.log(`getUserAvialableCoupon error: ${err}`);
    });   
  },[askModal]);
  return (
    <View style={[styleCommon.pageBg]}>
      <View style={styles.cstmrCenterMnList}>
        <TouchableHighlight underlayColor="" style={styles.cstmrCenterMn} onPress={() => navigation.navigate('Ask')}>
          <View>
            <Image style={styles.cstmrCenterMnImg} source={require('../../../assets/img/customercenter/ico_customerCenter1.png')} />
            <Text style={styles.cstmrCenterMnTxt}>1:1문의내역</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="" style={styles.cstmrCenterMn} onPress={() => navigation.navigate('FAQ')}>
          <View>
            <Image style={styles.cstmrCenterMnImg} source={require('../../../assets/img/customercenter/ico_customerCenter2.png')} />
            <Text style={styles.cstmrCenterMnTxt}>자주하는 질문</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="" style={styles.cstmrCenterMn} onPress={() => navigation.navigate('Notice')}>
          <View>
            <Image style={styles.cstmrCenterMnImg} source={require('../../../assets/img/customercenter/ico_customerCenter3.png')} />
            <Text style={styles.cstmrCenterMnTxt}>공지사항</Text>
          </View>
        </TouchableHighlight>
      </View>

      <TouchableHighlight underlayColor="" style={styles.cstmrCenterGuide} onPress={() => navigation.navigate('Notice')}>
        <ImageBackground source={require('../../../assets/img/customercenter/bg_customerCenter_guide.png')} resizeMode="cover" style={styles.cstmrCenterGuideBg}>
          <Text style={styles.cstmrCenterGuideTxt}><Text style={styles.cstmrCenterGuideTxtPoint}>Smart Order</Text> 이용안내</Text>
        </ImageBackground>
      </TouchableHighlight>

      <View style={styles.cstmrCenterAsk}>
        <Text style={styleCommon.conTit1}>최근 문의내역</Text>
        {
          askInfo != null ? (
            <>
              <View style={[styleCommon.listDetail1, styleCommon.pdLeft0]}>
                <Text style={styleCommon.listDetail1Tit}>{askInfo.Title}</Text>
                <Text style={styleCommon.listDetail1TitDate}>{askInfo.InsertDt}</Text>
              </View>
              <View style={[styleCommon.listDetail1, styleCommon.listDetail1noPdTop, styleCommon.pdLeft0]}>
                {
                  askInfo.ReContents != null && askInfo.ReContents != "" ?
                  (
                    <>
                      <Text style={styleCommon.listDetail1Txt}>{askInfo.ReContents}</Text>
                      <Text style={styleCommon.listDetail1TxtDate}>{askInfo.UpdateDt}</Text>
                    </>
                  ) : 
                  (
                    <Text style={styleCommon.pendding}>답변 준비중입니다.</Text>
                  )
                }
              </View>
            </>
          ) : (
            <Text style={styleCommon.pendding}>최근 문의내역이 존재하지 않습니다.</Text>
          )

        }
        
      </View>

      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
        onPress={() => {
          setAskModal(!askModal);
        }}>
        <Text style={styleCommon.btn1txtLight}>문의하기</Text>
      </TouchableHighlight>

      <AskInsertModal askModal={askModal} closeAskModal={closeAskModal}/>
    </View>
  );
};

export default CustomerCenter;
