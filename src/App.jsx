import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks ?? [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "active":
        return !task.done;

      case "completed":
        return task.done;

      default:
        return true;
    }
  });

  const remainingTasks = tasks.filter((task) => !task.done).length;

  const clearCompleted = () => {
    const activeTasks = tasks.filter((task) => !task.done);

    setTasks(activeTasks);
  };

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

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <Header />

      <TodoInput input={input} setInput={setInput} addTask={addTask} />

      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
      <div className="footer">
        <p>{remainingTasks} tâche(s) restante(s)</p>

        <div className="filters">
          <button onClick={() => setFilter("all")}>All</button>

          <button onClick={() => setFilter("active")}>Active</button>

          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>

        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
}

export default App;
