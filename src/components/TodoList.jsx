import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;

TodoList.propTypes = {

  tasks: PropTypes.arrayOf(

    PropTypes.shape({

      id: PropTypes.number.isRequired,

      text: PropTypes.string.isRequired,

      done: PropTypes.bool.isRequired

    })

  ).isRequired,

  deleteTask: PropTypes.func.isRequired,

  toggleTask: PropTypes.func.isRequired
};
