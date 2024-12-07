import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return(
        <ul className="navbar">
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active_link' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'active_link' : ''}>About</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active_link' : ''}>Contact</NavLink></li>
            <li><NavLink to="/dashboard" className={({isActive}) => isActive ? 'active_link' : ''}>Dashboard</NavLink></li>
        </ul>
    )
};
