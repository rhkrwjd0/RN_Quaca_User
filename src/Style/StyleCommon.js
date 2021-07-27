import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StyleCommon = {
  /***** layout *****/
  container: {
    width: '100%',
    flex:1,
    backgroundColor: '#fff',
  },
  pageBg: {
    backgroundColor: '#fff',
    flex:1,
  },
  pageVerticalCenter: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: '5.5%',
    paddingRight: '5.5%',
  },
  pageBackBtn: {
    position: 'absolute',
    top: 30,
    left: '3.2%',
  },
  pageBackImg: {
    width: 10,
    height:18,
    margin: 10,
  },

  /***** popup *****/
  modalWrap: {
    position: 'relative',
    margin:0,
  },
  modalPopup: {
    width: '89%',
    backgroundColor: '#fff',
    borderRadius: 16,
    alignSelf: 'center',
  },
  modalPopLeft: {
    width: '94.5%',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignSelf: 'auto',
    overflow: 'hidden',
  },
  modalPopLeftInner: {
    padding: '5.5%',
    paddingTop: 0,
    paddingLeft: '11%',
  },
  modalPopFull: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  modalPopFullInner: {
    flex: 1,
  },
  modalClose: {
    alignSelf: 'flex-end',
    marginRight: '5.5%',
    width: 45,
    height: 50,
    marginTop:-50,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseImg: {
    width:20.5,
    height:20.5,
  },
  modalCloseFull: {
    position: 'absolute',
    top: 30,
    left: '3.2%',
    zIndex: 1,
  },
  modalMenuList: {
    paddingHorizontal: '5.5%',
  },
  modalMenuTxt: {
    paddingVertical: 18,
    textAlign: 'center',
    color: '#222',
    fontSize: 13.5,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },

  /***** home stack bar : top title bar  *****/
  stackHeaderStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  stackHeaderTitleStyle: {
    width:'82%',
    textAlign: 'center',
    fontSize: 19.5,
    fontFamily: 'ArchitypeRenner-Bold',
    textTransform: 'uppercase',
  },
  stackHeaderTitleStyleKorean: {
    fontSize: 17,
  },


  /***** tab *****/
  /* tab1 */
  tab1Wrap: {
    margin: 10,
    marginLeft: '5.5%',
    marginRight: '5.5%',
    height: 40,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    elevation: 0,
    shadowOpacity: 0,
    overflow: 'hidden',
  },
  tab1NoFull: {
    marginTop: 0,
    flexDirection: 'row',
  },
  tab1Menu: {
    paddingTop:0,
    borderLeftWidth:1,
    borderColor: '#f2f2f2',
    marginLeft:-1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab1Txt: {
    borderColor:'#777', 
    paddingBottom:1, 
    marginBottom:-1, 
    color: '#222', 
    fontSize: 13.5,
    borderBottomWidth:0,
  },
  tab1ActiveBg: {
    backgroundColor: '#f2f2f2',
    height: '100%',
    marginLeft:-1,
  },
  tab1ActiveTxt: {
    borderBottomWidth:1,
  },
  /* tab2 */
  tab2Wrap: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: '5.5%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  tab2Menu: {
    color: '#222', 
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderColor: '#777',
    alignSelf: 'flex-end',
    marginLeft: 10,
    marginBottom: 5,
  },
  tab2MenuActive: {
    width: '40%',
    fontFamily: 'ArchitypeRenner-Bold',
    textTransform: 'uppercase',
    fontSize: 24,
    color: '#222',
  },
  /* tab3 */
  tab3Wrap: {
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: '5.5%',
    marginBottom: 4,
  },
  tab3Menu: {
    color: '#777',
    fontSize: 13,
    marginVertical: 8,
    marginRight: 23,
  },
  tab3MenuActive: {
    color: '#222',
    fontSize: 13,
    fontWeight: 'bold',
  },
  /* tab4 */
  tab4Wrap: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: '5.5%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 40,
  },
  tab4Menu: {
    color: '#222', 
    textTransform: 'uppercase',
    alignSelf: 'flex-end',
    marginLeft: 14,
    marginBottom: 5,
    minWidth: 50,
    textAlign: 'right',
  },
  tab4MenuActive: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '40%',
    fontFamily: 'ArchitypeRenner-Bold',
    textTransform: 'uppercase',
    fontSize: 35,
    color: '#222',
  },
  /* press bg color */
  tabPressBgTransp: {
    backgroundColor: 'transparent',
  },


  /***** list *****/
  /* photoList1 */
  photoList1: {
    paddingTop: 1,
  },
  photoList1Item: {
    flexDirection: 'row',
    marginHorizontal: '5.5%',
    paddingTop: 13,
    paddingBottom: 13,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  photoList1ImgWrap: {
    //backgroundColor: '#fff', //임시속성
    borderRadius: 5,
  },
  photoList1Img: {
    width: 57,
    height: 70,
    minHeight: 70,
    maxHeight: 70,
    resizeMode: 'contain',
  },
  photoList1ImgS: {
    width: 51,
    height: 63,
    marginRight: 18,
    resizeMode: 'contain',
  },
  photoList1Txtbox: {
    position: 'relative',
    flex:1,
    marginLeft: 15,
  },
  photoList1Price: {
    marginTop: 4,
  },
  photoList1Cnt: {
    position: 'absolute',
    top: 0,
    right: 0,
    color:'#222',
    includeFontPadding: false,
  },
  /* photoList2 */
  photoList2: {
    flexDirection: 'row',
    marginLeft: '5.5%',
    marginRight: '5.5%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 65,
  },
  photoList2ItemWrap: {
  },
  photoList2Item: {
    width: wp(41.9),
    backgroundColor: 'white',
    marginBottom: 30,
  },
  photoList2BtnTop: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  photoList2Img: {
    width: '100%',
    height: 130,
    borderRadius: 9,
    marginBottom:14,
  },
  photoList2Txtbox: {
    position: 'relative',
    flex:1,
  },
  photoList2Tit: {
    width: '75%',
    fontSize: 15.5,
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: 19,
    marginBottom: 5,
  },
  photoList2Txt: {
    width: '90%',
    fontSize: 11.5,
    color: '#666',
  },
  photoList2TxtTop: {
    fontSize: 11,
    color: '#666',
    position: 'absolute',
    top: 2,
    right: 0,
  },
  /* photolist3 */
  photoList3: {
    flexDirection: 'row',
    marginLeft: '5.5%',
  },
  photoList3Item: {
    width: wp(28),
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  photoList3Img: {
    width: 47,
    height: 87,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  photoList3Mn: {
    width: '80%',
    color: '#222',
    fontSize: 12.5,
    textAlign: 'center',
    lineHeight: 15.5,
  },
  /* list1 */
  list1Wrap: {
    paddingTop: 0,
  },
  list1: {
    marginLeft: '5.5%',
    marginRight: '5.5%',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
  },
  list1Tit: {
    fontSize: 14,
    lineHeight: 18,
    color: '#222',
  },
  list1Date: {
    fontSize: 11,
    color: '#444',
    marginTop: 2,
  },
  /* listDetail1 */
  listDetail1Wrap: {},
  listDetail1: {
    marginLeft: '5.5%',
    marginRight: '5.5%',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
  },
  listDetail1noPdTop: {
    paddingTop: 7,
  },
  listDetail1Tit: {
    fontSize: 14,
    lineHeight: 18,
    color: '#222',
  },
  listDetail1TitDate: {
    fontSize: 11,
    color: '#444',
    marginTop: 4,
  },
  listDetail1Txt: {
    fontSize: 13,
    color: '#444',
    lineHeight: 21,
    letterSpacing: -0.2,
  },
  listDetail1TxtDate: {
    alignSelf: 'flex-end',
    marginTop: 10,
    fontSize: 11,
    color: '#adadad',
  },
  /* listEmpty */
  listEmpty: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 150,
    fontSize: 13,
    color: '#666',
  },
  pendding: {
    paddingVertical: 12,
    backgroundColor: '#f2f2f2',
    fontSize: 12.5,
    color: '#444',
    textAlign: 'center',
  },


  /***** btn *****/
  /* btn1 */
  btn1Light: {
    backgroundColor: "#fff",
    color: "#333",
    borderWidth: 1,
    borderColor: "#222",
    width: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    height: 50,
  },
  btn1Dark: {
    backgroundColor: "#333",
    color: "#fff",
    width: '100%',
    borderRadius: 11,
    justifyContent: 'center',
    height: 50,
  },
  btn1txtLight: {
    fontSize: 13.5,
    color: '#fff',
    textAlign: 'center',
  },
  btn1txtDark: {
    fontSize: 13.5,
    color: '#222',
    textAlign: 'center',
  },
  btn1MdH: {
    height: 47,
    borderRadius: 9,
  },
  btn1SmH: {
    height: 37,
    borderRadius: 7,
  },
  btn1Btm: {
    width: '89%',
    position: 'absolute',
    bottom: 0,
    marginLeft: '5.5%',
    marginRight: '5.5%',
    marginBottom: 10,
  },
  btn1BtmNoFix: {
    position: 'relative',
  },
  btn1Gap: {
    marginTop: 7,
  },
  btn1BtmGap: {
    marginBottom: 20,
  },
  btn1HalfL: {
    width: '50%',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  btn1HalfR: {
    width: '50%',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  /* btn2 */
  btn2: {
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderColor: '#777',
    alignSelf: 'flex-end',
  },
  btn2Txt: {
    color: '#222',
    fontSize: 14,
  },
  btn2Kr: {
    fontSize: 13.5,
  },

  /* btnViewDetail */
  btnViewDetail: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 100,
    backgroundColor: '#333',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnViewDetailImg: {
    resizeMode: 'contain',
    width: '50%',
    height: '50%',
  },

  /* btn3 */
  btn3: {
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  btn3Txt: {
    color: '#999',
    fontSize: 13,
  },
  btn3TxtActive: {
    color: '#333',
    fontSize: 13,
  },
  btn3Line: {
    width: 1,
    height: 11,
    backgroundColor: '#ddd',
  },

  /* btnDelItem */
  btnDelItemImg: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    margin: 7,
  },

  /***** conTit *****/
  conTit1: {
    color: '#222',
    fontSize: 14.5,
    fontWeight: 'bold',
    marginHorizontal: '5.5%',
    marginBottom: 10,
  },


  /***** form *****/
  inputBox: {
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  periodSearchBox: {
    flexDirection: 'row',
    marginHorizontal: '5.5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 5,
  },
  periodDatePickerWrap: {
    width: wp(36.5),
  },
  periodDatePicker: {
    height: 30,
    padding: 5,
    paddingRight: 30,
    fontSize: 14,
    color: '#444',
  },
  periodDateImg: {
    width: 20,
    height: 19,
    position: 'absolute',
    top: 6,
    right: 0,
  },
  btnSrch: {
    marginHorizontal: -10,
  },
  btnSrchImg: {
    width: 23,
    height: 23,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  searchBox: {
    flexDirection: 'row',
    marginHorizontal: '5.5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  srchBar: {
    borderRadius: 4,
    backgroundColor: '#f2f2f2',
    lineHeight: 35,
    width: '88%',
    height: 35,
    paddingLeft: 15,
    paddingRight: 45,
    fontSize: 13.5,
    color: '#444',
  },
  btnReset: {
    position: 'absolute',
    right: 43,
  },
  btnResetImg: {
    width: 18,
    height: 35,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  btnRefresh: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRefreshImg: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },

  /***** selectBox *****/
  selectBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    alignItems: 'center',
  },
  selectTxt: {
    fontSize: 13,
  },
  selectArrow: {
    width: 14,
    height: 9,
    resizeMode: 'contain',
  },

  /***** noteBox *****/
  noteBox: {
    marginHorizontal: '5.5%',
  },
  noteTit: {
    fontSize: 12.2,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noteTxt: {
    fontSize: 11.5,
    color: '#666',
    lineHeight: 18,
  },


  /***** progressBar *****/
  progressBar: {
    backgroundColor: '#e8e8e8',
    height: 3.5,
  },
  progressBarActive: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#333',
    height: 3.5,
    zIndex: 1,
  },


  /***** etc *****/
  bgWh: {
    backgroundColor: '#fff',
  },
  txtBold: {
    fontWeight: 'bold',
  },
  txtPoint: {
    fontFamily: 'RedHatDisplay-Black',
    color: '#222',
  },
  txtSizeXs: {
    fontSize: 11.5,
    color: '#222',
  },
  txtSizeSm: {
    fontSize: 12.5,
    color: '#222',
    lineHeight: 19,
  },
  txtSizeMd: {
    fontSize: 13,
    color: '#222',
  },
  txtSizeLg: {
    fontSize: 13.5,
    color: '#222',
  },
  txtSizeXl: {
    fontSize: 14.5,
    color: '#222',
    lineHeight: 22,
  },
  txtSizeXxls: {
    fontSize: 16.5,
    color: '#222',
  },
  txtSizeXxl: {
    fontSize: 18,
    color: '#222',
  },
  txtColorRd: {
    color: '#f63131',
  },
  txtColorYw: {
    color: '#ffe450',
  },
  txtColorGy: {
    color: '#666',
  },
  txtColorBk: {
    color: '#222',
  },
  hide: {
    display: 'none',
  },
  flexSelfL: {
    alignSelf: 'flex-start',
  },
  flexSelfR: {
    alignSelf: 'flex-end',
  },
  alignItemC: {
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  justiBtw: {
    justifyContent: 'space-between',
  },
  alignItemsC: {
    alignItems: 'center',
  },
  bdrBtmLight: {
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  bdrBtmDark: {
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  mgLeftSm: {
    marginLeft: 8,
  },
  mgRightSm: {
    marginRight: 8,
  },
  mgTopSm: {
    marginTop: 8,
  },
  mgBtmSm: {
    marginBottom: 8,
  },
  pdLeft0: {
    paddingLeft: 0,
  },
}

export default StyleCommon;