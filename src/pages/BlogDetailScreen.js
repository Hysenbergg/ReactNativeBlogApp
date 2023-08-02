import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context} from '../context/BlogContext';

export default function BlogDetailScreen({route}) {
  const {state} = useContext(Context);
  const selectedBlog = state.find(blogPost => blogPost.id === route.params.id);

  return (
    <View style={styles.container}>
      <View
        style={styles.inner_container}>
        <Text
          style={styles.card_title}>
          Başlık
        </Text>
        <Text style={styles.card_blog_title}>{selectedBlog.title}</Text>
      </View>
      <View style={[styles.inner_container, {width: 350}]}>
        <Text style={styles.card_title}>İçerik</Text>
        <Text style={[styles.card_blog_title, {fontSize: 15}]}>{selectedBlog.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {margin: 10, alignItems: 'center'},
  inner_container: {
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: 150,
    borderRadius: 15,
  },
  card_title: {
    fontSize: 21,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  card_blog_title: {color: 'black', fontSize: 18}
});
