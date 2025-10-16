import "./header.css"
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <header className="Header-content mt-10 flex justify-center">
            <div className="container">
                <div className="">
                    <h1 className="text-center">TODO LIST</h1>
                </div>
                <Nav/>
            </div>
        </header>
    );
}

export default Header;