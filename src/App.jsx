import './App.css';
import { TodoForm, TodoItem } from './components';

function App() {
  return (
    <>
      <div className="min-h-screen py-8 bg-[#172842]">
        <div className="w-full mx-auto max-w-2xl shadow-md rounded px-4 py-3 text-white">
          <h1 className="text-center font-bold text-2xl mb-6 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-3">
            <TodoForm />
          </div>
          <div className="flex flex-wrap">
            <TodoItem todo={{completed: false}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
