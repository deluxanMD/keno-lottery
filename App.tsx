import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {rootStore, StoreProvider} from './src/store';
import BettingScreen from './src/screens/BettingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider value={rootStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={BettingScreen}
              options={{title: 'Keno Lottery'}}
            />
            <Stack.Screen name="Result" component={ResultScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
