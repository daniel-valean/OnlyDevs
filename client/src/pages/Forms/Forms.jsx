import './Forms.css'
import Logo from "../../images/Logo.png";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import CreateProjectForm from '../../components/CreateProjectForm/CreateProjectForm';
import {useState} from 'react'

export default function Forms() {
    return (
        <div className='form-page-wrapper'>
            <div className='form-wrapper'>
                {/* <SignUpForm/> */}
                {/* <LoginForm/> */}
                <CreateProjectForm/>
            </div>
            <div className='form-page-logo-wrapper'>
                <div className='home-image-text'>
                    <img className="big-logo" src={Logo}/>
                    <p style={{margin: 0, fontSize: ".55em"}}>Get Your Project<br/>Started Here</p>
                </div>
            </div>
        </div>
    )
}