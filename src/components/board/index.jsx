import Todo from '../todo';
import './style.css'
import { useContext } from 'react';
import { TasksContext } from '../../context/tasks.context';

function Board () {

    const {tasks} = useContext(TasksContext)
    return(
        
            <div className='wrap-columns'>
            <Todo  title={'TO DO'}
                    status='todo'
                    tasks={tasks.filter(task=> task.status === 'todo')}></Todo>
            <Todo title={'IN PROGRESS'} 
                    status='pending'
                    tasks={tasks.filter(task=> task.status === 'pending')}></Todo>
            <Todo title={'DONE'} 
                    status='done'
                    tasks={tasks.filter(task=> task.status === 'done')}></Todo>
            </div>
        
    )
}

export default Board;