import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import './Style.css'
import Social from "./components/Social"

export default function App(){
    return(
        <>
            <NavBar/>
            <Social/>
            <Outlet/>
        </>
    )
}