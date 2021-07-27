import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableHighlight, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const OrderFav = ({navigation}) => {
  
  const [favEditModal, setFavEditModal] = useState(false);
  // 즐겨찾기 설정 modal
  const FavEditModal = () => {
    return (
      <Modal
        statusBarTranslucent
        isVisible={favEditModal}
        animationInTiming={500}
        animationOutTiming={500}
        animationIn="fadeIn"
        animationOut="fadeOut"
        useNativeDriver={true}
        style={styleCommon.modalWrap}>
        <TouchableHighlight
          underlayColor=""
          style={[styleCommon.modalClose]}
          onPress={() => setFavEditModal(!favEditModal)}
          >
          <Image
            style={styleCommon.modalCloseImg}
            source={require('../../../assets/img/icon/btn_close_wh.png')}
          />
        </TouchableHighlight>

        <View style={[styleCommon.modalPopup]}>
            <View style={styleCommon.modalMenuList}>
              <Text onPress={() => {}} style={styleCommon.modalMenuTxt}>퀵오더 메인으로 설정</Text>
              <Text onPress={() => {}} style={styleCommon.modalMenuTxt}>즐겨찾기 설정목록 상세보기</Text>
              <Text onPress={() => {}} style={styleCommon.modalMenuTxt}>목록삭제</Text>
            </View>
        </View>
        
      </Modal>
    );
  };

  return (
    <View style={[styleCommon.container]}>
      <View style={styles.orderFavListWrap}>
        <TouchableHighlight
          underlayColor=""
          onPress={() => {}}>
          <View style={[styles.orderFavList, styles.orderFavListActive]}>{/* 리스트 터치시 styles.orderFavListActive스타일 추가 */}
            <View style={[styles.orderFavTotal]}>
              <Image
                  style={styles.orderFavChk}
                  source={require('../../../assets/img/icon/ico_chk.png')}
                />{/* 퀵오더 메인선택시 체크표시 */}
              <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxl]}>15,000</Text>
              <Text style={styles.orderFavTotalUnit}>원</Text>
            </View>
            <View style={styles.orderFavMenu}>
              <Text style={[styles.orderFavMenuNm]}>에티오피아 예가체프</Text>
              <Text style={styleCommon.txtPoint}>1</Text>
              <Text style={[styles.orderFavPrice]}>3,500 ₩</Text>
            </View>
            <View style={styles.orderFavMenu}>
              <Text style={[styles.orderFavMenuNm]}>에티오피아 예가체프</Text>
              <Text style={styleCommon.txtPoint}>1</Text>
              <Text style={[styles.orderFavPrice]}>3,500 ₩</Text>
            </View>
            <View style={styles.orderFavMenu}>
              <Text style={[styles.orderFavMenuNm]}>에티오피아 예가체프</Text>
              <Text style={styleCommon.txtPoint}>1</Text>
              <Text style={[styles.orderFavPrice]}>3,500 ₩</Text>
            </View>
            <TouchableHighlight
              underlayColor=""
              style={styles.orderFavSet}
              onPress={() => setFavEditModal(!favEditModal)}>
              <Image
                style={styles.orderFavSetImg}
                source={require('../../../assets/img/icon/ico_set_menu.png')}
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor=""
          onPress={() => {}}>
          <View style={[styles.orderFavList]}>
            <View style={[styles.orderFavTotal]}>
              <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxl]}>15,000</Text>
              <Text style={styles.orderFavTotalUnit}>원</Text>
            </View>
            <View style={styles.orderFavMenu}>
              <Text style={[styles.orderFavMenuNm]}>에티오피아 예가체프</Text>
              <Text style={styleCommon.txtPoint}>1</Text>
              <Text style={[styles.orderFavPrice]}>3,500 ₩</Text>
            </View>
            <View style={styles.orderFavMenu}>
              <Text style={[styles.orderFavMenuNm]}>에티오피아 예가체프</Text>
              <Text style={styleCommon.txtPoint}>1</Text>
              <Text style={[styles.orderFavPrice]}>3,500 ₩</Text>
            </View>
            <TouchableHighlight
              underlayColor=""
              style={styles.orderFavSet}
              onPress={() => setFavEditModal(!favEditModal)}>
              <Image
                style={styles.orderFavSetImg}
                source={require('../../../assets/img/icon/ico_set_menu.png')}
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
      </View>

      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1Btm]}
        onPress={() => {}}>
        <Text style={styleCommon.btn1txtLight}>주문하기</Text>
      </TouchableHighlight>

      {FavEditModal()}
    </View>
  );
};


export default OrderFav;
