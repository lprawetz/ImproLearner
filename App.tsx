import React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/HomePage';
import ChordsPage from './src/components/ChordsPage';
import ScalesPage from './src/components/ScalesPage';
import ProgressionPage from './src/components/ProgressionPage';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Chords: undefined;
  Scales: undefined;
  Progression: undefined;
} & ParamListBase;

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Chords" component={ChordsPage} />
          <Stack.Screen name="Scales" component={ScalesPage} />
          <Stack.Screen name="Progression" component={ProgressionPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;