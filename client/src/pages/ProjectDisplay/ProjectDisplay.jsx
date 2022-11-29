import './ProjectDisplay.css'
import Header from '../../components/Header/Header'
import { Card, CardBody, Heading, Button, Image, Progress, CircularProgress, CircularProgressLabel, Text, InputGroup, InputLeftElement, Input, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerContent, useDisclosure, Avatar, Divider } from '@chakra-ui/react'
import { useState} from 'react';
import {AiOutlineUser} from 'react-icons/ai'

export default function ProjectDisplay() {
    const [donationAmount, setDonationAmount] = useState("");
    function handleInputChange(e) {
        const { value } = e.target;
        setDonationAmount(value);
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = () => {
        onOpen()
    }


    return (
        <>
            <Header></Header>
            <div className='project-display-wrapper'>
                <Card width="75%" bg='#e9f1f2' padding="10px">
                    <CardBody>
                        <Heading align="center" fontSize='6xl' color="#484a4a" margin="20px">Sample Project</Heading>
                        <div className='project-display-middle'>
                            <Image borderRadius="5" objectFit='cover' maxW={{ base: '100%', sm: '400px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte' />
                            <div className='goals'>
                                <Heading fontSize='5xl' margin="25px" color="#484a4a" size='lg'>Goal: $1,000,000</Heading>
                                <Heading fontSize='5xl' margin="25px" color="#484a4a" size='lg'>Raised: $600,000</Heading>
                                <Progress colorScheme='yellow' hasStripe margin="25px" height='32px' bg="white" value={(600000 / 1000000) * 100} />
                                {/* <CircularProgress value={40} color='green.400'>
                                    <CircularProgressLabel>40%</CircularProgressLabel>
                                </CircularProgress> */}
                            </div>
                        </div>
                        <Heading fontSize='4xl' color="#484a4a" marginY="20px">Description</Heading>
                        <Text color="#484a4a" fontSize='2xl' marginY="10px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <Heading fontSize='4xl' color="#484a4a" marginY="20px">Impact</Heading>
                        <Text color="#484a4a" fontSize='2xl' marginY="10px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
                            <form style={{ display: "flex" }}>
                                <InputGroup width="100%" marginRight="10px">
                                    <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children='$' />
                                    <Input onChange={handleInputChange} bg="white" type='number' marginBottom="20px" value={donationAmount} placeholder='Enter amount' name='donationAmount' />
                                </InputGroup>
                                <Button align="center" fontSize='2xl' variant='solid' colorScheme="blue" bg="#05d5f4" color="white" width="100%">
                                    Donate
                                </Button>
                            </form>
                            <Button align="center" fontSize='2xl' variant='solid' colorScheme="blue" bg="#05d5f4" color="white" width="12%" onClick={() => handleClick()}>
                                Activity
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <Drawer onClose={onClose} isOpen={isOpen} size='lg'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontSize="5xl" marginBottom="20px">Activity</DrawerHeader>
                    <DrawerBody>
                        <div style={{display:"flex", alignItems:"center", marginBottom: "20px"}}>
                            <Avatar bg='red.500' marginRight="10px" icon={<AiOutlineUser fontSize='1.5rem' />} />
                            <p style={{fontSize: "1.5em"}}><span style={{fontWeight:"bolder"}}>Cole:</span> Cool Project Bro!</p>
                        </div>
                        <Divider marginBottom="20px"/>
                        <div style={{display:"flex", alignItems:"center", marginBottom: "20px"}}>
                            <Avatar bg='red.500' marginRight="10px" icon={<AiOutlineUser fontSize='1.5rem' />} />
                            <p style={{fontSize: "1.5em"}}><span style={{fontWeight:"bolder"}}>Miguel:</span> How is this cool? This is wack</p>
                        </div>
                        <Divider marginBottom="20px"/>
                        <div style={{display:"flex", alignItems:"center", marginBottom: "20px"}}>
                            <Avatar bg='red.500' marginRight="10px" icon={<AiOutlineUser fontSize='1.5rem' />} />
                            <p style={{fontSize: "1.5em"}}><span style={{fontWeight:"bolder"}}>Danny:</span> I like it!</p>
                        </div>
                        <Divider marginBottom="20px"/>
                        <div style={{display:"flex", alignItems:"center", marginBottom: "20px"}}>
                            <Avatar bg='red.500' marginRight="10px" icon={<AiOutlineUser fontSize='1.5rem' />} />
                            <p style={{fontSize: "1.5em"}}><span style={{fontWeight:"bolder"}}>Toacin:</span> The mavs are trash!</p>
                        </div>
                        <Divider marginBottom="20px"/>
                        <div style={{display:"flex", alignItems:"center", marginBottom: "20px"}}>
                            <Avatar bg='red.500' marginRight="10px" icon={<AiOutlineUser fontSize='1.5rem' />} />
                            <p style={{fontSize: "1.5em"}}><span style={{fontWeight:"bolder"}}>Cole:</span> <span style={{fontStyle: "italic", color: "green"}}>donated $100</span></p>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}