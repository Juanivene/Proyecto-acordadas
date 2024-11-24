import { configureStore } from '@reduxjs/toolkit';

import getAgreementSelectedReducer from './agreementSlice';
import modalReducer from './modalSlice';
import getAgreementsFiltersReducer from './slice';

const store = configureStore({
  reducer: {
    getAgreementsFilters: getAgreementsFiltersReducer,
    modal: modalReducer,
    getAgreementSelected: getAgreementSelectedReducer,
  },
});

export default store;
