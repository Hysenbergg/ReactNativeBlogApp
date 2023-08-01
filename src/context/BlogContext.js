import createDataContext from './createDataContext';

// Reducer yapısı içerisine kullanacağımız işlemleri yerleştiriyoruz.
const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog_post':
      return [...state, {title: 'Deneme Dersi'}];
    default:
      return state;
  }
};
const AddBlogs = (dispatch) => {
  return () => {
    dispatch({type: 'add_blog_post'});
  };
};

export const {Context, Provider} = createDataContext(
  BlogReducer,
  {AddBlogs},
  [],
);
