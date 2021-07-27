import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Screen/Main/Login';
import Join from '../Screen/Main/Join';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function LoginStack({navigation, route}) {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Join"
        component={Join}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
