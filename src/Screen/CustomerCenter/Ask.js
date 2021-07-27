import React,{useState,useEffect,useContext} from 'react';
import {
    StyleSheet, View, Text, FlatList, TouchableHighlight,SafeAreaView, Alert
    ,ScrollView
  } from 'react-native';
import StyleCommon from '../../Style/StyleCommon';

import AskInsertModal from './AskInsertModal';
import {getAskList} from '../../Function/ApiAxios/Notice';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';

const styleCommon = StyleSheet.create(StyleCommon);

const Ask = ({ route, navigation }) => {
  
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [storeId, setStoreId] = useState(1);
  const [askModal, setAskModal] = useState(false);
  const [askList, setAskList] = useState(null);
  
  const closeAskModal = () =>{
    setAskModal(false);
  }

  useEffect(() => {
    getAskList(_UrlContext.url, storeId, _UserContext.user.SsoKey)
    .then((resData) => {
        setAskList(resData);
    })
    .catch((err) => {
      console.log(`getUserAvialableCoupon error: ${err}`);
    });   
  },[askModal]);

  return (
    <SafeAreaView style={styleCommon.pageBg}>
      <ScrollView>

      
      {
        askList != null ? (
          askList.map((item, index) =>(
            <View style={[styleCommon.listDetail1Wrap, styleCommon.mgBtmSm]} key={index}>
              <View style={[styleCommon.listDetail1]}>
                <Text style={styleCommon.listDetail1Tit}>{item.Title}</Text>
                <Text style={styleCommon.listDetail1TitDate}>{item.InsertDt}</Text>
              </View>
              <View style={[styleCommon.listDetail1, styleCommon.listDetail1noPdTop, styleCommon.bdrBtmDark]}>
                {
                  item.ReContents != null && item.ReContents != "" ?(
                    <>
                      <Text style={styleCommon.listDetail1Txt}>{item.ReContents}</Text>
                      <Text style={styleCommon.listDetail1TxtDate}>{item.UpdateDt}</Text>
                    </>
                  ) : (
                    <Text style={styleCommon.pendding}>답변 준비중입니다.</Text>
                  )
                }
              </View>
            </View>
          ))
        ) : (
          <View style={[styleCommon.listDetail1Wrap, styleCommon.mgBtmSm]}>
            <Text style={styleCommon.pendding}>답변 준비중입니다.</Text>
          </View>
        )
      }
      </ScrollView>

      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
        onPress={() => {
          setAskModal(!askModal);
        }}>
        <Text style={styleCommon.btn1txtLight}>문의하기</Text>
      </TouchableHighlight>
        
      <AskInsertModal askModal={askModal} closeAskModal={closeAskModal}/>
    </SafeAreaView>
  );
};

export default Ask;
