export const selectFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectName = state => state.contacts.inputs.name;
export const selectNumber = state => state.contacts.inputs.number;
