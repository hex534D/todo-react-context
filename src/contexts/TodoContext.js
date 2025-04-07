import { createContext, use } from 'react';

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id, completed) => {},
});

export const useTodo = () => {
  return use(TodoContext);
};

// export const TodoProvider = TodoContext.TodoProvider;
