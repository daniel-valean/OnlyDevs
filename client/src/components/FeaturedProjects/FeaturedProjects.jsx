import './FeaturedProjects.css'
import { Card, CardBody, Stack, Heading, Text, CardFooter, Button, Image, CircularProgress } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PROJECTS } from '../../utils/queries';

export default function FeaturedProjects() {
    const { data, loading } = useQuery(QUERY_ALL_PROJECTS);

    if (loading) {
        return <div className='project-display-wrapper'><CircularProgress isIndeterminate color='#05d5f4' /></div>
    } else {
        return (
            <div className='featured-holder'>
                <div className='featured-title-holder'>
                    <h1>Featured Projects</h1>
                </div>
                <div className='featured-cards-holder'>
                    {data.getProjects.slice(0, 2).map((project) => (
                        <Card borderRadius='0' key={project._id} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width='40%'>
                            <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={project.image} alt='Caffe Latte' />
                            <Stack>
                                <CardBody>
                                    <Heading color='#484a4a' size='md'>{project.title}</Heading>
                                    <Text color='#484a4a' py='2'>
                                        {project.description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Link to={`/project-display/${project._id}`}>
                                        <Button variant='solid' colorScheme='blue' bg='#05d5f4' color='white'>
                                            View Project!
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </div>
                <div className='featured-cards-holder'>
                    {data.getProjects.slice(2, 4).map((project) => (
                        <Card borderRadius='0' key={project._id} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width='40%'>
                            <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={project.image} alt='Caffe Latte' />
                            <Stack>
                                <CardBody>
                                    <Heading color='#484a4a' size='md'>{project.title}</Heading>
                                    <Text color='#484a4a' py='2'>
                                        {project.description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Link to={`/project-display/${project._id}`}>
                                        <Button variant='solid' colorScheme='blue' bg='#05d5f4' color='white'>
                                            View Project!
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </div>
                <div className='featured-cards-holder'>
                    {data.getProjects.slice(4, 6).map((project) => (
                        <Card borderRadius='0' key={project._id} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width='40%'>
                            <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={project.image} alt='Caffe Latte' />
                            <Stack>
                                <CardBody>
                                    <Heading color='#484a4a' size='md'>{project.title}</Heading>
                                    <Text color='#484a4a' py='2'>
                                        {project.description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Link to={`/project-display/${project._id}`}>
                                        <Button variant='solid' colorScheme='blue' bg='#05d5f4' color='white'>
                                            View Project!
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}