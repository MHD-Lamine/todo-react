import PropTypes from "prop-types";
import { useState } from "react";

function TodoItem({ task, deleteTask, toggleTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editText, setEditText] = useState(task.text);

  const saveEdit = () => {
    if (!editText.trim()) return;

    updateTask(task.id, editText.trim());

    setIsEditing(false);
  };

  return (
    <li>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveEdit();
              }

              if (e.key === "Escape") {
                setEditText(task.text);

                setIsEditing(false);
              }
            }}
            autoFocus
          />
        ) : (
          <button
            type="button"
            className={task.done ? "done task-text" : "task-text"}
            onDoubleClick={() => setIsEditing(true)}
          >
            {task.text}
          </button>
        )}
      </div>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,

    text: PropTypes.string.isRequired,

    done: PropTypes.bool.isRequired,
  }).isRequired,

  deleteTask: PropTypes.func.isRequired,

  toggleTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
};
