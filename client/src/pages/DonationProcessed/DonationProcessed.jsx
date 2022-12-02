import { AiFillCheckCircle } from "react-icons/ai"
import Logo from '../../images/Logo.png'
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function DonationProcessed() {
    const {projectId} = useParams()

    useEffect(()=> {
        setTimeout(() => {
            window.location.assign(`/#/project-display/${projectId}`)
        }, 2500)
    }, [])
    return (

        <>
            <div className='project-display-wrapper' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: 0}}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img className='big-logo' src={Logo}/>
                    <h1 style={{ paddingLeft: "5px", fontSize: "3em", marginTop: 10 }}>Donation Received</h1>
                    <p style={{ fontSize: "2em", marginBottom: 10 }}>Thank you!</p>
                    <p style={{ fontSize: "4em", color:"#05d5f4" }}><AiFillCheckCircle /></p>
                </div>
            </div>
        </>
    )
}