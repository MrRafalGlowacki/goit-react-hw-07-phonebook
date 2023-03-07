const { createSlice } = require('@reduxjs/toolkit');

const initState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initState,
  reducers: {
    setFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
