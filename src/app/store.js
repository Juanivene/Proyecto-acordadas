import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // surfaces: surfacesSlice,
  // [addressApiSlice.reducerPath]: addressApiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat
      // addressApiSlice.middleware
      (),
  devTools: import.meta.env.MODE === 'development',
});

export default store;
