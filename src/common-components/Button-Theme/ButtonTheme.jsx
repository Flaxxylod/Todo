import ThemeIcon from "./../../assets/landing/nav/ThemeIcon.svg"
import "./buttonTheme.css"
const ButtonTheme = () => {
    return (
        <div className="ButtonTheme-content">
            <button className="size-[38px] bg-[var(--Light-color)] rounded-[4px] ">
                <img src={ThemeIcon} alt="" />
            </button>
        </div>
    );
}

export default ButtonTheme;