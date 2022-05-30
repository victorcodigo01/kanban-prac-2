import { useEffect, useState } from "react";
import { TasksContext } from "./tasks.context";


const STORAGE_KEY = 'tasks'

export function TasksProvider({children}) {

    const [tasks,setTask] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY,JSON.stringify(tasks))
    },[tasks])


    const onCreateTasks = (e, status) => {
        const task = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            title: e,
            status: status,
            date: new Date().toLocaleString()
        }
        setTask((prevTasks) => [...prevTasks,task])
    }

    const onDeleteTasks = (id) => {
        setTask((prevTasks) => prevTasks.filter(task => task.id !== id) )
    }

    return <TasksContext.Provider value={{
            onCreateTasks,
            onDeleteTasks,
            tasks,
        }}>{children}</TasksContext.Provider>

}



