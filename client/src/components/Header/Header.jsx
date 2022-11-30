import "./Header.css";
import Logo from "../../images/Logo.png";
import {Link} from 'react-router-dom';
import Auth from '../../utils/auth';

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

    function whereToGo() {
        return (Auth.loggedIn()) ? ('/forms/create-project') : ('/forms/sign-up-from-create');
    }

    return (
        <header className="home-header">
            <div className="header-body">
                <div className="header-left-text">
                    <Link className="header-text" to="/all-projects">Projects</Link>
                    <Link className="header-text" to={whereToGo()}>Create</Link>
                </div>
                <Link className="logo" to="/"><img style={{height: "100%"}} src={Logo}/></Link>
                {Auth.loggedIn() ? 
                    <div>
                        <p className="header-text-anchor" onClick={()=>Auth.logout()}>Log Out</p>
                        <Link className="header-text" to="/">Account</Link>
                    </div> :
                    <div>
                        <Link className="header-text" to="/forms/log-in">Log In</Link>
                        <Link className="header-text" to="/forms/sign-up">Sign Up</Link>
                    </div>
                }
            </div>
        </header>
    )
};