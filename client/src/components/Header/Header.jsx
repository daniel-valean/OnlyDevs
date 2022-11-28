import "./Header.css";
import Logo from "../../images/Logo.png";

export default function Header() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".home-header").style.top = "0";
        } else {
            document.querySelector(".home-header").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
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
};