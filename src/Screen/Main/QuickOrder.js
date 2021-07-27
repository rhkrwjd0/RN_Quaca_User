import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableHighlight, FlatList} from 'react-native';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';
import Modal from 'react-native-modal';
import DetailFav from './DetailFav';
const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const QuickOrder = ({navigation}) => {
  const [detailModal, setDetailModal] = useState(false);

    //모달
    const DetailModal = () => {
      return (
        <Modal
          statusBarTranslucent
          isVisible={detailModal}
          animationInTiming={500}
          animationOutTiming={500}
          useNativeDriver={true}
          style={styleCommon.modalWrap}>
          <TouchableHighlight
            underlayColor=""
            style={[styleCommon.modalClose]}
            onPress={() => setDetailModal(!detailModal)}
            >
            <Image
              style={styleCommon.modalCloseImg}
              source={require('../../../assets/img/icon/btn_close_wh.png')}
            />
          </TouchableHighlight>
  
          <View style={[styleCommon.modalPopup, styleCommon.modalPopLeft]}>
            <View style={styles.couponQrPopup}>
              <DetailFav />
            </View>
          </View>
          
        </Modal>
      );
    };


  return (
    <View style={[styleCommon.container, styleCommon.pageVerticalCenter]}>
      <TouchableHighlight
        underlayColor=""
        style={styles.favHome} 
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          style={styles.favHomeImg}
          source={require('../../../assets/img/icon/ico_home.png')}
        />
      </TouchableHighlight>

      <Text 
        style={styleCommon.btn2}
        onPress={() => navigation.navigate('OrderFav')}
      >Favorites List</Text>
      
      <View style={styles.favBestBox}>
        <Text style={styles.favBestTit}>Best Favorite</Text>
        <TouchableHighlight 
          style={[styleCommon.btnViewDetail, styles.favBestBtnDetail]}
          onPress={() => {
            setDetailModal(!detailModal);
          }}
        >
          <Image
            style={styleCommon.btnViewDetailImg}
            source={require('../../../assets/img/icon/ico_search_wh.png')}
          />
        </TouchableHighlight>

        {/* 목록 */}
        <View style={[styleCommon.photoList1]}>
          <View style={[styleCommon.photoList1Item, styles.favBestOrder]}>
            <Image
              source={require('../../../assets/img/sample_coffee.png')}
              style={styleCommon.photoList1ImgS}
            />
            <View style={styles.favBestImgbgTemp}></View>
            <View style={styleCommon.photoList1Txtbox}>
              <Text style={[styleCommon.txtSizeLg, styleCommon.txtBold]}>에티오피아 예가체프</Text>
              <Text style={[styleCommon.txtSizeXl, styleCommon.photoList1Price]}>
                <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxl]}>3,500</Text>₩
              </Text>
              <Text style={[styleCommon.photoList1Cnt]}>
                <Text style={styleCommon.txtPoint}>1</Text>개
              </Text>
            </View>
          </View>
          <View style={[styleCommon.photoList1Item, styles.favBestOrder]}>
            <Image
              source={require('../../../assets/img/sample_coffee.png')}
              style={styleCommon.photoList1ImgS}
            />
            <View style={styles.favBestImgbgTemp}></View>
            <View style={styleCommon.photoList1Txtbox}>
            <Text style={[styleCommon.txtSizeLg, styleCommon.txtBold]}>에티오피아 예가체프</Text>
              <Text style={[styleCommon.txtSizeXl, styleCommon.photoList1Price]}>
                <Text style={[styleCommon.txtPoint, styleCommon.txtSizeXxl]}>3,500</Text>₩
              </Text>
              <Text style={[styleCommon.photoList1Cnt]}>
                <Text style={styleCommon.txtPoint}>2</Text>개
              </Text>
            </View>
          </View>

        </View>
        {/* //목록 */}

      </View>

      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Dark, styleCommon.btn1MdH, styleCommon.btn1Gap]}
        onPress={() => {
          alert("Favorites 주문");
        }}>
        <Text style={styleCommon.btn1txtLight}>Best Favorite 주문하기</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor=""
        style={[styleCommon.btn1Light, styleCommon.btn1MdH, styleCommon.btn1Gap]}
        onPress={() => {
          alert("메뉴보기");
        }}>
        <Text style={styleCommon.btn1txtDark}>메뉴보기</Text>
      </TouchableHighlight>
      {DetailModal()}
    </View>
  );
};



export default QuickOrder;
