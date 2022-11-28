import './HomeImage.css'
import Logo from "../../images/Logo.png";

export default function HomeImage() {
    return (
    <div className='home-image'>
        <div className='home-image-text invisible-version'>
            <p>Get Your</p>
            <p>Project Started</p>
        </div>
        <div className='home-image-text invisible-version'>
            <p>Get Your</p>
            <p>Project Started</p>
        </div>
        <div className='home-image-text'>
            <img className="big-logo" src={Logo}/>
            <p style={{margin: 0}}>Get Your Project<br/>Started Here</p>
        </div>
    </div>
    )
}