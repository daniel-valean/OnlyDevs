import './SignUpForm.css'
import { FormControl, FormLabel, Input, FormHelperText, Text, InputGroup, Button, InputRightElement} from '@chakra-ui/react'
import {useState} from 'react'

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleInputChange(e) {
        const {name, value} = e.target;
        switch(name) {
            case "username":
                setUsername(value);
                break;
            case "email": 
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                setConfirmPassword(value);
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, email, password, confirmPassword);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }


    return (
        <form onSubmit={handleSubmit} style={{width: "50%"}}>
            <FormControl bg='#F8F9F8' borderRadius='4' width="100%" padding="30" isRequired>
                <Text fontSize='4xl' marginBottom="20px">Sign-Up!</Text>

                <FormLabel>Username</FormLabel>
                <Input onChange={handleInputChange} value={username} marginBottom="20px" type='text' name='username' placeholder='Enter Username'/>

                <FormLabel>Email Address</FormLabel>
                <Input onChange={handleInputChange} value={email} type='email' name='email' placeholder='Enter Email'/>
                <FormHelperText marginBottom="20px">We'll never share your email.</FormHelperText>

                <FormLabel>Password</FormLabel>
                <InputGroup size='md' marginBottom="20px">
                    <Input
                        onChange={handleInputChange}
                        name = "password"
                        value = {password}
                        pr='4.5rem'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter Password'
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
                        onChange={handleInputChange}
                        name = "confirmPassword"
                        value = {confirmPassword}
                        pr='4.5rem'
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Re-enter Password'
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
        </form>
    )
}