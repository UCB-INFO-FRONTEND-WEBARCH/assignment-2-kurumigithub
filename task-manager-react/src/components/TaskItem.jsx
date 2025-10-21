function TaskItem({task, onToggle, onDelete}) {

    const taskClass = task.completed ? ' completed' : '';

    return (
        <li className={`tasks${taskClass}`}>
            <input type="checkbox" id={`task${task.id}`} checked={task.completed} 
                className="custom-checkbox" name="task_group" 
                onChange={() => onToggle(task.id)}
            />
            <label htmlFor={`task${task.id}`} className="custom-label"></label>
            <span>{task.text}</span>

            <button className="delete-btn" onClick={() => onDelete(task.id)}>x</button>
        </li> 
    )
}

export default TaskItem;