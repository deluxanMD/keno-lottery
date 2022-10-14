import React from 'react';
import {rootStore, StoreProvider} from './src/store';
import BettingScreen from './src/screens/BettingScreen';

const App = () => {
  return (
    <StoreProvider value={rootStore}>
      <BettingScreen />
    </StoreProvider>
  );
};

export default App;
