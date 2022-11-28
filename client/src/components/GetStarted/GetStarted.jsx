import './GetStarted.css'
import {Card, CardBody, Heading, Button } from '@chakra-ui/react'
import {SiTwitter, SiFacebook, SiGithub, SiLinkedin, SiYoutube} from 'react-icons/si'

export default function GetStarted() {
    return (
        <div className='GetStarted-wrapper'>
            <div className='GetStarted-card-wrapper'>
                <Card width="75%" bg='#fcfcf0'>
                    <CardBody align="center">
                        <Heading fontSize='6xl' color="#484a4a">Ready To Make A Change?</Heading>
                        <p style={{color: "#2C2D2D", fontSize: "2em", margin: "50px 0px"}}>We all know what it's like having that brilliant idea, but lacking the support to realize its potential often times stop us in our tracks. Join OnlyDevs and help developers around the world bring their projects to life. Get started by making an account!</p>
                        <Button fontSize='2xl' variant='solid' bg="#05d5f4" color="white" width="20%">
                            Create Account
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}