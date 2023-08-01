import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import BlogContext from '../context/BlogContext';

export default function HomeScreen() {
  const value = useContext(BlogContext);
  
  return (
    <View>
      <FlatList 
        data={value}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => {
          return(
            <View>
              <Text> {item.title} </Text>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
