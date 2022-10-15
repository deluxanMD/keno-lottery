import {Text} from '@rneui/themed';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text h2>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResultScreen;
