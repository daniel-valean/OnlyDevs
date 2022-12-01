import Header from "../../components/Header/Header"
import { CircularProgress } from "@chakra-ui/react"
import { MdConstruction } from "react-icons/md"


export default function Account() {
    return (
        <>
            <Header />
            <div className='project-display-wrapper'>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop:"40px"}}>
                    <CircularProgress isIndeterminate color='#05d5f4' />
                    <h1 style={{paddingLeft: "5px", fontSize: "1.3em", marginTop: 10}}>Page Under Construction</h1>
                    <p style={{fontSize: "2em"}}><MdConstruction/></p>
                </div>
            </div>
        </>
    )
}