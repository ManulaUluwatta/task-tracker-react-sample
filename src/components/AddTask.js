import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [title,setTitle] = useState('');
    const [day,setDate] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit =(e) => {
        e.preventDefault();

        console.log("press")

        if(!title){
            alert("Enter title");
            return
        }

        onAdd({title, day, reminder})

        setTitle('')
        setDate('')
        setReminder(false)

    }

    return (
        <form onSubmit={onSubmit}>
                <label>Task</label>
                <input className="block min-w-full mt-2 mb-2" type='text' placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                <label>Day and Time</label>
                <input className="block min-w-full mt-2 mb-2" type='text' placeholder='Enter Date and Time' value={day} onChange={(e)=> setDate(e.target.value)}></input>
                <label>Set Reminder</label><input className="ml-4" type='checkbox' checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}></input>
                <button type="submit" className="block w-full h-10 mt-2 mb-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800">Add Task</button>
        </form>
    )
}
 
export default AddTask
