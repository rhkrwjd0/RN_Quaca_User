import React,{useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import StyleCommon from '../../Style/StyleCommon';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getNoticeList} from '../../Function/ApiAxios/Notice';

const styleCommon = StyleSheet.create(StyleCommon);

const Notice = ({navigation, route}) => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [noticeList, setNoticeList] = useState([]);
  const [noticeCount, setNoticeCount] = useState(7);
  useEffect(() => {
    getNoticeList(_UrlContext.url, _UserContext.user.StoreId)
    .then((resData) => {
      setNoticeList(resData);
    })
    .catch((err) => {
      alert('err= ',err);
    });
  }, []);

  return (
    <View style={[styleCommon.pageBg, styleCommon.list1Wrap]}>
      {noticeList.length > 0 ? (
        <>
          {
            noticeList.map((item, index) => {
              if(index < noticeCount){
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor=""
                    onPress={() => navigation.navigate('NoticeDetail',{
                      StoreId : item.StoreId,
                      Sid : item.Sid
                    })}>
                    <View style={styleCommon.list1}>
                      <Text style={styleCommon.list1Tit}>{item.Title}</Text>
                      <Text style={styleCommon.list1Date}>{item.InsertDt}</Text>
                    </View>
                  </TouchableHighlight>
                );
              }
            })
          }
        </>
      ) : (
        <Text style={styleCommon.listEmpty}>공지사항이 없습니다.</Text>
      )}

      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Light, styleCommon.btn1SmH, styleCommon.btn1Btm, styleCommon.btn1BtmGap]}
        onPress={() => {
          setNoticeCount(noticeCount+5);
        }}>
        <Text style={styleCommon.btn1txtDark}>더보기</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Notice;
