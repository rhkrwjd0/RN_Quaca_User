import React, {useState} from 'react';
import { Animated, TouchableHighlight, StyleSheet, Text, View, Button } from 'react-native';
import StoreSearch from '../Screen/Store/StoreSearch';
import StoreFavorite from '../Screen/Store/StoreFavorite';
import StyleCommon from '../Style/StyleCommon';
import { createTransition, FlipX, SlideLeft, Fade, SlideUp } from 'react-native-transition';

const Transition = createTransition(Fade);
const styleCommon = StyleSheet.create(StyleCommon);

const StoreTopNavi = ({navigation, route}) => {
  const arrTabMenu = [
    {name: "Search", component: "StoreSearch"},
    {name: "Favorite stores", component: "StoreFavorite"},
  ];
  const [tabActive, setTabActive] = useState(arrTabMenu[0]);
  const { name, component } = tabActive;

  function SelectComponent(component) {
    switch (component) {
      case "StoreSearch":
        return <StoreSearch />
      case "StoreFavorite":
        return <StoreFavorite />
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
      <View style={styleCommon.tab2Wrap}>
        <Text style={styleCommon.tab2MenuActive}>{name}</Text>
        {
          arrTabMenu.map(function(tabMenu, index) {
            if(tabMenu.name !== name) {
              return (
              <TouchableHighlight underlayColor="" key={index} onPress={() => {
                  CompoSwitch(tabMenu.component);
                  setTabActive(arrTabMenu[index]);
                  }
                }>
                <Text style={styleCommon.tab2Menu}>{tabMenu.name}</Text>
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

export default StoreTopNavi;
