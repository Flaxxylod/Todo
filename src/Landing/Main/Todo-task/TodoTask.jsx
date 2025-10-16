import "./toDoTask.css"
import TrashIcon from "./../../../assets/landing/Main/trashIcon.svg"
import { useState } from "react";
import axios from 'axios';

const ToDoTask = ({ children, title, id, onDelete }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckbox = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);
    }

    const trash = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/todos/${id}`);
            // Вызываем callback для обновления списка в родительском компоненте
            if (onDelete) {
                onDelete(id);
            }
            console.log('Task deleted successfully');
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }

    return (
        <div className="TodoTask-content flex justify-center mt-[30px]">
            <div className="TodoTask-wrap border-b-[1px] border-[var(--Light-color)] pb-[20px]">
                <form className="flex items-center w-[525px] justify-between" action="">
                    <div className="flex items-center">
                        <div>
                            <input onChange={handleCheckbox} checked={isChecked} type="checkbox" name="" id="" />

                            <span className={`ml-5 text-[24px] ${isChecked ? "text-gray-400 line-through" : ""}`}>
                                {children}
                            </span>
                            <div>
                                <span className={`ml-5  ${isChecked ? "text-gray-400 line-through" : ""}`}>
                                    {title}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <button type="button" onClick={trash}>
                            <img src={TrashIcon} alt="Delete task" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ToDoTask;