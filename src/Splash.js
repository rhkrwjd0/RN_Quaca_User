import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { WithLocalSvg } from 'react-native-svg';
import Logo from '../assets/img/logo_halo_splash.svg';
import Styles from './Style/Style';
import StyleCommon from './Style/StyleCommon';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const Splash = () => {
  return (
    <SafeAreaView>
      <View style={[styleCommon.pageVerticalCenter, styles.splashWrap]}>
        <WithLocalSvg style={styles.splashLogo} asset={Logo} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
