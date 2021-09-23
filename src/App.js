import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import './index.css';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task title One',
      day: 'Feb 5th at 2.30pm',
      reminder: false
    },
    {
      id: 2,
      title: 'Task title Two',
      day: 'Feb 5th at 2.30pm',
      reminder: false
    },
    {
      id: 3,
      title: 'Task title Three',
      day: 'Feb 5th at 2.30pm',
      reminder: false
    },
  ]);

  //add task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTasks = (id) => {
    console.log(`delete : ${id}`)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //set reminder
  const toggleTask = (id) => {
    console.log(`double tap ${id}`)
    setTasks(
      tasks.map((task) =>
        task.id === id ?
          { ...task, reminder: !task.reminder }
          : task
      )) 
  }

  return (
    <div className="container mx-auto px-4 box-border border-2 mt-5 space-y-2 p-2 flex-row">
      <Header showTask={setAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onClick={deleteTasks} toggleTask={toggleTask} /> : 'No Task to show'}
    </div>
  );
}



export default App;
