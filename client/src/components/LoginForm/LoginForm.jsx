import './LoginForm.css'
import { FormControl, FormLabel, Input, Text, InputGroup, Button, InputRightElement} from '@chakra-ui/react'
import {useState, useMutation } from 'react'
import { LOGIN } from '../../utils/mutations'

export default function LoginForm() {
    const [login, {error}] = useMutation(LOGIN)
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleInputChange(e) {
        const {name, value} = e.target;
        switch(name) {
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
        try{
            const data = await login({
                variables: {
                    username,
                    password
                }
            })
            Auth.login(data.addUser.token);
        }catch(error){
            console.log(error)
        }
        setUsername("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit} style={{width: "50%"}}>
            <FormControl bg='#F8F9F8' borderRadius='4' width="100%" padding="30" isRequired>
                <Text fontSize='4xl' marginBottom="20px">Log In</Text>

                <FormLabel>Username</FormLabel>
                <Input onChange={handleInputChange} value={username} marginBottom="20px" type='text' name='username' placeholder='Enter Username'/>

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

                <Button mt={4} colorScheme='teal' type='submit'>
                    Submit
                </Button>
            </FormControl>
        </form>
    )
}