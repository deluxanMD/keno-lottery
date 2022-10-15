import {Text} from '@rneui/themed';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text h2 style={{textAlign: 'center'}}>
        Bet successfully placed
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

export default ResultScreen;
