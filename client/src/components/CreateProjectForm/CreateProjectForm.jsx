import './CreateProjectForm.css'
import { FormControl, FormLabel, Input, FormHelperText, Text, InputGroup, Button, InputRightElement, InputLeftElement, Textarea} from '@chakra-ui/react'
import {useState} from 'react'
import { useMutation } from '@apollo/client'
import { ADD_PROJECT } from '../../utils/mutations'
import Auth from '../../utils/auth';

export default function CreateProjectForm() {
    const [addProject, {error}] = useMutation(ADD_PROJECT)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [fundingGoal, setFundingGoal] = useState("");
    const [purpose, setPurpose] = useState("");

    function handleInputChange(e) {
        const {name, value} = e.target;
        switch(name) {
            case "title":
                setTitle(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "image": 
                setImage(value);
                break;
            case "fundingGoal":
                setFundingGoal(value);
                break;
            default:
                setPurpose(value);
                break;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(title, description, image, fundingGoal, purpose);
        try{
            const {data} = await addProject({
                variables: {
                    title, 
                    description, 
                    image, 
                    fundingGoal: parseInt(fundingGoal), 
                    purpose
                }
            })
            if(data) {
                window.location.assign(`/project-display/${data.addProject._id}`);
            }
        }catch(error){
            console.log(error)
        }
        setTitle("");
        setDescription("");
        setImage("");
        setFundingGoal("");
        setPurpose("");
    }


    return (
        <form onSubmit={handleSubmit} style={{width: "70%"}}>
            <FormControl bg='#F8F9F8' borderRadius='4' width="100%" padding="30" isRequired>
                <Text fontSize='4xl' marginBottom="20px">Create Your Project!</Text>

                <FormLabel>Title</FormLabel>
                <Input onChange={handleInputChange} value={title} marginBottom="20px" type='text' name='title' placeholder='Enter Title'/>

                <FormLabel>Description</FormLabel>
                <Textarea onChange={handleInputChange} value={description} rows='7' marginBottom="20px" type='text' name='description' placeholder='Enter a description of your project' size='md'/>

                <FormLabel>Image of Project (URL)</FormLabel>
                <Input onChange={handleInputChange} value={image} marginBottom="20px" type='text' name='image' placeholder='Enter Image URL'/>

                <FormLabel>Funding Goal</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children='$'/>
                    <Input onChange={handleInputChange} type='number' marginBottom="20px" value={fundingGoal} placeholder='Enter amount' name='fundingGoal'/>
                </InputGroup>

                <FormLabel>Impact</FormLabel>
                <Textarea onChange={handleInputChange} value={purpose} rows='7' marginBottom="20px" type='text' name='purpose' placeholder='Briefly describe the impact community funding will have on your project' size='md'/>

                <Button mt={4} colorScheme='teal' type='submit'>
                    Submit
                </Button>
            </FormControl>
        </form>
    )
}