import { useContext, useState } from 'react';
import { TasksContext } from '../../context/tasks.context';
import Form from '../shared-components/form';
import Task from './components/task';

import './style.css';

function Todo({ title, status , tasks}) {

    const [showForm, setShowForm] = useState(false)
    const {onCreateTasks} = useContext(TasksContext)

    const handleShowForm = () => {
        setShowForm(true)
    }

    const handleCancel = () => {
        setShowForm(false)
    }

    const handleAddTask = (e) => {
      onCreateTasks(e, status)
      setShowForm(false) 
    }


    return (

        <>
            <div className="container-todo">
                <div className='header'>
                    <div className='circle-todo'>
                        <div className="circle">1</div>
                        <p className="todo">{title}</p>
                    </div>
                    <button className="plus" onClick={handleShowForm}>+</button>
                </div>

                <div className='container-task'>

                    {tasks && tasks.map(task => <Task key={task.id} task={task}></Task>)}
                
                </div>
                {showForm && <Form onCancel={handleCancel} onAdd={handleAddTask} ></Form>}
            </div>





        </>
    )
}

export default Todo;