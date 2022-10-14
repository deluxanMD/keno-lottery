import React from 'react';
import {View, Text} from 'react-native';
import {useStore} from '../store';

const BettingScreen = () => {
  const {
    betting: {selectedNumbers},
  } = useStore();

  return (
    <View>
      <Text>BettingScreen</Text>
    </View>
  );
};

export default BettingScreen;
