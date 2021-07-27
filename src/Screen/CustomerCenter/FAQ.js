import React,{useState,useEffect,useContext} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableHighlight,SafeAreaView, Alert} from 'react-native';
import StyleCommon from '../../Style/StyleCommon';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {getFAQ} from '../../Function/ApiAxios/Notice';

const styleCommon = StyleSheet.create(StyleCommon);



const FAQ = ({ route, navigation }) => {
  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);
  const [FAQ, setFAQ] = useState({});
  const [bl, setBl] = useState('');
  useEffect(() => {
    getFAQ(_UrlContext.url, _UserContext.user.StoreId)
    .then((resData) => {
      setFAQ(resData);
    })
    .catch((err) => {
      alert('err= ',err);
    });
  }, []);


  const renderItem = ({item}) => (
    
      <TouchableHighlight
      onPress={() => {
        bl == item.SID ? setBl('') : setBl(item.SID)
      }}>
        {/* ∧˄∨˅ */}
        <View style={[styleCommon.pageBg, styleCommon.list1Wrap]}>
          <View style={styleCommon.list1}>
              <View style={styles2.faqTitleBox}>
                <Text style={styleCommon.list1Tit}>{'Q. '}{item.Title}</Text>
                <Text style={styleCommon.list1Tit}>{ bl == item.SID ? '▲' : '▼' }</Text>
              </View>
              {
                bl == item.SID ? 
                <View  style={styles2.faqlContentBox}>
                  <Text style={styles2.faqlContent}>{item.Contents}</Text>
                </View>:null
              }
          </View>
          {

          }
      </View>
    </TouchableHighlight>   
  );
    return (
      <SafeAreaView style={styles.StoreMenuDrink}>
        <FlatList
          data={FAQ}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
};


const styles2 = StyleSheet.create({
  faqTitleBox : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  faqlContentBox: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft : 15,
    paddingRight : 15,
    backgroundColor : '#f8f8f8',
    borderRadius : 10
  },
  faqlContent: {
    fontSize: 14,
    lineHeight: 18,
    color: '#222',
  },
});
const styles = StyleSheet.create({});

export default FAQ;
