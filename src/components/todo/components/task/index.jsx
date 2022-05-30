
import './style.css'

function Task ({task}) {



    return(

        <div className='wrap-task' draggable >
            <div className='title-button'>
                <div className='state-title'>
                    <div className={task.status==='done'?'task-state-two':'task-state'}></div>
                    <span className='task-title'>{task.title}</span>
                </div>
                <button >X</button>
            </div>
            <p className='task-info'>#{task.id} created on {task.date}</p>
        </div>
    )
}

export default Task;