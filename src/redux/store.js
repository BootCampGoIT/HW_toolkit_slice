import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from './contactsSlice/contactsSlice';
const store = configureStore(contactsSlice)

export default store;