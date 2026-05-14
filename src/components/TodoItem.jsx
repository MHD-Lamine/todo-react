import PropTypes from "prop-types";

function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <li>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />
        <span className={task.done ? "done" : ""}>
          {task.text}
        </span>
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

    done: PropTypes.bool.isRequired

  }).isRequired,

  deleteTask: PropTypes.func.isRequired,

  toggleTask: PropTypes.func.isRequired
};