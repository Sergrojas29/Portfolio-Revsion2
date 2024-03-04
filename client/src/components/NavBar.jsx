import { NavLink, Outlet } from "react-router-dom";
import '../style/navBar.css'


export default function NavBar() {
    return (
        <>
            <div className="navBar">
                <div id="logo">
                </div>
                <div id="links">
                    <NavLink className='link' to="/" >Home</NavLink>
                    <NavLink className='link' to="/contact" >About Me</NavLink>
                    <NavLink className='link' to="/project" >Project</NavLink>
                    <NavLink className='link' to="/education" >Education</NavLink>
                    <NavLink className='link' to="/demos" >Demos</NavLink>
                    <NavLink className='link' to="/contact" >Contact Me</NavLink>
                </div>
            </div>

        </>

    )
}
