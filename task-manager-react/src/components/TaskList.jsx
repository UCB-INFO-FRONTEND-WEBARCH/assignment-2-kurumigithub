import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="task-list">
        {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;