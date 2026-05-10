function TodoInput({ input, setInput, addTask }) {
  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>Ajouter</button>
    </div>
  );
}

export default TodoInput;
