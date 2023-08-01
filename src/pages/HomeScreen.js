import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import {Context} from '../context/BlogContext';

export default function HomeScreen() {
  const {state, AddBlogs} = useContext(Context);

  return (
    <View>
      <Button title='Ekle' onPress={AddBlogs} />
      <FlatList 
        data={state}
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
