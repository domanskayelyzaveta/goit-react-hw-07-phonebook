import { createSlice } from '@reduxjs/toolkit';
import { fetchPhoneBook } from 'service/Api';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPhoneBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPhoneBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchPhoneBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload]; //// action.payload ???
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }, //підписка на конкретний статус санки або екшину,
});

export const phoneBookReducer = phoneBookSlice.reducer;
export const { deleteContact, addContact, onFilterChange } =
  phoneBookSlice.actions;
