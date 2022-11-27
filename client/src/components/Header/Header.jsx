import "./Header.css";
import Logo from "../../images/Logo.png";

export default function Header() {
    return (
        <header className="home-header">
            <div className="header-body">
                <div className="header-left-text">
                    <a className="header-text" href="#">Search</a>
                    <a className="header-text" href="#">Featured</a>
                </div>
                <img className="logo" src={Logo}/>
                <div>
                    <a className="header-text" href="#">About Us</a>
                    <a className="header-text" href="#">Create</a>
                </div>
            </div>
        </header>
    )
}