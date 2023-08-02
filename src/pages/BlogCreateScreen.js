import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CreateBlog from '../components/CreateBlog';
import {Context} from '../context/BlogContext';

export default function BlogCreateScreen({navigation}) {
  const {AddBlogs} = useContext(Context);
  return (
    <CreateBlog
      onSubmit={(title, content) => {
        AddBlogs(title, content, () => navigation.navigate('Home'));
      }}
      isEditable={false}
    />
  );
}

const styles = StyleSheet.create({});
