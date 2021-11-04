import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import usernameReducer from 'redux/username';
import favoritesReducer from 'redux/favorites';

const reducers = combineReducers({
  username: usernameReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof reducers>;

export const ReduxStore: React.FC<React.ReactNode> = ({ children }) => {
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['username'],
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
