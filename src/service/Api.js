import axios from 'axios';

const BASE_URL = 'https://652bc6f0d0d1df5273eeb261.mockapi.io';
const $instance = axios.create({ baseURL: BASE_URL });

export const fetchPhoneBook = async () => {
  const { data } = await $instance.get('/contacts');
  return data;
};
export const addContact = async newContact => {
  const { data } = await $instance.post('/contacts', newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await $instance.delete(`/contacts/${id}`);
  return data;
};
