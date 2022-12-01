import './LoginForm.css'
import { FormControl, FormLabel, Input, Text, InputGroup, Button, InputRightElement, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../utils/mutations'
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [login, { error }] = useMutation(LOGIN)
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleInputChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password);
        //added logic for login
        try {
            const { data } = await login({
                variables: {
                    username,
                    password
                }
            })
            Auth.login(data.login.token);
            setUsername('');
            setPassword('');

        } catch (error) {
            console.log(error)
            onOpen();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "50%" }}>
                <FormControl bg='#F8F9F8' borderRadius='4' width="100%" padding="30" isRequired>
                    <Text fontSize='4xl' marginBottom="20px">Log In</Text>

                    <FormLabel>Username</FormLabel>
                    <Input onChange={handleInputChange} value={username} marginBottom="20px" type='text' name='username' placeholder='Enter Username' />

                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md' marginBottom="10px">
                        <Input
                            onChange={handleInputChange}
                            name="password"
                            value={password}
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

                    <Button mt={4} colorScheme='blue' bg="#05d5f4" type='submit' marginBottom="20px">
                        Submit
                    </Button>

                    <FormLabel requiredIndicator>Don't have an account yet? <Link style={{ textDecoration: "underline", color: "blue" }} to="/forms/sign-up">Sign up</Link> instead</FormLabel>
                </FormControl>
            </form>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Invalid Credentials</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Please Try Again
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}