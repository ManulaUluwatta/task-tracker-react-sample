import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onClick, toggleTask }) => {
    return (
        <article onDoubleClick={() => toggleTask(task.id)}>
            <div className={task.reminder ? "border-green-600 border-l-8 min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20 p-5 hover:bg-gray-100 mt-2":"min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20 p-5  hover:bg-gray-100 mt-2"}>
                <h2 className="text-lg font-semibold text-black mb-0.5">
                    {task.title}

                    <FaTimes className="float-right hover:bg-gray-200" style={{ color: "red" }} onClick={() => onClick(task.id)} />
                </h2>
                <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                    <div>
                        <dt className="sr-only">Time</dt>
                        <dd>
                            <abbr>{task.day}</abbr>
                        </dd>
                    </div>
                </dl>
            </div>
        </article>
    )
}

export default Task
