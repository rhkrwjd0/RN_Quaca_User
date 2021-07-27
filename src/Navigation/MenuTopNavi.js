import React, {useState}  from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createTransition, FlipX, SlideLeft, Fade, SlideUp } from 'react-native-transition';
import StoreMenu from '../Screen/Store/StoreMenu';
import StyleCommon from '../Style/StyleCommon';
import Styles from '../Style/Style';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);
const Tab = createMaterialTopTabNavigator();
const Transition = createTransition(Fade);

const TopNavigator = ({navigation, route}) => {
  const arrTabMenu = [
    {name: "Coffee", component: "StoreMenu1"},
    {name: "Bread", component: "StoreMenu2"},
    {name: "Goods", component: "StoreMenu3"},
  ];
  const [tabActive, setTabActive] = useState(arrTabMenu[0]);
  const { name, component } = tabActive;

  function SelectComponent(component) {
    switch (component) {
      case "StoreMenu1":
        return <StoreMenu category='drink' storeId={route.params.storeId} />
      case "StoreMenu2":
        return <StoreMenu category='bread' storeId={route.params.storeId} />
      case "StoreMenu3":
        return <StoreMenu category='goods' storeId={route.params.storeId} />
    }
  }

  function CompoSwitch(component) {
    Transition.show(
      <>
        {SelectComponent(component)}
      </>
    );
  }

  return (
    <View style={styleCommon.pageBg}>
      <View style={styleCommon.tab4Wrap}>
        <Text style={styleCommon.tab4MenuActive}>{name}</Text>
        {
          arrTabMenu.map(function(tabMenu, index) {
            if(tabMenu.name !== name) {
              return (
              <TouchableHighlight underlayColor="" key={index} onPress={() => {
                  CompoSwitch(tabMenu.component);
                  setTabActive(arrTabMenu[index]);
                  }
                }>
                <Text style={styleCommon.tab4Menu}>{tabMenu.name}</Text>
              </TouchableHighlight>
              )
            }
          })
        }
      </View>
      <Transition>
        {SelectComponent(component)}
      </Transition>
    </View>
  );
};

export default TopNavigator;
