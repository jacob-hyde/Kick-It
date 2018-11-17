import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './Reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const middleware = [thunk, createLogger()];

// const Store = createStore(
//   reducers,
//   undefined,
//   compose(applyMiddleware(...middleware))
// );

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, undefined, compose(applyMiddleware(...middleware)))
  let persistor = persistStore(store)
  return { store, persistor }
}
