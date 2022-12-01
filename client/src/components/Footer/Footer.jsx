import './Footer.css'
import {SiTwitter, SiFacebook, SiGithub, SiLinkedin, SiYoutube, SiStackoverflow} from 'react-icons/si'

export default function Footer() {
    return (
        <div className='footer-holder'>
            <div style={{display: "flex", alignItems:"center"}}>
                <div className='footer-about'>About Us</div>
                <div class="vl"></div>
                <div className='footer-names'>
                    <p>Miguel Gallardo</p>
                    <p>Toacin Patwary</p>
                    <p>Cole Sexson</p>
                    <p>Daniel Valean</p>
                </div>
            </div>
            <div className='footer-right'>
                <h1 className='footer-right-label'>Stay Connected</h1>
                <div class="vl"></div>
                <div className='icons-holder'>
                    <p style={{color: "#00acee", margin: "0px 10px 0px 0px", fontSize: ".75em"}}><SiTwitter/></p>
                    <p className='icons' style={{color: "#3b5998"}}><SiFacebook/></p>
                    <p className='icons' style={{color: "#171515"}}><SiGithub/></p>
                    <p className='icons' style={{color: "#0072b1"}}><SiLinkedin/></p>
                    <p className='icons' style={{color: "#FF0000"}}><SiYoutube/></p>
                    <p className='icons' style={{color: "#f48024"}}><SiStackoverflow/></p>
                </div>
            </div>
        </div>
    )
}