import { Link, NavLink, Outlet } from "react-router-dom";
import './First.css';

export default function First() {
    return(
        <>
            <h1>First Section</h1>
            <ul className="first_links">
                <li><NavLink to='gourav' className={({isActive}) => isActive ? 'active' : ''}>Gourav</NavLink></li>
                <li><NavLink to='manoj' className={({isActive}) => isActive ? 'active' : ''}>Manoj</NavLink></li>
                <li><NavLink to='happy' className={({isActive}) => isActive ? 'active' : ''}>Happy</NavLink></li>
            </ul>
            <Outlet/>
        </>
    )
};
