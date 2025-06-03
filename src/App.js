import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          📝 My Todo List
        </h1>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            className="flex-grow px-4 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="What do you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition-all"
          >
            <FaPlus />
            Add
          </button>
        </div>
        <ul className="space-y-3 max-h-[400px] overflow-y-auto">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex justify-between items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                todo.completed
                  ? "bg-green-100 border-l-4 border-green-500"
                  : "bg-gray-100 border-l-4 border-indigo-400"
              }`}
            >
              <span
                onClick={() => toggleTask(index)}
                className={`flex-grow cursor-pointer select-none ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-4">
            No tasks added yet. Start by typing above!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
