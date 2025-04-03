import React, { useState } from 'react';

const TodoItem = ({ todo }) => {
  console.log(todo);
  
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  return (
    <div
      className={`flex border border-black/10 w-full rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input type="checkbox" className="cursor-pointer" />
      <input
        type="text"
        value={todo?.name}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable
            ? 'border-black/10 px-2'
            : 'border-transparent'
        }`}
      />
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50">
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
