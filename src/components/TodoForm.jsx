import React, { useState } from 'react';

import { useTodo } from '../contexts';

const TodoForm = () => {
  const [name, setName] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!name) return;

    addTodo({ name });
    setName('');
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border-black/10 duration-150 px-3 py-1.5 bg-white/20 rounded-l-lg outline-none"
      />
      <button
        type="submit"
        className="rounded-r-lg bg-green-600 px-4 py-1 text-white cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
