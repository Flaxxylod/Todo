import "./InputText.css"
import zoom from "./../../assets/landing/nav/Zoom.svg"
const InputText = ({children}) => {
    return (
        <div className="input_text-content flex justify-center ">
            <div className="relative"> 
                <input className="pl-4 pt-2 pb-2 w-[450px] max-w-[450px] max-h-[38px] pr-10 " type="text" placeholder={children} />
                <div className="size-[16px] absolute right-3 top-1/2 transform -translate-y-1/2">
                    <img src={zoom} alt="" />
                </div>
            </div>
        </div>
    );
}

export default InputText;