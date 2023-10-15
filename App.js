import React, { useCallback, useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, WelcomeScreen } from './src/screens';
import store from './src/store/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'VTB Group Bold': require('./assets/fonts/VTB_Group_Bold.otf'),
    'VTB Group': require('./assets/fonts/VTB_Group_Book.otf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} onLayoutRootView={onLayoutRootView}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
