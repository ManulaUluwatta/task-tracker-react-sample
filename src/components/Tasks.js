import Task from "./Task"

 
const Tasks = ({tasks, onClick, toggleTask}) => {
  return (
    <ul className= "divide-y divide-gray-200">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onClick={onClick} toggleTask={toggleTask}/>
      ))}
    </ul>
  )
}

export default Tasks
