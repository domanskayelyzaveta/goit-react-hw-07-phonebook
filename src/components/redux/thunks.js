import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchPhoneBook } from 'service/Api';

export const requestPhoneBookThunk = createAsyncThunk(
  'phoneBook/fetchPhoneBook',
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
  async (newContact, thunkAPI) => {
    try {
      const response = await addContact(newContact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestDeleteContactThunk = createAsyncThunk(
  'phoneBookThunk/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await deleteContact(contactId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
