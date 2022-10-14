import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {rootStore, StoreProvider} from './src/store';
import BettingScreen from './src/screens/BettingScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider value={rootStore}>
        <BettingScreen />
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
