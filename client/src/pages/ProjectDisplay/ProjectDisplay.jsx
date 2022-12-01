import './ProjectDisplay.css'
import Header from '../../components/Header/Header'
import { Card, CardBody, Heading, Button, Image, Progress, CircularProgress, Text, InputGroup, InputLeftElement, Input, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerContent, useDisclosure, Avatar, Divider } from '@chakra-ui/react'
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { QUERY_PROJECT, QUERY_CHECKOUT } from '../../utils/queries';
import { ADD_COMMENT } from '../../utils/mutations';
import { useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import progressFundingReached from '../../components/sounds/progressFundingReached.mp3'

// const avatarArray = ['red', 'blue', 'green', 'purple', 'yellow']; 
// const avatarPicker = () => {
//     return avatarArray[Math.floor(Math.random()*5)]
// }


const stripePromise = loadStripe('pk_test_51M9D8lCh7zP8YFj8xPKACfk85tR6oJn74U7qhvazVQxsWoym6FPYMovvSPSTWFQbWRZaDgs0Z6ejxmGWyzyhRK9E00R6xLb6rT')


export default function ProjectDisplay() {
    const [soundValue, setSound] = useState(0);

    
    function playSound() {
        // new Audio(demo).play()
        const audio = new Audio(progressFundingReached) 
        audio.volume = .2
        audio.play()
    }
    const [getCheckout, { data: checkoutData }] = useLazyQuery(QUERY_CHECKOUT)
    
    useEffect(() => {
        if (checkoutData) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: checkoutData.checkout.session });
            });
        }
    }, [checkoutData])
    const { projectId } = useParams();
    const [addComment, { error }] = useMutation(ADD_COMMENT)
    
    const { data, loading } = useQuery(QUERY_PROJECT, {
        variables: {
            id: projectId
        }
    });
    useEffect(() => {
        if(!loading) {
            if(data.getProject.fundingProgress >= data.getProject.fundingGoal) {
                playSound();
            }
        }
    }, [])

    const [donationAmount, setDonationAmount] = useState('');
    const [userComment, setUserComment] = useState('');
    function handleInputChange(e) {
        const { value, name } = e.target;
        switch (name) {
            case 'donationAmount':
                setDonationAmount(value);
                break;
                case 'userComment':
                    setUserComment(value);
                    break;
                }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = () => {
        onOpen()
    }

    async function handleCommentSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await addComment({
                variables: {
                    comment: userComment,
                    projectId: projectId
                }
            })
            if (data) setUserComment('')
        } catch (err) {
            console.log(err)
        }
    }

    async function handleDonationSubmit(e) {
        e.preventDefault(); 
        try{
            await getCheckout({
                variables: {
                    _id: data.getProject._id,
                    donationAmount: parseInt(donationAmount)
                }
            })
        } catch(err){
            console.error(err)
        }
    }

    if (loading) {
        return <div className='project-display-wrapper'><CircularProgress isIndeterminate color='#05d5f4' /></div>
    } else {
        return (
            <>
                <Header></Header>
                <div className='project-display-wrapper'>
                    <Card width='75%' bg='#e9f1f2' padding='10px'>
                        <CardBody>
                            <Heading align='center' fontSize='6xl' color='#484a4a' margin='20px'>{data.getProject.title}</Heading>
                            <div className='project-display-middle'>
                                <Image borderRadius='5' objectFit='cover' maxW={{ base: '100%', sm: '400px' }} src={data.getProject.image} alt='Caffe Latte' />
                                <div className='goals'>
                                    <Heading fontSize='5xl' margin="25px" color="#484a4a" size='lg'>Goal: ${data.getProject.fundingGoal}</Heading>
                                    <Heading fontSize='5xl' margin="25px" color="#484a4a" size='lg'>Raised: ${data.getProject.fundingProgress}</Heading>
                                    <Progress colorScheme={(data.getProject.fundingProgress >= data.getProject.fundingGoal) ? "green" : "yellow"} hasStripe margin="25px" height='32px' bg="white" value={(data.getProject.fundingProgress / data.getProject.fundingGoal) * 100} />
                                </div>
                            </div>
                            <Heading fontSize='4xl' color='#484a4a' marginY='20px'>Description</Heading>
                            <Text color='#484a4a' fontSize='2xl' marginY='10px'>
                                {data.getProject.description}
                            </Text>
                            <Heading fontSize='4xl' color='#484a4a' marginY='20px'>Impact</Heading>
                            <Text color='#484a4a' fontSize='2xl' marginY='10px'>
                                {data.getProject.purpose}
                            </Text>
                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                <form onSubmit={handleDonationSubmit} style={{ display: 'flex' }}>
                                    <InputGroup width='100%' marginRight='10px'>
                                        <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children='$' />
                                        <Input onChange={handleInputChange} bg='white' type='number' marginBottom='20px' value={donationAmount} placeholder='Enter amount' name='donationAmount' />
                                    </InputGroup>
                                    <Button type='submit' align='center' fontSize='2xl' variant='solid' colorScheme='blue' bg='#05d5f4' color='white' width='100%'>
                                        Donate
                                    </Button>
                                </form>

                                <Button align='center' fontSize='2xl' variant='solid' colorScheme='blue' bg='#05d5f4' color='white' width='12%' onClick={() => handleClick()}>
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
                        <DrawerHeader fontSize='5xl' marginBottom='20px'>Activity</DrawerHeader>
                        <DrawerBody>
                            <Divider marginBottom="20px" />
                            {data.getProject.comments.map((element) => (
                                <div key={element._id}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                        <Avatar bg='purple.500' marginRight='10px' icon={<AiOutlineUser fontSize='1.5rem' />} />
                                        <p style={{ fontSize: '1.5em' }}><span style={{ fontWeight: 'bolder' }}>{(element.username) ? (element.username) : 'Anonymous'}:</span> <span style={/^Donated\s\$/.test(element.comment) ? { fontStyle: 'italic', color: 'green' } : {}}>{element.comment}</span></p>
                                    </div>
                                    <Divider marginBottom='20px' />
                                </div>
                            ))}
                            <form onSubmit={handleCommentSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <Input value={userComment} name='userComment' onChange={handleInputChange} marginRight='10px' placeholder='Add your comment' />
                                <Button type='submit' variant='solid' colorScheme='blue' bg='#05d5f4' color='white' width='20%'>
                                    Comment
                                </Button>
                            </form>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                {(data.getProject.fundingProgress >= data.getProject.fundingGoal) ? <Confetti recycle={false}/>: <div style={{display: 'none'}}></div>}
            </>
        )
    }
}