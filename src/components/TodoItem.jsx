import React, { useState } from 'react';

import { useTodo } from '../contexts';

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();
  const [todoName, setTodoName] = useState(todo?.name);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const editTodo = () => {
    updateTodo({
      name: todoName,
      id: todo?.id,
      completed: todo?.completed,
    });
    setIsTodoEditable(false)
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id, todo?.completed);
  };

  return (
    <div
      className={`flex border border-black/10 w-full rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo?.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        value={todoName}
        onChange={(e) => {
          setTodoName(e.target.value);
        }}
        readOnly={!isTodoEditable}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable
            ? 'border-black/10 px-2'
            : 'border-transparent'
        }`}
      />
      <button
        onClick={() => {
          if (isTodoEditable) editTodo();
          else setIsTodoEditable((prev) => !prev);
        }}
        className="cursor-pointer inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      <button
        onClick={() => deleteTodo(todo?.id)}
        className="cursor-pointer inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
