import {createContext} from 'react';

const StoreContext = createContext({
  storeInfo: '',
  setStoreInfo: () => {},
  menu: '',
  setMenu: () => {},
});

export default StoreContext;
