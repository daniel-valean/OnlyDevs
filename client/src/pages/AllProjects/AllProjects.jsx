import './AllProjects.css'
import Header from '../../components/Header/Header'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, SimpleGrid, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PROJECTS } from '../../utils/queries';

export default function AllProject() {
    const { data, loading } = useQuery(QUERY_ALL_PROJECTS);
    console.log(data);

    if (loading) {
        return <div className='project-display-wrapper'><CircularProgress isIndeterminate color='green.300' /></div>
    } else {
        return (
            <>
                <Header></Header>
                <div className='all-project-display-wrapper'>
                    <Heading fontSize='6xl' color="#05d5f4" marginBottom="50px">Projects</Heading>
                    <SimpleGrid columns={4} spacing={10}>
                        {data.getProjects.map((project) => (
                            <Card key={project._id} maxW='xs'>
                                <CardBody>
                                    <Image
                                        src={project.image}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{project.title}</Heading>
                                        <Text>{project.description}</Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2' display="flex" alignContent="center" width="100%">
                                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                                            <Button
                                                onClick={() => {
                                                    window.location.assign(`/project-display/${project._id}`)
                                                }}
                                                variant='solid'
                                                colorScheme='blue'
                                                bg="#05d5f4"
                                            >
                                                View
                                            </Button>
                                            <CircularProgress value={(project.fundingProgress/project.fundingGoal)*100} color='#05d5f4'>
                                                <CircularProgressLabel>{(project.fundingProgress/project.fundingGoal)*100}%</CircularProgressLabel>
                                            </CircularProgress>
                                        </div>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        ))}
                    </SimpleGrid>
                </div>
            </>
        )
    }
}