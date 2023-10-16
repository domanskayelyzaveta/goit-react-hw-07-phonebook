import { createSlice } from '@reduxjs/toolkit';
import {
  requestAddContactThunk,
  requestDeleteContactThunk,
  requestPhoneBookThunk,
} from './thunks';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    onFilterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(requestPhoneBookThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestPhoneBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestPhoneBookThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestAddContactThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(requestAddContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(requestAddContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestDeleteContactThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestDeleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(requestDeleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }, //підписка на конкретний статус санки або екшину,
});

export const phoneBookReducer = phoneBookSlice.reducer;
export const { onFilterChange } = phoneBookSlice.actions;
