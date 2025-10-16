import "./nav.css"
import InputText from "./../../common-components/input-text/InputText.jsx"
import ComboBox from "../../common-components/combo-box/ComboBox.jsx";
import ButtonTheme from "../../common-components/Button-Theme/ButtonTheme.jsx";
const Nav = () => {
    return (
        <nav className="Nav-content mt-[18px] flex items-center justify-evenly">
                <InputText>Search note...</InputText>
                <ComboBox/>
                <ButtonTheme/>
        </nav>
    );
}

export default Nav;