import { createSlice, nanoid } from '@reduxjs/toolkit';

const initState = {
  contacts: [],
  isLoading: false,
  inputs: {
    name: '',
    number: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.contacts.unshift(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    setContactsAction: (state, action) => {
      state.contacts = action.payload;
    },
    deleteContactAction: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    inputHandlerAction: (state, action) => {
      const { name, value } = action.payload;
      state.inputs[name] = value;
      // switch (name) {
      //   case 'name':
      //     state.inputs.name = value;
      //     break;
      //   case 'number':
      //     state.inputs.number = value;
      //     break;
      //   default:
      //     break;
      // }
    },
  },
});

export const {
  addContactAction,
  setContactsAction,
  deleteContactAction,
  inputHandlerAction,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
