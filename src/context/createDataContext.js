import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundsActions = {};
    for (let index in actions) {
      boundsActions[index] = actions[index](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundsActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
