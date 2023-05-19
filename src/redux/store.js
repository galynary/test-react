import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './fellowers/contactSlice';
import { filterReducer } from './fellowers/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
