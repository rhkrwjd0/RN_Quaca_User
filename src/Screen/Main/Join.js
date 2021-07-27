import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
  View
} from 'react-native';
import {QuacaJoin, GetToken} from '../../Function/Login/Quaca';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';
import Modal from 'react-native-modal';
import LoginSuccess from './LoginSuccess';
const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const Join = ({navigation, route}) => {
  const _UrlContext = useContext(UrlContext);
  const {setUser} = useContext(UserContext);
  const id = route.params.id;
  const type = route.params.type;
  const [token, setToken] = useState(null);
  const [nick, setNick] = useState(null);

  useEffect(() => {
    GetToken()
    .then((token) => {
      setToken(token);
    })
    .catch((err) => {
      Alert.alert('fcm tokenn err', err);
    });
  }, []);
  
      const [closeModal, setCloseModal] = useState(false);
      const ClosedetailModal=()=>{
        setCloseModal(false);
      }
      //모달
      const CloseModal = () => {
        return (
          <Modal
            statusBarTranslucent
            isVisible={closeModal}
            animationInTiming={500}
            animationOutTiming={500}
            useNativeDriver={true}
            style={styleCommon.modalWrap}>
            <TouchableHighlight
              underlayColor=""
              style={[styleCommon.modalClose]}
              onPress={() => setCloseModal(!closeModal)}
              >
              <Image
                style={styleCommon.modalCloseImg}
                source={require('../../../assets/img/icon/btn_close_wh.png')}
              />
            </TouchableHighlight>
    
            <View style={[styleCommon.modalPopup, styleCommon.modalPopLeft]}>
              <View style={styles.couponQrPopup}>
                <LoginSuccess closeDetailModal={ClosedetailModal}/>
              </View>
            </View>
            
          </Modal>
        );
      };

  return (
    <SafeAreaView style={[styleCommon.container, styleCommon.pageVerticalCenter]}>
      <TouchableHighlight
        underlayColor=""
        style= {styleCommon.pageBackBtn}
        onPress={() => navigation.navigate('Login')}
        >
        <Image 
            source={require('../../../assets/img/icon/ico_back_bk.png') }
            style= {styleCommon.pageBackImg}
          />
      </TouchableHighlight>
      <Text style={[styles.joinNickTit]}>Nick Name</Text>
      <Text style={[styles.joinGuide]}>
        {`닉네임을 입력하신 후 확인버튼을 클릭하시면\n회원가입이 완료됩니다.`}
      </Text>
        <TextInput
          style={styles.joinInput}
          placeholder="닉네임"
          onChangeText={(text) => setNick(text)}
        />
      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1MdH]}
        onPress={() =>
          QuacaJoin(_UrlContext.url, id, token, nick, type)
            .then((resJoin) => {
              if (resJoin.success) {
                console.log('가입성공');
                setUser({user: resJoin.info});
                navigation.navigate('Drawer');
                setCloseModal(!closeModal);

              } else {
                alert('이미 가입 된 사용자입니다. 다시 로그인해주세요.');
              }
            })
            .catch((err) => {
              Alert.alert('join error', err);
            })
        }
        >
        <Text style={styleCommon.btn1txtLight}>확인</Text>
      </TouchableHighlight>
      {CloseModal()}
    </SafeAreaView>
  );
};

export default Join;
