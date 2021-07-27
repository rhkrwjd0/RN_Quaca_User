import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Reward from '../Screen/Coupon/Reward';
import RewardHistory from '../Screen/Coupon/RewardHistory';


const Tab = createMaterialTopTabNavigator();

const RewardTopNavi = ({navigation, route}) => {
  return (
    <Tab.Navigator
      initialRouteName="스탬프"
      tabBarOptions={{
        activeTintColor: '#A60030',
        inactiveTintColor: '#B5B5B5',
        indicatorStyle: {
          backgroundColor: null,
        },
        labelStyle: {
          fontWeight: '700',
        },
      }}>
      <Tab.Screen name="마이리워드" component={Reward} />
      <Tab.Screen name="달 히스토리" component={RewardHistory} />
    </Tab.Navigator>
  );
};

export default RewardTopNavi;
