import React from 'react';

const TodoForm = () => {
  const add = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border-black/10 duration-150 px-3 py-1.5 bg-white/20 rounded-l-lg outline-none"
      />
      <button
        type="submit"
        className="rounded-r-lg bg-green-600 px-4 py-1 text-white"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
