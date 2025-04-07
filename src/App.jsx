import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './App.css';
import { TodoContext } from './contexts';
import { API_URL } from './utilities/constants';
import { TodoForm, TodoItem } from './components';

import {
  createTodoService,
  deleteTodoService,
  toggleCompleteService,
  updateTodoService,
} from './services/todos';

function App() {
  const API_URL = 'http://localhost:3001/api/v1/todos';
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
    const newTodo = await createTodoService(todo);
    setTodos((prev) => [{ ...newTodo?.data.todo }, ...prev]);
  };

  const updateTodo = async (todo) => {
    const resp = await updateTodoService(todo);
    if (resp?.code === 200)
      setTodos(
        todos.map((todoData) =>
          todoData?.id === todo.id ? resp?.data?.todo : todoData
        )
      );
  };

  const deleteTodo = async (id) => {
    const resp = await deleteTodoService(id);
    if (
      resp?.code === 200 &&
      resp?.message === 'Todo successfully deleted.'
    )
      setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = async (id, completed) => {
    const resp = await toggleCompleteService(id, completed);
    if (resp?.code === 200)
      setTodos(
        todos.map((todoData) =>
          todoData?.id === id ? resp?.data?.todo : todoData
        )
      );
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data: respData } = await axios.get(API_URL);
        setTodos(respData?.data?.todos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      <div className="min-h-screen py-8 bg-[#172842]">
        <div className="w-full mx-auto max-w-2xl shadow-md rounded px-4 py-3 text-white">
          <h1 className="text-center font-bold text-2xl mb-6 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-3">
            <TodoForm />
          </div>
          <div className="flex flex-wrap">
            {todos?.map((todo) => (
              <div key={todo.id} className="w-full mb-3">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContext>
  );
}

export default App;
