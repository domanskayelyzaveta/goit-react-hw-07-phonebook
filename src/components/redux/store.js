import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBookReducer';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
// export const persistor = persistStore(store);
