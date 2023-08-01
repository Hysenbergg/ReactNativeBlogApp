import React from 'react';

export const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  const [blogs, setBlogs] = React.useState([
    {title: 'React Native'},
    {title: 'React'},
    {title: 'Javascript'},
  ]);

  const AddBlogs = () => {
    setBlogs([...blogs, {title: 'Python'}]);
  }

  return (
    <BlogContext.Provider value={{ data: blogs, AddBlogs}}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
