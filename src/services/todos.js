import axios from 'axios';
import { API_URL } from '../utilities/constants';

export const getAllTodos = async () => {
  const { data: respData } = await axios.get(API_URL);
  return respData;
};

export const createTodoService = async (todo) => {
  const { data: respData } = await axios.post(API_URL, todo);
  return respData;
};

export const updateTodoService = async (todo) => {
  const { data: respData } = await axios.put(API_URL, todo);
  return respData;
};

export const deleteTodoService = async (id) => {
  const { data: respData } = await axios.delete(`${API_URL}/${id}`);
  return respData;
};

export const toggleCompleteService = async (id, completed) => {
  const { data: respData } = await axios.patch(API_URL, { id, completed });
  return respData;
};
