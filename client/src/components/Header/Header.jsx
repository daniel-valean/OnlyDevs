import "./Header.css";
import Logo from "../../images/Logo.png";
import {Link} from 'react-router-dom'

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
                    <Link className="header-text" to="/all-projects">Projects</Link>
                    <Link className="header-text" to="/forms/create-project">Create</Link>
                </div>
                <Link className="logo" to="/"><img style={{height: "100%"}} src={Logo}/></Link>
                <div>
                    <Link className="header-text" to="/forms/log-in">Log In</Link>
                    <Link className="header-text" to="/forms/sign-up">Sign Up</Link>
                </div>
            </div>
        </header>
    )
};