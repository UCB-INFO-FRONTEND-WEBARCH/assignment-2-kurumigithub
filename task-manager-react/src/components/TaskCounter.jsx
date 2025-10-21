function TaskCounter({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

    return ( 
        <div className="main-header__status">
            <img src="../../src/assets/check_icon.png" alt="check-mark" className="check-icon" />
            <span>{totalTasks} / {completedTasks}</span>
        </div>
    );
}

export default TaskCounter;