
import axios from "axios";
import { useState } from "react";
import AddTaskButton from "./Todo-task/AddTaskButton/AddTaskButton";
import ToDoTask from "./Todo-task/TodoTask";
import { useEffect } from "react";

const Main = () => {
    const [taskData, setTaskData] = useState([])
    const TodoTaskData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/todos');
            setTaskData(response.data)
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }
    useEffect(() => {
        TodoTaskData()

    }, [])

    const handleDeleteTask = (deletedId) => {
        setTaskData(prevTasks => prevTasks.filter(task => task._id !== deletedId));
    }
    return (
        <main className="Main-content flex flex-col justify-center">
            <div className="container">
                {taskData.map((obj) => (
                    <ToDoTask
                        key={obj._id}
                        id={obj._id}
                        title={obj.title}
                        onDelete={handleDeleteTask}
                    >
                        {obj.description}
                    </ToDoTask>
                ))}

            </div>
        </main>
    );
}

export default Main;