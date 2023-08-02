import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import CreateBlog from '../components/CreateBlog';
import {Context} from '../context/BlogContext';

export default function EditBlogScreen({navigation, route}) {
  const {state, EditBlogs} = useContext(Context);
  const id = route.params.id;
  const selectedBlog = state.find(blogPost => blogPost.id === route.params.id);

  return (
    <CreateBlog
    onSubmit={(title, content) => {
      EditBlogs(id, title, content, () => navigation.pop());
    }}  
    initialValue={{title: selectedBlog.title, content: selectedBlog.content}}
      isEditable={true}
      
    />
  );
}

const styles = StyleSheet.create({});
