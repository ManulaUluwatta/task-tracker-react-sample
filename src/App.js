
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './index.css';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  const [showAddTask, setAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  //for deiling with backend
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()

  }, [])


  //Fetch tasks
  const fetchTasks = async () => {
    const respond = await fetch('http://localhost:5000/tasks')
    const data = await respond.json()

    // console.log(data)
    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const respond = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await respond.json()
    console.log(data)
    return data
  }

  //Only for retriving data from client side
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: 'Task title One',
  //     day: 'Feb 5th at 2.30pm',
  //     reminder: false
  //   },
  //   {
  //     id: 2,
  //     title: 'Task title Two',
  //     day: 'Feb 5th at 2.30pm',
  //     reminder: false
  //   },
  //   {
  //     id: 3,
  //     title: 'Task title Three',
  //     day: 'Feb 5th at 2.30pm',
  //     reminder: false
  //   },
  // ]);

  //add task using ui
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newTask = { id, ...task }
  //   setTasks([...tasks, newTask])
  // }

  //add Task Using server
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

  }

  //delete task using ui
  // const deleteTasks = (id) => {
  //   console.log(`delete : ${id}`)
  //   setTasks(tasks.filter((task) => task.id !== id))
  // }

  //delete task from server
  const deleteTasks = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    console.log(`delete : ${id}`)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //set reminder
  // const toggleTask = (id) => {
  //   console.log(`double tap ${id}`)
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ?
  //         { ...task, reminder: !task.reminder }
  //         : task
  //     ))
  // }

  //toggle reminder using server
  const toggleTask = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    console.log(taskToToggle)
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()


    setTasks(
      tasks.map((task) =>
        task.id === id ?
          { ...task, reminder: data.reminder }
          : task
      ))
  }

  return (
    <Router>
      <div className="container mx-auto px-4 box-border border-2 mt-5 space-y-2 p-2 flex-row">
        <Header onAdd={() => setAddTask(!showAddTask)} showAddTask={showAddTask} />
        <Route path='/' exact render={(props) => (
          <>

            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onClick={deleteTasks} toggleTask={toggleTask} /> : 'No Task to show'}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}



export default App;
