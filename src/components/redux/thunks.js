import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchPhoneBook } from 'service/Api';

export const requestPhoneBookThunk = createAsyncThunk(
  'phoneBookThunk/all',
  async (_, thunkAPI) => {
    try {
      const response = await fetchPhoneBook();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestAddContactThunk = createAsyncThunk(
  'phoneBookThunk/addContact',
  async (_, thunkAPI) => {
    try {
      const response = await addContact();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestDeleteContactThunk = createAsyncThunk(
  'phoneBookThunk/deleteContact',
  async (_, thunkAPI) => {
    try {
      const response = await deleteContact();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
