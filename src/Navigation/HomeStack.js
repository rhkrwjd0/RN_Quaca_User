import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image } from 'react-native';
import Home from '../Screen/Main/Home';
import StoreList from '../Screen/Store/StoreList';
import StoreInfo from '../Screen/Store/StoreInfo';
import MenuTopNavi from './MenuTopNavi';
import Reward from '../Screen/Coupon/Reward';
import Frequency from '../Screen/Coupon/Frequency';
import CouponTopNavi from './CouponTopNavi';
import HistoryTopNavi from './HistoryTopNavi';
import StoreTopNavi from './StoreTopNavi';
import PayDetail from '../Screen/Pay/PayDetail';
import Cart from '../Screen/Cart/Cart';
import PayPage from '../Screen/Pay/PayPage';
import Payment from '../Function/Pay/Payment';
import PaymentResult from '../Screen/Pay/PaymentResult';
import Notice from '../Screen/CustomerCenter/Notice';
import NoticeDetail from '../Screen/CustomerCenter/NoticeDetail';
import CustomerCenter from '../Screen/CustomerCenter/CustomerCenter';
import Ask from '../Screen/CustomerCenter/Ask';
import FAQ from '../Screen/CustomerCenter/FAQ';
import QuickOrder from '../Screen/Main/QuickOrder';
import OrderFav from '../Screen/Main/OrderFav';
import FCMSetting from '../Screen/CustomerCenter/FCMSetting';
import Terms from '../Screen/CustomerCenter/Terms';
import PrivacyPolicy from '../Screen/CustomerCenter/PrivacyPolicy';
import StyleCommon from '../Style/StyleCommon';

const Stack = createStackNavigator();
const styleCommon = StyleSheet.create(StyleCommon);
const setTxtAndStyle = (val) => {
  let barTxtStyle = styleCommon.stackHeaderTitleStyle;
  let barTxtStyleKr = styleCommon.stackHeaderTitleStyleKorean;
  let chkHeaderTitleStyleKorean = !val.kr ? barTxtStyle : {...barTxtStyle, ...barTxtStyleKr};
  return {
    ...{
      title: val.txt,
      headerStyle: styleCommon.stackHeaderStyle,
      headerTitleStyle: chkHeaderTitleStyleKorean,
    }, ...val.other
  };
}

function HomeStack({ navigation, route }) {
  return (
    <Stack.Navigator
      screenOptions={{ 
        headerBackImage : () => (
          <Image 
            source={ require('../../assets/img/icon/ico_back_bk.png') }
            style= {styleCommon.pageBackImg}
          />
        ),
       }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuickOrder"
        component={QuickOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderFav"
        component={OrderFav}
        options={setTxtAndStyle({txt:"Order Favorites"})}
      />
      <Stack.Screen
        name="StoreList"
        component={StoreList}
        options={setTxtAndStyle({txt:"Stores"})}
      />
      <Stack.Screen
        name="StoreInfo"
        component={StoreInfo}
        options={setTxtAndStyle({txt:"About store"})}
      />
      <Stack.Screen
        name="StoreMenu"
        component={MenuTopNavi}
        options={setTxtAndStyle({txt:"Menu", 
          other: {
            headerTintColor: '#fff',
          }
        })}
      />
      <Stack.Screen 
        name="Reward" 
        component={Reward}
        options={setTxtAndStyle({txt:"Reward"})}
      />
      <Stack.Screen 
        name="Frequency" 
        component={Frequency}
        options={setTxtAndStyle({txt:"Frequency"})}
      />
      <Stack.Screen 
        name="Coupon" 
        component={CouponTopNavi}
        options={setTxtAndStyle({txt:"Coupon"})}
      />
      <Stack.Screen 
        name="Stores" 
        component={StoreTopNavi}
        options={setTxtAndStyle({txt:"Stores"})}
      />
      <Stack.Screen 
        name="History" 
        component={HistoryTopNavi}
        options={setTxtAndStyle({txt:"History"})}
      />
      <Stack.Screen 
        name="Cart" 
        component={Cart}
        options={setTxtAndStyle({txt:"Cart"})}
      />
      <Stack.Screen 
        name="PayDetail" 
        component={PayDetail}
        options={setTxtAndStyle({txt:"주문상세"})}
      />
      <Stack.Screen
        name="PayPage"
        component={PayPage}
        options={setTxtAndStyle({txt:"Payment"})}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentResult"
        component={PaymentResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Notice" 
        component={Notice}
        options={setTxtAndStyle({txt:"Notice"})}
      />
      <Stack.Screen 
        name="NoticeDetail" 
        component={NoticeDetail}
        options={setTxtAndStyle({txt:"Notice"})}
      />
      <Stack.Screen 
        name="CustomerCenter" 
        component={CustomerCenter}
        options={setTxtAndStyle({txt:"Customer Center"})}
      />
      <Stack.Screen 
        name="FAQ" 
        component={FAQ}
        options={setTxtAndStyle({txt:"자주하는질문"})}
      />
      <Stack.Screen 
        name="Ask" 
        component={Ask}
        options={setTxtAndStyle({txt:"1:1 Questions"})}
      />
      <Stack.Screen 
        name="FCMSetting" 
        component={FCMSetting}
        options={setTxtAndStyle({txt:"알림설정", kr: true})}
      />
      <Stack.Screen 
        name="Terms" 
        component={Terms}
        options={setTxtAndStyle({txt:"이용약관", kr: true})}
      />
      <Stack.Screen 
        name="PrivacyPolicy" 
        component={PrivacyPolicy}
        options={setTxtAndStyle({txt:"개인정보처리방침", kr: true})}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
