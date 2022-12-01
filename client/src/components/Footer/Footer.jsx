import './Footer.css'
import {SiTwitter, SiFacebook, SiGithub, SiLinkedin, SiYoutube, SiStackoverflow} from 'react-icons/si'

export default function Footer() {
    return (
        <div className='icons-holder'>
            <p style={{color: '#00acee'}}><SiTwitter/></p>
            <p style={{color: '#3b5998'}}><SiFacebook/></p>
            <p style={{color: '#171515'}}><SiGithub/></p>
            <p style={{color: '#0072b1'}}><SiLinkedin/></p>
            <p style={{color: '#FF0000'}}><SiYoutube/></p>
            <p style={{color: '#f48024'}}><SiStackoverflow/></p>
        </div>
    )
}