import './Homepage.css'
import HomeImage from '../../components/HomeImage/HomeImage'
import Header from '../../components/Header/Header'
import HowitWorks from '../../components/HowItWorks/HowItWorks'
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects'

export default function Homepage() {

    return (
        <>
            <Header/>
            <HomeImage/>
            <HowitWorks/>
            <FeaturedProjects/>
        </>
    )
}