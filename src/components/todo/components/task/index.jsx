
import { useContext } from 'react';
import { TasksContext } from '../../../../context/tasks.context';
import './style.css'

function Task ({task}) {

    const{onDeleteTasks } = useContext(TasksContext)


    const handleRemove = () => {
        onDeleteTasks(task.id)
    }

    return(

        <div className='wrap-task' draggable >
            <div className='title-button'>
                <div className='state-title'>
                    <div className={task.status==='done'?'task-state-two':'task-state'}></div>
                    <span className='task-title'>{task.title}</span>
                </div>
                <button onClick={handleRemove} >X</button>
            </div>
            <p className='task-info'>#{task.id} created on {task.date}</p>
        </div>
    )
}

export default Task;