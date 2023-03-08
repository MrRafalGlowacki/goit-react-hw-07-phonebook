import { createSlice } from '@reduxjs/toolkit';
import {
  addContactAction,
  deleteContactAction,
  fetchContactsAction,
} from './operations';

const initState = {
  contacts: [],
  isLoading: false,
  inputs: {
    name: '',
    number: '',
  },
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  reducers: {
    inputHandlerAction: (state, action) => {
      const { name, value } = action.payload;
      state.inputs[name] = value;
    },
  },
  extraReducers: {
    //fetchContacts
    [fetchContactsAction.pending]: handlePending,
    [fetchContactsAction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContactsAction.rejected]: handleRejected,

    //addContact
    [addContactAction.pending]: handlePending,
    [addContactAction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.unshift(action.payload);
    },
    [addContactAction.rejected]: handleRejected,

    //deleteContacts
    [deleteContactAction.pending]: handlePending,
    [deleteContactAction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContactAction.rejected]: handleRejected,
  },
});

export const { inputHandlerAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
