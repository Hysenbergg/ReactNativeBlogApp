import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './pages/HomeScreen';
import BlogCreateScreen from './pages/BlogCreateScreen';
import {Provider} from './context/BlogContext';
import BlogDetailScreen from './pages/BlogDetailScreen';
import EditBlogScreen from './pages/EditBlogScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          title: 'Blog Apps'
        }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('BlogCreate')}>
                  <Icon name="add-circle-outline" size={30} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="BlogCreate" component={BlogCreateScreen} />
          <Stack.Screen
            name="BlogDetail"
            component={BlogDetailScreen}
            options={({navigation, route}) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditBlog', {id: route.params.id})}>
                  <Icon name="pencil-sharp" size={30} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="EditBlog" component={EditBlogScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
