import React, {useEffect, useContext, useState, useRef} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, ImageBackground, Image } from 'react-native';
import Modal from 'react-native-modal';
import UrlContext from '../../Provider/UrlContext';
import UserContext from '../../Provider/UserContext';
import {insertAsk} from '../../Function/ApiAxios/Notice';
import Styles from '../../Style/Style';
import StyleCommon from '../../Style/StyleCommon';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);
const styleModal = StyleSheet.create({
  askInsertCom: {
    paddingLeft: 7,
    paddingRight: 7,
  },
  askInsertBox: {
    paddingTop: 25,
  },
  askInsertBoxLine: {
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  askInsertTitleText: {
    paddingBottom: 20,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
  },
  askInsertTitleInputText: {
    textAlign: 'left',
    fontSize: 15,
    color : '#979797',
  },
  askInsertContentsInputText: {
    textAlign: 'left',
    textAlignVertical : "top",
    fontSize: 15,
    color: '#979797',
  },
});
const AskInsertModal = (props) => {
  // 모달 열기, 닫기 
  let isAskModal = props.askModal;
  // 모달 닫기 
  const closeAskFun = () => {props.closeAskModal()}

  const _UrlContext = useContext(UrlContext);
  const _UserContext = useContext(UserContext);

  const [storeId, setStoreId] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [insertNm, setInsertNm] = useState('');
  const [ssoKey, setSsoKey] = useState('');

  const titleInput = useRef();
  const contentsInput = useRef();

  const titleHandler = text => {setTitle(text);};
  const contentsHandler = text => {setContents(text);};
  
  useEffect(() => {
    setTitle('');
    setContents('');
    setSsoKey(_UserContext.user.SsoKey);
    setStoreId(1);
    setInsertNm(_UserContext.user.NickName);
  }, [isAskModal]);

  const validation = () => {
    let chk = true;
    if(title.trim() == ""){
      alert("문의 제목을 입력해주세요.");
      titleInput.current.focus();
      chk = false;
    }else if(contents.trim() == ""){
      alert("문의 내용을 입력해주세요.");
      contentsInput.current.focus();
      chk = false;
    }
    return chk;
  }

  // 등록 처리 
  const AskInsert = () =>{
    if(validation()){
      insertAsk(_UrlContext.url, storeId, ssoKey, insertNm, title, contents)
        .then((resData) => {
            if(resData.success){
              alert("등록 되었습니다.");
              closeAskFun();
            }else{
              alert("등록 실패 되었습니다.");
            }
        })
        .catch((err) => {
          console.log(`getUserAvialableCoupon error: ${err}`);
        });   
    }
  }

  return (
    <Modal
      statusBarTranslucent
      animationInTiming={500}
      animationOutTiming={500}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      useNativeDriver={true}
      isVisible={isAskModal}
      style={styleCommon.modalWrap}
    >
      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.modalClose]}
        onPress={() => {closeAskFun();}}
      >
        <Image
        style={styleCommon.modalCloseImg}
        source={require('../../../assets/img/icon/btn_close_wh.png')}
        />
      </TouchableHighlight>

      <View style={[styleCommon.modalPopup, styleCommon.modalPopLeft]}>
        <View style={styleCommon.modalPopLeftInner}>
          {/* <AskInsert /> */}

          <View style={styleModal.askInsertCom}>
            {/* 스타일확인용 임시태그 */}
            <View style={[styleModal.askInsertBox, styleModal.askInsertBoxLine]}>
              <Text style={styleModal.askInsertTitleText}>문의사항 작성</Text>      
              <TextInput 
              style={styleModal.askInsertTitleInputText} 
              placeholder="문의제목"
              value={title} 
              onChangeText={titleHandler}
              ref={titleInput}
              />
            </View>
            <View style={[styleModal.askInsertBoxLine]}>  
              <TextInput 
                style={styleModal.askInsertContentsInputText} 
                placeholder="문의하실 내용을 입력해주세요."
                multiline
                numberOfLines={12}
                value={contents} 
                onChangeText={contentsHandler}
                ref={contentsInput}
              />
            </View>
            <View style={[styleModal.askInsertBox, styleModal.askInsertBoxLine]}></View>
            {/* //스타일확인용 임시태그 */}
          </View>

          <TouchableHighlight
            underlayColor=""
            style={[styleCommon.btn1Dark, styleCommon.btn1MdH]}
            onPress={() => {AskInsert();}}
          >
            <Text style={styleCommon.btn1txtLight}>확인</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default AskInsertModal;
