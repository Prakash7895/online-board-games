import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tikadi from './tikadi';

let middlewares: any[] = [];

if (!__DEV__) {
  middlewares = [logger];
}

export const store = configureStore({
  reducer: {
    tikadi: tikadi,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(middlewares);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
