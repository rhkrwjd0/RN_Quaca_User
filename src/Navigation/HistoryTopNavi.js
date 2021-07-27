import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { StyleSheet, Text } from 'react-native';
import PayHistory from '../Screen/Pay/PayHistory';
import StyleCommon from '../Style/StyleCommon';

const Tab = createMaterialTopTabNavigator();
const styleCommon = StyleSheet.create(StyleCommon);
const HistoryTopNavi = ({navigation, route}) => {
  const arrTabMenu = [
    {name: "1주일", component: PayHistory, period: "week"},
    {name: "1개월", component: PayHistory, period: "month"},
    {name: "기간선택", component: PayHistory, period: "term"}
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
          tabMenu => (<Tab.Screen name={tabMenu.name} component={tabMenu.component} key={arrTabMenu.indexOf(tabMenu)} initialParams={{ orderHistoryPeriod: tabMenu.period }} options ={{
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

export default HistoryTopNavi;
