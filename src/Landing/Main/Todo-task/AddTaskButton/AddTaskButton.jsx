import AddIcon from "./../../../../assets/landing/Main/AddButon.svg"
import { useState } from "react";
import Modal from "../../../../common-components/Modal/Modal";
import axios from 'axios';

const AddTaskButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/todos', {
                title: title,
                description: description
            });

            console.log('Task created:', response.data);
            
            // Закрываем модалку и очищаем поля
            setIsModalOpen(false);
            setTitle("");
            setDescription("");
            
            // Можно добавить обновление списка задач
            window.location.reload(); // или через state

        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <div className="AddTaskButton-content fixed right-[410px]">
            <button 
                onClick={() => setIsModalOpen(true)} 
                className="rounded-full bg-[var(--Light-color)] size-[50px] flex justify-center items-center"
            >
                <img src={AddIcon} alt="Add task" />
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <h2 className="text-2xl font-bold mb-4">New Note</h2>
                
                <input
                    type="text"
                    placeholder="Input your Title"
                    className="w-full p-3 border rounded-lg mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Input your Description"
                    className="w-full p-3 border rounded-lg mb-4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                
                <button 
                    onClick={handleSubmit}
                    className="bg-[var(--Light-color)] text-white px-4 py-2 rounded"
                >
                    Apply
                </button>
            </Modal>
        </div>
    );
}

export default AddTaskButton;