import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <ol>
                <NavLink to="/" >Home</NavLink>
            </ol>
            <ol>
                <NavLink to="/contact" >Contact</NavLink>
            </ol>

        </>

    )
}
