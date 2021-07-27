import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Image} from 'react-native';

import Home from '../Screen/Main/Home';
import PayHistory from '../Screen/Pay/PayHistory';
import Cart from '../Screen/Cart/Cart';
import Coupon from '../Screen/Coupon';

const Tab = createMaterialTopTabNavigator();

const BottomNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      backBehavior="initialRoute"
      detachPreviousScreen={true}
      tabBarOptions={{
        labelStyle: {fontSize: 10, margin: 0},
        showLabel: true,
        keyboardHidesTabBar: true,
        showIcon: true,
        activeTintColor: '#CD0039',
        inactiveTintColor: '#B5B5B5',
        indicatorStyle: {
          backgroundColor: null,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconSrc;
          if (route.name === '홈') {
            iconSrc = focused
              ? require('../../assets/img/main/1_on.png')
              : require('../../assets/img/main/1_off.png');
          } else if (route.name === '주문내역') {
            iconSrc = focused
              ? require('../../assets/img/main/2_on.png')
              : require('../../assets/img/main/2_off.png');
          } else if (route.name === '장바구니') {
            iconSrc = focused
              ? require('../../assets/img/main/3_on.png')
              : require('../../assets/img/main/3_off.png');
          } else if (route.name === '쿠폰') {
            iconSrc = focused
              ? require('../../assets/img/main/4_on.png')
              : require('../../assets/img/main/4_off.png');
          }
          return (
            <Image
              source={iconSrc}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
          );
        },
      })}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="주문내역" component={PayHistory} />
      <Tab.Screen name="장바구니" component={Cart} />
      <Tab.Screen name="쿠폰" component={Coupon} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
