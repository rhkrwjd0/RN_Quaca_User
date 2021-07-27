import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import UrlContext from '../../Provider/UrlContext';

import StyleCommon from '../../Style/StyleCommon';
const styleCommon = StyleSheet.create(StyleCommon);

const NoticeScreen = () => {
  const _UrlContext = useContext(UrlContext);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const url = `${_UrlContext.url.express}notice/notice`;
    const param = {
      StoreId: '1', // 일단 고정...
    };
    axios.post(url, param).then((resNotice) => {
      console.log('resNotice > ', resNotice.data);
      if(resNotice.data.success){
        setNotice(resNotice.data.info[0]);

      }
    });
  }, []);

  // const renderItem = ({item}) => {
  //   return (
  //     <View>
  //       {/* <Text>{item.title}</Text> */}
  //       <ScrollView>
  //         <Image style={styles.noticeImg} source={{uri: item.Discription}} />
  //       </ScrollView>
  //     </View>
  //   );
  // };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>공지</Text>
      {notice !== null && (
        <ScrollView>
          <Image
                    style={styles.photoList2Img}
                    source={{uri: notice.DisCription}}
                  />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('60%'),
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#A60030',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  noticeImg: {
    width: '100%',
    height: '100%',
  
    // resizeMode: 'contain',
  },
  photoList2Img: {
    width: '100%',
    height: 230,
    borderRadius: 9,
    marginBottom:14,
  },
});

export default NoticeScreen;
