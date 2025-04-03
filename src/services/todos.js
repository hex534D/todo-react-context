const API_URL = 'http://localhost:3001/api/v1/todos';

export const createTodo = async (todo) => {
  const todos = (
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
  ).json();

  return todos;
};
