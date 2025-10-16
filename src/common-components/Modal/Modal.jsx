const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        //растягивает темный фон на весь экран
        <div className="fixed inset-0 z-50 flex items-center justify-center rounded-2x1">
            {/* само затемнение фона */}
            <div 
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            />
            {/* сама модалка */}
            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md mx-4">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400  text-xl"
                >
                    ✕
                </button>
                
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Modal