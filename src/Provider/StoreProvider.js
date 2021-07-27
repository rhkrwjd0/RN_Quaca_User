import React, {useState} from 'react';
import StoreContext from './StoreContext';

const StoreProvider = ({children}) => {
  const setStoreInfo = (props) => {
    setText((prevState) => {
      return {
        ...prevState,
        storeInfo: props.storeInfo,
      };
    });
  };
  const setMenu = (props) => {
    setText((prevState) => {
      return {
        ...prevState,
        menu: props.menu,
      };
    });
  };

  const initialState = {
    storeInfo: '',
    setStoreInfo,
    menu: '',
    setMenu,
  };

  const [text, setText] = useState(initialState);
  return <StoreContext.Provider value={text}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
