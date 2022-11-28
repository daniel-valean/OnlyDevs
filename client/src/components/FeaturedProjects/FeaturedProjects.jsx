import './FeaturedProjects.css'
import { Card, CardBody, Stack, Heading, Text, CardFooter, Button, Image} from '@chakra-ui/react'

export default function FeaturedProjects() {
    return (
        <div className='featured-holder'>
            <div className='featured-title-holder'>
                <h1>Featured Projects</h1>
            </div>
            <div className='featured-cards-holder'>
                <Card borderRadius="0" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width="40%">
                    <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte'/>
                    <Stack>
                        <CardBody>
                            <Heading color="#484a4a" size='md'>The perfect latte</Heading>
                            <Text color="#484a4a" py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='solid' bg="#05d5f4" color="white">
                                View Project!
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
                <Card borderRadius="0" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width="40%">
                    <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte'/>
                    <Stack>
                        <CardBody>
                            <Heading size='md'>The perfect latte</Heading>
                            <Text py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='solid' bg="#05d5f4" color="white">
                                View Project!
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </div>
            <div className='featured-cards-holder'>
                <Card borderRadius="0" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width="40%">
                    <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte'/>
                    <Stack>
                        <CardBody>
                            <Heading color="#484a4a" size='md'>The perfect latte</Heading>
                            <Text color="#484a4a" py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='solid' bg="#05d5f4" color="white">
                                View Project!
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
                <Card borderRadius="0" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width="40%">
                    <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte'/>
                    <Stack>
                        <CardBody>
                            <Heading size='md'>The perfect latte</Heading>
                            <Text py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='solid' bg="#05d5f4" color="white">
                                View Project!
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </div>
            <div className='featured-cards-holder'>
                <Card borderRadius="0" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width="40%">
                    <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte'/>
                    <Stack>
                        <CardBody>
                            <Heading color="#484a4a" size='md'>The perfect latte</Heading>
                            <Text color="#484a4a" py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='solid' bg="#05d5f4" color="white">
                                View Project!
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
                <Card borderRadius="0" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg='#F8F9F8' width="40%">
                    <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Caffe Latte'/>
                    <Stack>
                        <CardBody>
                            <Heading size='md'>The perfect latte</Heading>
                            <Text py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='solid' bg="#05d5f4" color="white">
                                View Project!
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </div>
        </div>
    )
}