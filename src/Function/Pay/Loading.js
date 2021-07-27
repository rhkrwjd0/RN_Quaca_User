import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// 결제창 뜨기 전 로딩페이지 (디자인 되면 변경하기)
function Loading() {
  return (
    <View style={styles.container}>
      <Text>잠시만 기다려주세요...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Loading;
