import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './pages/HomeScreen';
import BlogCreateScreen from './pages/BlogCreateScreen';
import {Provider} from './context/BlogContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BlogCreate" component={BlogCreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
