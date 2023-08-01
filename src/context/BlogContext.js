import React from 'react';

export const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const blogArray= [{title: 'React Native'}, {title: 'React'}, {title: 'Javascript'}];

    return(
        <BlogContext.Provider value={blogArray}>
            {children}
        </BlogContext.Provider>
    )
} 

export default BlogContext;