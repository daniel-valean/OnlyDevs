import './SignUpForm.css'
import { FormControl, FormLabel, Input, FormHelperText, Text, InputGroup, Button, InputRightElement, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormErrorMessage} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../../utils/mutations'
import Auth from '../../utils/auth';
import { useParams, Link } from 'react-router-dom'
import { useToastHook } from '../../utils/Toast';

export default function SignUpForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isError, setIsError] = useState(false)

    const [state, newToast] = useToastHook();
    const { formType } = useParams();
    // const [toastRan, setToastRan] = useState(false)

    const [addUser, { error }] = useMutation(ADD_USER)
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (formType === "sign-up-from-create") {
            newToast({ message: "Please sign-up to create a project", status: "warning", title: "Looks like you're not logged in" });
        }
    }, [])

    function handleInputChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                setConfirmPassword(value);
                break;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        //adding login logic
        if (password !== confirmPassword) {
            // onOpen();
            setIsError(true)
            return;
        }
        try {
            const { data } = await addUser({
                variables: {
                    username,
                    email,
                    password
                }
            })
            Auth.login(data.addUser.token);
        } catch (error) {
            console.log(error)
            onOpen()
        }

        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }


    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "50%" }}>
                <FormControl bg='#F8F9F8' borderRadius='4' width="100%" padding="30" isRequired>
                    <Text fontSize='4xl' marginBottom="20px">Sign-Up!</Text>

                    <FormLabel>Username</FormLabel>
                    <Input onChange={handleInputChange} value={username} marginBottom="20px" type='text' name='username' placeholder='Enter Username' />

                    <FormLabel>Email Address</FormLabel>
                    <Input onChange={handleInputChange} value={email} type='email' name='email' placeholder='Enter Email' />
                    <FormHelperText marginBottom="20px">We'll never share your email.</FormHelperText>

                    <FormControl isInvalid={isError}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md' marginBottom="20px">
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

                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup size='md' marginBottom="10px">
                            <Input
                                onChange={handleInputChange}
                                name="confirmPassword"
                                value={confirmPassword}
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
                        {isError ? (
                            <FormErrorMessage>Passwords Must Match</FormErrorMessage>
                        ) : (
                            <></>
                        )}
                    </FormControl>

                    <Button marginBottom="20px" mt={4} colorScheme='blue' bg="#05d5f4" type='submit'>
                        Submit
                    </Button>

                    <FormLabel requiredIndicator>Already have an account? <Link style={{ textDecoration: "underline", color: "blue" }} to="/forms/log-in">Log in</Link> instead</FormLabel>
                </FormControl>
            </form>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Something Went Wrong...</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Please Try Again Later
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}