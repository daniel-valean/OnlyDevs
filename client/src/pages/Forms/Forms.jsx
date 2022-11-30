import './Forms.css'
import Logo from "../../images/Logo.png";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import CreateProjectForm from '../../components/CreateProjectForm/CreateProjectForm';
import { useParams } from 'react-router-dom'

export default function Forms() {
    const {formType} = useParams();

    function renderForm() {
        switch(formType) {
            case "sign-up": return <SignUpForm/>;
            case "sign-up-from-create": return <SignUpForm/>;
            case "log-in": return <LoginForm/>;
            case "create-project": return <CreateProjectForm/>;
        }
    }

    return (
        <div className='form-page-wrapper'>
            <div className='form-wrapper'>
                {renderForm()}
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