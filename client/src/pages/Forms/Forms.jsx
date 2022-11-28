import './Forms.css'
import Logo from "../../images/Logo.png";
import { FormControl, FormLabel, Input, FormHelperText, Text, InputGroup, Button, InputRightElement, Submit } from '@chakra-ui/react'
import {useState} from 'react'

export default function Forms() {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

    return (
        <div className='form-page-wrapper'>
            <div className='form-wrapper'>
                <FormControl bg='#F8F9F8' borderRadius='4' width="50%" padding="30">
                    <Text fontSize='4xl' marginBottom="20px">Sign-Up!</Text>

                    <FormLabel>Username</FormLabel>
                    <Input marginBottom="20px" type='text' placeholder='Enter Username'/>

                    <FormLabel>Email address</FormLabel>
                    <Input type='email' placeholder='Enter Email'/>
                    <FormHelperText marginBottom="20px">We'll never share your email.</FormHelperText>

                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md' marginBottom="20px">
                        <Input
                            pr='4.5rem'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                            {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup size='md' marginBottom="20px">
                        <Input
                            pr='4.5rem'
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder='Re-enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShowConfirmPassword}>
                            {showConfirmPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <Button mt={4} colorScheme='teal' type='submit'>
                        Submit
                    </Button>
                </FormControl>
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