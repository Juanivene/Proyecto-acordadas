import { configureStore } from '@reduxjs/toolkit';

import getAgreementsFiltersReducer from './slice';

const store = configureStore({
  reducer: {
    getAgreementsFilters: getAgreementsFiltersReducer,
  },
});

export default store;
