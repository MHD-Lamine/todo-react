import { useState } from "react";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTasks([...tasks, newTask]);

    setInput("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <Header />

      <TodoInput input={input} setInput={setInput} addTask={addTask} />

      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
