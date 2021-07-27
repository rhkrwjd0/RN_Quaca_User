import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import {DrawerContent} from './DrawerContent';
import HomeStack from './HomeStack';
import Styles from '../Style/Style';

const styles = StyleSheet.create(Styles);
const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {

  return (
    <Drawer.Navigator
      drawerStyle={styles.drawer}
      screenOptions={{swipeEnabled: false}}
      drawerContent={(props) => <DrawerContent {...props} navigation={navigation} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
