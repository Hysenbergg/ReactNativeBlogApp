import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({navigation}) {
  const {state, deleteBlogs} = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{marginTop: 7}}
              onPress={() => navigation.navigate('BlogDetail', {id: item.id})}>
              <View style={styles.card_container}>
                <Text style={styles.car_title}> {item.title} </Text>
                <TouchableOpacity onPress={() => deleteBlogs(item.id)}>
                  <Icon
                    style={styles.card_icon_btn}
                    name="trash-can-outline"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    marginVertical: 5,
    paddingVertical: 5,
  },
  car_title: {flex: 1, color: 'black', fontSize: 18},
  card_icon_btn: {
    marginRight: 10,
    backgroundColor: 'lightgray',
    padding: 5,
  },
  empty_text: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 21,
    color: 'black',
  },
});
