import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function CreateBlog({onSubmit, initialValue, isEditable}) {
  const [title, setTitle] = useState(initialValue ? initialValue.title : '');
  const [content, setContent] = useState(
    initialValue ? initialValue.content : '',
  );

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.input_title}>Başlık: </Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.input_title}>İçerik: </Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={text => setContent(text)}
          multiline={true}
        />
      </View>
      <TouchableOpacity
        style={styles.btn_container}
        onPress={() => onSubmit(title, content)}>
        {isEditable ? (
          <Text style={styles.btn_title}>Güncelle</Text>
        ) : (
          <Text style={styles.btn_title}>Kaydet</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {margin: 10},
  inner_container: {marginBottom: 10, marginTop: 10},
  input_title: {fontSize: 18, color: 'black'},
  input: {
    paddingHorizontal: 15,
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 15,
    fontSize: 18,
  },
  btn_container: {
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'red',
    padding: 10,
    width: 150,
    borderRadius: 15,
  },
  btn_title: {color: 'white', fontSize: 18},
});
