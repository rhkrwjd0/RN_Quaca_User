import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { StyleSheet, Text } from 'react-native';
import Coupon from '../Screen/Coupon/Coupon';
import CouponHistory from '../Screen/Coupon/CouponHistory';
import StyleCommon from '../Style/StyleCommon';

const Tab = createMaterialTopTabNavigator();
const styleCommon = StyleSheet.create(StyleCommon);
const CouponTopNavi = ({navigation, route}) => {
  const arrTabMenu = [
    {name: "사용가능한 쿠폰", component: Coupon},
    {name: "쿠폰 히스토리", component: CouponHistory}
  ];

  return (
    <Tab.Navigator 
      style={styleCommon.pageBg}
      tabBarOptions={{
        pressColor : styleCommon.tabPressBgTransp.backgroundColor,
        indicatorStyle: styleCommon.tab1ActiveBg,
        style: styleCommon.tab1Wrap,
        tabStyle: styleCommon.tab1Menu,
      }}>
      
      {
        arrTabMenu.map(
          tabMenu => (<Tab.Screen name={tabMenu.name} component={tabMenu.component} key={arrTabMenu.indexOf(tabMenu)} options={{
            tabBarLabel: ({ focused }) => {
              return (
                <Text style={{ ...styleCommon.tab1Txt, ...(focused ? styleCommon.tab1ActiveTxt : {}) }}>{tabMenu.name}</Text>
              )
            }
          }} />)
        )
      }
      
    </Tab.Navigator>
  );
};

export default CouponTopNavi;
