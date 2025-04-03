import { createContext, use } from 'react';

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'message',
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return use(TodoContext);
};

// export const TodoProvider = TodoContext.TodoProvider;
