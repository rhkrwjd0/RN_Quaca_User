import React,{useState, useEffect, useContext}  from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import StyleCommon from '../../Style/StyleCommon';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getNoticeInfo} from '../../Function/ApiAxios/Notice';

const styleCommon = StyleSheet.create(StyleCommon);

const NoticeDetail = ({navigation, route}) => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [noticeInfo, setNoticeInfo] = useState([]);
  const { StoreId, Sid } = route.params;

  useEffect(() => {
    getNoticeInfo(_UrlContext.url, StoreId, Sid)
    .then((resData) => {
      setNoticeInfo(resData);
    })
    .catch((err) => {
      alert('err= ',err);
    });
  }, []);

  return (
      <View style={[styleCommon.pageBg, styleCommon.listDetail1Wrap]}>
        <ScrollView>
          <View style={[styleCommon.listDetail1, styleCommon.bdrBtmLight]}>
            <Text style={styleCommon.listDetail1Tit}>{noticeInfo.Title}</Text>
            <Text style={styleCommon.listDetail1TitDate}>{noticeInfo.InsertDt}</Text>
          </View>
          <View style={[styleCommon.listDetail1]}>
            <Text style={styleCommon.listDetail1Txt}>{noticeInfo.Contents}</Text>
          </View>
        </ScrollView>
      </View>
  );
};


export default NoticeDetail;
