import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import './Style.css'

export default function App(){
    return(
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}