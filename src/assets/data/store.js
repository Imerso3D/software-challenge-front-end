import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';

import todo from "./reducers/todo";

function configureStore(initialState) {
  const config = {
    key: 'root',
    storage,
  }

  const reducer = persistReducer(config, todo);
  const store = createStore(reducer, initialState);
  const persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore