import { useState } from "react";
import { TasksContext } from "./tasks.context";

export function TasksProvider({children}) {

    const [tasks,setTask] = useState([])


    const onCreateTasks = (e, status) => {
        const task = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            title: e,
            status: status,
            date: new Date().toLocaleString()
        }

        setTask((prevTasks) => [...prevTasks,task])
        
    }

    return <TasksContext.Provider value={{
            onCreateTasks,
            tasks,
        }}>{children}</TasksContext.Provider>

}



