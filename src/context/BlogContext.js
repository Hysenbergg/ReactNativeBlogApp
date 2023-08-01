import React, {useState, useReducer} from 'react';

const BlogContext = React.createContext();

// Reducer yapısı içerisine kullanacağımız işlemleri yerleştiriyoruz.
const BlogReducer = (state, action) => {
    switch(action.type){
        case 'add_blog_post':
            return [...state, {title: 'Deneme Dersi'}];
        default:
            return state;
    }
}

export const BlogProvider = ({children}) => {
  const [blogs, dispatch] = useReducer(BlogReducer, [
    {title: 'React Native'},
    {title: 'React'},
    {title: 'Javascript'},
  ]);

  const AddBlogs = () => {
    dispatch({type: 'add_blog_post'});
  };

  return (
    <BlogContext.Provider value={{data: blogs, AddBlogs}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
