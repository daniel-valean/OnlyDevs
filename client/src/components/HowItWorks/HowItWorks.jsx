import './HowItWorks.css'
import { SimpleGrid, Card, CardBody, Stack, Heading } from '@chakra-ui/react'
import {RiHeartsFill} from 'react-icons/ri'
import {GiStairsGoal, GiAchievement} from 'react-icons/gi'
import { MdPersonAddAlt1 } from 'react-icons/md';
import ArrowDown from '../../images/Arrow-Down.png'
import ArrowUp from '../../images/Arrow-Up.png'


export default function HowitWorks() {
    return (
        <div className='how-it-works-wrapper'>
            <div className='how-it-works-title-wrapper'>
                <h1 className='how-it-works-title'>How It Works</h1>
            </div>
            <div className='how-it-works-cards-wrapper1'>
                <div style={{width: '25%', transform: 'rotate(-6deg)'}}>
                    <Card width='100%' bg='#e9eff0'>
                        <CardBody align='center'>
                            <Heading size='lg' color='#484a4a'>Create Account & Post Project</Heading>
                            <p style={{fontSize: '10em', color: '#05d5f4'}}><MdPersonAddAlt1/></p>
                        </CardBody>
                    </Card>
                </div>
                <div style={{width: '25%', transform: 'rotate(8deg)'}}>
                    <Card className='how-it-works-cards' width='100%' bg='#e9eff0'>
                        <CardBody align='center'>
                            <Heading size='lg' color='#484a4a'>Achieve Your Goals</Heading>
                            <p style={{fontSize: '10em', color: 'green'}}><GiAchievement/></p>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='how-it-works-cards-wrapper2'>
                <img src={ArrowDown} style={{margin: '0px 10px 0px 10px'}}/>
                <Card className='how-it-works-cards' width='25%' bg='#e9eff0'>
                    <CardBody align='center'>
                        <Heading size='lg' color='#484a4a'>Receive Community Support</Heading>
                        <p style={{fontSize: '10em', color: 'red'}}><RiHeartsFill/></p>
                    </CardBody>
                </Card>
                <img src={ArrowUp} style={{margin: '0px 10px 0px 10px'}}/>
            </div>
        </div>
    )
}