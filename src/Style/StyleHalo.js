import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Platform } from 'react-native';
import { Row } from 'native-base';

const Styles = {
  /***** splash - splash.js *****/
  splashWrap: {
    backgroundColor: '#111',
    alignItems:'center',
  },
  splashLogo: {
    width: '65%',
    height: '65%',
  },

  /***** drawer navigation - drawerContents.js *****/
  drawer: {
    width: '84%',
  },
  drawerLine: {
    width:30,
    height: 1,
    backgroundColor: '#000',
    marginBottom: 32,
  },
  drawerBox: {
    marginTop: 90,
    marginLeft: 35,
    flex: 0,
  },
  drawerInner: {
  },
  drawerMn: {
    paddingTop: 12.5,
    paddingBottom: 12.5,
    fontSize: 19.5,
    fontFamily: 'ArchitypeRenner-Bold',
    textTransform: 'uppercase',
    includeFontPadding: false,
    color: '#252525',
  },
  drawerBoxBtm: {
    marginTop: 50,
    marginLeft: 35,
  },
  drawerMnBtm: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 13.5,
    fontFamily: 'ArchitypeRenner-Demi',
    textTransform: 'uppercase',
    color: '#252525',
  },
  drawerMnLogout: {
    marginTop: 50,
    fontFamily: 'ArchitypeRenner-Medium',
    fontSize: 11.5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    alignSelf: 'flex-start',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 2.5,
    letterSpacing: 0.3,
    color: '#666',
  },
  drawerClose: {
    resizeMode: 'contain',
    position: 'absolute',
    top:34,
    right: 15,
    padding:12,
  },
  drawerCloseImg: {
    width: 14,
    height: 14,
  },

  /***** main - Home.js *****/
  containerMain: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
  },
  containerMainInner: {
    height:490,
  },
  logo: {
    width: wp('48'),
    height: wp('4.7'),
    resizeMode: 'contain',
    marginLeft: '5.5%',
  },
  userImg: {
    width: 35,
    height: 35,
    borderRadius: 50,
    margin: 5,
  },
  geoBox: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  mainBox: {
    width: '100%',
    flex:1,
    marginTop:28,
    height: hp('75'),
  },
  menuBox: {
    width: wp('36'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 19,
    backgroundColor: '#fff',
    marginBottom: wp('4.4'),
    position: 'absolute',
  },
  mnL: {
    width: wp('48.6'),
  },
  mnReward: {
    height: 260,
    backgroundColor: '#252525',
    left: '5.5%',
    top: 0,
  },
  mnRewardShape: {
    justifyContent: 'center',
    width: wp('30.5'),
    height: wp('30.5'),
    marginBottom: -9,
  },
  mnRewardCnt: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row', 
    flexWrap:'wrap',
  },
  mnRewardCntUser: {
    fontSize: 19,
    color: '#fbd956',
    fontFamily: 'RedHatDisplay-Bold',
    paddingTop: 1.5,
    marginRight: 1,
  },
  mnRewardCntTotal: {
    fontSize: 14,
  },
  mnRewardImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  mnCoupon: {
    height: 97.5,
    left: '5.5%',
    top:275,
  },
  mnCouponCnt: {
    position: 'absolute',
    top: 5,
    left:-10,
    marginLeft: 26,
    fontSize: 16,
    fontWeight: '600',
    width: 30,
    textAlign: 'center',
    letterSpacing: -1,
  },
  mnOrder: {
    height: 110,
    right: '5.5%',
    top: 57.5,
  },
  mnFav: {
    height: 190,
    right: '5.5%',
    top: 182.5,
    borderWidth: 1,
    borderColor: '#666',
  },
  mnStore: {
    height: 97.5,
    left: '5.5%',
    top: 387.5,
  },
  mnHistory: {
    height: 97.5,
    right: '5.5%',
    top: 387.5,
  },
  menuImg: {
    width: wp('16.5'),
    resizeMode: 'contain',
  },
  mnImgOrder: {height:wp('16.8')},
  mnImgCoupon: {height:wp('9.4')},
  mnImgFav: {height:wp('16.8')},
  mnImgStore: {height:wp('13.3')},
  mnImgHistory: {height:wp('12.9')},
  menuTxt: {
    textAlign: 'center',
    fontSize: 13.2,
    color: '#333',
    textTransform: 'uppercase',
    marginTop: 5,
  },
  menuTxtW: {
    color: '#fff',
  },
  closeTxt: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
  },
  topBar: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingLeft: '5.5%',
    paddingRight: '5.5%',
  },
  topBarMain: {
    position: 'absolute',
    top:0,
    height: 75,
    paddingTop: 32,
  },
  topBarBtn: {
  },
  btnNavi: {
    width: 24,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  btnNotice: {
    width: wp(4.5),
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  modalPosition: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: hp('10%'),
  },
  modalBox: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cancelBtnTouch: {
    position: 'absolute',
    width: '90%',
    height: 50,
    right: 10,
    top: 10,
    justifyContent: 'center',
  },
  cancelBtn: {
    alignSelf: 'flex-end',
    width: 15,
    height: 15,
    marginRight: 30
  },

  /***** QuickOrder - QuickOrder.js *****/
  favHome: {
    position: 'absolute',
    top: 50,
    left: '5.5%',
  },
  favHomeImg: {
    width: 28,
    height: 24,
  },
  favBestBox: {
    paddingTop: 30,
    paddingBottom: 20,
    marginTop: 17,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  favBestTit: {
    paddingLeft: 30,
    paddingBottom: 4,
    fontSize: 17,
    fontFamily: 'ArchitypeRenner-Demi',
    textTransform: 'uppercase',
    includeFontPadding: false,
    color: '#252525',
  },
  favBestOrder: {
    marginLeft: '7%',
    marginRight: '6%',
    paddingTop: 13,
    paddingBottom: 10,
  },
  favBestImgbgTemp: {
    position: 'absolute',
    zIndex: -1,
    left: -4,
    bottom: 0,
    width: 60, 
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  favBestBtnDetail: {
    top: 20,
    right: 16,
  },

  /***** Order Favorites - OrderFav.js *****/
  orderFavListWrap: {
    padding: '5.5%',
  },
  orderFavList: {
    position: 'relative',
    paddingHorizontal: 23,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 7,
    includeFontPadding: false,
    marginBottom: 12,
  },
  orderFavListActive: {
    borderColor: '#666',
  },
  orderFavTotal: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  orderFavTotalUnit: {
    fontSize: 15,
    color: "#222",
    marginTop: 2,
    fontWeight: 'bold',
  },
  orderFavMenu: {
    color: "#666",
    flexDirection: 'row',
    marginBottom: 3,
  },
  orderFavMenuNm: {
    fontSize: 13.5,
    marginRight: 8,
  },
  orderFavPrice: {
    position: 'absolute',
    top: -1,
    right: 0,
    fontSize: 14.5,
    color: "#222",
  },
  orderFavChk: {
    width: 22,
    height: 22,
    marginTop: 1,
    marginLeft: -3,
    marginRight: 10,
  },
  orderFavSet: {
    position: 'absolute',
    top: 15,
    right: 10,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderFavSetImg: {
    width:3,
    height:17,
  },

  /* 주문음료완료 팝업 - OrderNotice.js */
  orderDoneNotice: {
    paddingLeft: 7,
    paddingRight: 7,
  },
  orderNoticeTit: {
    paddingTop: 47,
    paddingBottom: 50,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderNoticeInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNoticeInfo: {
    fontSize: 12,
    color: '#7b7b7b',
    marginTop: 8,
  },
  orderNoticeMnBox: {
    marginTop: 30,
    marginBottom: 50,
    minHeight: 80,
  },
  orderNoticeMn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  orderNoticeMnTxt: {
    fontSize: 14,
    color: '#222',
    fontWeight: 'bold',
  },
  orderNoticeMnCnt: {
    fontSize: 14,
    color: '#222',
  },

  /***** StoreMenu - StoreMenu.js, OrderMenu.js, OrderOption.js *****/
  storeMenuTit: {
    flexDirection: 'row',
  },
  storeMenuTitImg: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  storeMenuTitTxt: {
    fontSize: 17,
    marginLeft: 12,
    fontFamily: 'ArchitypeRenner-Demi',
  },
  storeMenuList: {
    marginTop: 10,
    marginLeft: 22,
    marginBottom: 0,
  },
  storeMenuListLine: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: '8.2%',
    borderLeftWidth: 1,
    borderColor: '#f3f3f3',
    width: '100%',
    height: '100%',
  },
  storeMenuItem: {
    backgroundColor: '#f2f2f2',
    marginLeft: 34,
    marginRight: 0,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: -0.5,
  },
  storeMenuLabel: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 50,
    fontSize: 11.5,
    marginLeft: 8,
  },
  storeMenuBgT: {
    marginTop: 8,
    height: 10,
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 10,
    marginLeft: 34,
  },
  storeMenuBgB: {
    marginBottom: 80,
    height: 10,
    backgroundColor: '#f2f2f2',
    borderBottomLeftRadius: 10,
    marginLeft: 34,
  },
  storeMenuNumSelected: {
    color: '#ffe450',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 16,
  },
  /* 메뉴modal */
  storeMenuPopbox: {
    marginHorizontal: '8%',
    marginTop: 100,
  },
  storeMenuPopNmEng: {
    width: '70%',
    fontFamily: 'ArchitypeRenner-Bold',
    fontSize: 30,
    textTransform: 'uppercase',
    lineHeight: 32,
  },
  storeMenuPopName: {
    fontSize: 15.5,
    marginTop: 10,
    color: '#222',
  },
  storeMenuPopPrice: {
    fontSize: 22,
    color: '#222',
    fontFamily: 'RedHatDisplay-Bold',
  },
  storeMenuPopImg: {
    width: '100%',
    height: hp(31),
    marginTop: 15,
    resizeMode: 'contain',
    zIndex: -1,
  },
  storeMenuPopBtnDetail: {
    top: 97,
  },
  storeMenuPopDetail: {
    color: '#ADADAD',
    width: '90%',
    alignSelf: 'center',
  },
  storeMenuPopPriceBox: {
    textAlign: 'center',
    color: '#ADADAD',
    marginTop: 10,
    marginBottom: 10,
  },
  storeMenuPopPriceTotal: {
    color: '#222',
    fontSize: 30,
    fontFamily: 'RedHatDisplay-Bold',
  },
  storeMenuPopCntIconBox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeMenuPopCntBox: {
    flexDirection: 'row',
    width: '34%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  storeMenuPopCntTxt: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 20,
    //fontWeight: 'bold',
  },
  storeMenuPopCntIcon: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
  },
  storeMenuPopOption: {
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
    marginBottom: 15,
    marginHorizontal: '5.5%',
  },
  storeMenuPopOptionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 38,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  storeMenuPopOptionTxt: {
    fontSize: 13,
    color: '#333',
  },
  /* 추가옵션modal */
  storeMenuPopOtherBox: {
    marginTop: 35,
    minHeight: 300,
  },
  storeMenuPopOtherItem: {
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  storeMenuPopOtherInput: {
    backgroundColor: '#f2f2f2',
    minHeight: 45,
    marginBottom: 50,
    borderRadius: 7,
    padding: 10,
  },
  storeMenuPopOtherTit: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },


  /***** cart - Cart.js *****/
  cartStore: {
    marginHorizontal: '5.5%',
  },
  btnAddFav: {
    marginTop: 30,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
  },
  btnAddFavImg: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 5,
  },
  cartStoreImgWrap: {
    width: 85,
    height: 85,
  },
  cartStoreImg: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    resizeMode: 'contain',
  },
  cartStoreSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
    marginTop: -5,
  },
  cartStoreName: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cartBtnDelItem: {
    position: 'absolute',
    bottom: -2,
    right: -5,
  },
  cartTotalBox: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5.5%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
  },


  /***** coupon - Coupon.js, CouponHistory.js, QrCode.js *****/
  couponStatus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: '#222',
    fontSize: 12.5,
  },
  couponUseDate: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    color: '#888',
    fontSize: 12,
  },
  couponQrPopup: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  couponQrCode: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
    minHeight: 340,
  },
  couponName: {
   color: '#222',
   fontSize: 17,
   fontWeight: 'bold',
  },
  couponQr: {
   width: 140,
   height: 140,
   marginTop: 20,
  },
  couponCode: {
    color: '#222',
    fontSize: 16,
    marginTop: 7,
    letterSpacing: -0.3,
   },
   couponUsed: {
    opacity: 0.6,
   },
   

  /***** History - PayHistory.js *****/
  historyList: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#949494',
    marginHorizontal: '5.5%',
    paddingBottom: 15,
  },
  historyListItem: {
    marginHorizontal: 0,
    borderBottomWidth: 0,
  },
  historyListInfo: {
    fontFamily: 'RedHatDisplay-Bold',
    color: '#222',
    fontSize: 13,
    marginLeft: 0,
    marginBottom: 7,
  },
  historyStatus: {
    position: 'absolute',
    top: 40,
    right: 0,
    fontSize: 12.5,
    color: '#222',
  },
  historyPriceTotal: {
    position: 'absolute',
    top: -1,
    right: 0,
    flexDirection: 'row',
    marginBottom: 13,
    fontSize: 13,
  },
  historyPriceTotalNum: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 15,
  },


  /***** Stores - StoreSearch.js, StoreFavorite.js *****/
  storeMap: {
    width: '100%',
    height: 420,
  },
  storeFavList: {
    marginTop: 15,
  },
  storeBtnFavImg: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
    margin: 7,
  },
  storeBtnSetImg: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
    margin: 9,
  },

  /***** pay - PayPage.js *****/
  paymethodWrap: {
    marginTop: 13,
    marginBottom: 32,
  },
  paymethodSlider: {
    flexDirection: 'row',
  },
  paymethodItem: {
    paddingHorizontal: 6,
  },
  paymethod: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  paymethodIco: {
    position: 'absolute',
    top: 13,
    left: 13,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  paymethodActive: {
    borderWidth: 1,
    borderColor: '#666',
    backgroundColor: '#fff',
  },
  payMethodTxt: {
    color: '#777',
  },
  payMethodTxtActive: {
    color: '#222',
  },
  paySamsung: {
    width: 105,
    height: 17,
    resizeMode: 'contain',
  },
  payCoupon: {
    marginHorizontal: '5.5%',
    marginBottom: 32,
  },
  payMoney: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    marginHorizontal: '5.5%',
  },
  payMoneyTotal: {
    borderTopWidth: 1,
    borderColor: '#666',
    marginTop: 4,
    paddingTop: 10,
  },

  /***** reward - Reward.js *****/
  rewardCntBox: {
    marginTop: 45,
    marginHorizontal: '5.5%',
    marginBottom: 80,
  },
  rewardCntTxt: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  rewardCnt: {
    fontSize: 35,
    fontFamily: 'RedHatDisplay-Bold',
    marginRight: 3,
  },
  rewardCntLine: {
    fontSize: 24,
  },
  rewardCntTotal: {
    fontSize: 25,
    fontFamily: 'ArchitypeRenner-Demi',
  },
  rewardCntUntil: {
    color: '#222',
    fontSize: 17.2,
    fontFamily: 'RedHatDisplay-Bold',
  },
  rewardListBox: {
    marginTop: 5,
    minHeight: 200,
    marginHorizontal: '5.5%',
  },
  rewardList: {
    marginBottom: 25,
  },
  rewardListItem: {
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  rewardNote: {
    paddingTop: 50,
    paddingBottom: 40,
  },


  /***** 프리퀀시 - Frequency.js *****/
  freqPeriodBox: {
    marginTop: 45,
    marginHorizontal: '5.5%',
  },
  freqPeriodTxt: {
    flexDirection: 'row',
    marginBottom: 13,
    alignItems: 'center',
  },
  freqPeriodDate: {
    //fontFamily: 'RedHatDisplay-Bold',
    fontSize: 12.2,
    marginLeft: 10,
    color: '#222',
  },
  freqDday: {
    position: 'absolute',
    top: -4,
    right: 0,
    fontSize: 16.5,
    fontFamily: 'RedHatDisplay-Bold',
  },
  freqGuide: {
    color: '#666',
    fontSize: 12,
    marginHorizontal: '5.5%',
    paddingRight: 30,
    marginTop: 37,
  },
  freqGuideImgBox: {
    marginTop: 3,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  freqGuideItem: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  freqGuideSign: {
    width: 35,
    marginTop: -5,
    textAlign: 'center',
    color: '#888',
    paddingRight: 6,
    includeFontPadding: false,
    //justifyContent: 'center',
    //borderWidth: 1,
  },
  freqRefresh: {
    marginLeft: 22,
    marginTop: -7,
  },
  freqGuideMn: {
    width: '100%',
    fontSize: 11,
    marginTop: 3,
  },
  freqCnt: {
    position: 'absolute',
    top: 21,
    left: -5,
    width: 23,
    height: 23,
    backgroundColor: '#222',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#ffe450',
    textAlign: 'center',
    fontSize: 12.5,
    lineHeight: 22,
  },
  freqImgboxSp: {
    marginTop: 37,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  freqImgboxNmr: {
    marginTop: 5,
    marginBottom: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  freqImgSp: {
    width: 34,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 8,
  },
  freqImgNmr: {
    width: 34,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 9,
    marginVertical: 7.5,
    alignSelf: 'center',
  },
  freqImgGift: {
    width: 38,
    height: 50,
    resizeMode: 'contain',
  },
  freqImgNoMg: {
    margin: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  freqEventItem: {
    marginBottom: 65,
  },


   /***** 고객센터 - CustomerCenter.js *****/
  cstmrCenterMnList: {
    marginHorizontal: '8.3%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
    paddingBottom: 27,
  },
  cstmrCenterMn: {
    width: '30%',
  },
  cstmrCenterMnTxt: {
    fontSize: 12.5,
    color: '#222',
    textAlign: 'center',
    marginTop:12.5,
  },
  cstmrCenterMnImg: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  cstmrCenterAsk: {
    marginTop: 17,
    borderTopWidth: 1,
    borderColor: '#efefef',
    paddingTop: 30,
  },
  cstmrCenterGuide: {
    marginHorizontal: '5.5%',
  },
  cstmrCenterGuideBg: {
    width:'100%',
    height:105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cstmrCenterGuideTxt: {
    fontSize: 14.5,
    color: '#fff',
  },
  cstmrCenterGuideTxtPoint: {
    color: '#ffe450',
  },


  /***** login - Login.js *****/
  containerLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 15,
  },
  loginTit: {
    fontFamily: 'ArchitypeRenner-Bold',
    fontSize: 44,
    color: '#333',
    textAlign: 'center',
  },
  loginGuide: {
    marginTop: 20,
    textAlign: 'center',
    color: '#6d6d6d',
    fontSize: 11,
  },
  loginBtnBox: {
    marginTop: 70,
    flexDirection: 'row',
    marginBottom: 50,
  },
  loginBtn: {
    width: 54,
    height: 54,
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 60,
    marginLeft: 8.5,
    marginRight: 8.5,
  },
  loginBtntxt: {
    width: '70%',
    textAlign: 'center',
    fontSize: 0,
  },
  loginLogoTxtBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginSocialLogo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  /***** nick name - Join.js *****/
  joinNickTit: {
    fontFamily: 'ArchitypeRenner-Bold',
    fontSize: 34,
    color: '#333',
    marginLeft: 10,
  },
  joinGuide: {
    marginTop: 28,
    color: '#6d6d6d',
    fontSize: 11,
    marginLeft: 10,
  },
  joinInput: {
    marginTop: 50,
    marginBottom: 22,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },

  /***** 영수증 - ReceiptDetail.js *****/
  receiptDetailCom: {
    paddingLeft: 7,
    paddingRight: 7,
  },
  receiptDetailLine: {
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  receiptDetailTitle :{
    paddingTop: 47,
    paddingBottom: 50,
  },
  receiptDetailTitleText :{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  receiptDetailTitleSubText :{
    textAlign: 'center',
    fontSize: 14,
  },
  receiptDetailInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  receiptDetailInfo: {
    fontSize: 12,
    color: '#7b7b7b',
    marginTop: 8,
    marginBottom: 10,
  },
  receiptDetailBox: {
    marginTop: 5,
    marginBottom: 5,
    //minHeight: 80,
  },
  receiptDetailBoxLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  receiptDetailTxt: {
    fontSize: 12,
    color: '#222',
    //fontWeight: 'bold',
  },
  receiptDetailNumMl: {
    marginLeft : 10
  },
  receiptDetailNum: {
    fontSize: 12,
    color: '#222',
  },
  receiptDetailFinalPay :{
    //paddingTop: 47,
    marginBottom: 10,
  },
  receiptDetailFinalPayNum: {
    fontSize: 15,
    color: '#222',
    fontWeight: 'bold',
  },
  receiptDetailFooter: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  receiptDetailFooterText : {
    //textAlign: 'center',
    fontSize: 11,
    color : '#7b7b7b',
  },
}

export default Styles;