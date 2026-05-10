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

  return (
    <div className="app">
      <Header />

      <TodoInput input={input} setInput={setInput} addTask={addTask} />

      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
