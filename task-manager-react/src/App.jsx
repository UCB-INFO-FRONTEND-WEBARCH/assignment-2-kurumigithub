import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter'

import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all'); // all, active, completed

  const addTask = (taskText) => {
    // add new task to state
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const toggleTask = (id) => {
    // toggle task completion
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    // remove task from state
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filterTasks = () => {
    // filter tasks based on activeFilter
    if (activeFilter === 'active') {
      return tasks.filter(task => !task.completed);
    } else if (activeFilter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  }

  // store filtered tasks
  const filteredTasks = filterTasks();

  return (
    <div className="app">
      
      <header>
        <nav className="main-header">
          <button className="menu-button">
              <img src={menuIcon} alt="Open Menu" id="menu-icon" />
          </button>

          <div className="search-bar">
              <img src={searchIcon} alt="search" id="search-icon" />
              <input type="search" className="search" id="search-input" name="q" placeholder="Quick Find" />
          </div>

          <TaskCounter tasks={tasks} />
        </nav>
      </header>

      <main className="main-content">
        <aside className="sidebar">
          <ul>
            <li>
                <a href="#" className="sidebar-link">
                    <img src={inboxIcon} alt="Inbox" />
                    <span>Inbox</span>
                    <span className="count">5</span>
                </a>
            </li>

            <li>
                <a href="#" className="sidebar-link">
                    <img src={calendarIcon} alt="Inbox" />
                    <span>Today</span>
                    <span className="count">5</span>
                </a>
            </li>
              
            <li>
                <a href="#" className="sidebar-link">
                    <img src={upcomingIcon} alt="Inbox" />
                    <span>Upcoming</span>
                </a>
            </li>
          </ul>
        </aside>

        <section className="checklist">
          <h1>Inbox</h1>
          <div className="filters">
            <button 
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => setActiveFilter('all')}> All </button>
            
            <button 
              className={activeFilter === 'active' ? 'active' : ''}
              onClick={() => setActiveFilter('active')}> Active </button>
            
            <button 
              className={activeFilter === 'completed' ? 'active' : ''}
              onClick={() => setActiveFilter('completed')}> Completed </button>
          
          </div>

          <TaskForm onAddTask={addTask} />
          <TaskList 
            tasks={filteredTasks} 
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>

      </main>
      
    </div>
  )
}

export default App
