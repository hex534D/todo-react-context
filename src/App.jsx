import React, { useState, useEffect } from 'react';

import './App.css';
import { TodoContext } from './contexts';
import { TodoForm, TodoItem } from './components';
import { createTodo } from './services/todos';

function App() {
  const API_URL = 'http://localhost:3001/api/v1/todos';
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
    const newTodo = await createTodo(todo);
    console.log(newTodo);
  };

  const updateTodo = (todo, id) => {

  };

  const deleteTodo = (id) => {

  };

  const toggleComplete = () => {

  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((resp) => setTodos(resp?.data?.todos));
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
              <div key={todo.id} className='w-full mb-3'>
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
