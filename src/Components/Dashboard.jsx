import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import './Dashboard.css';

export default function Dashboard() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/')
    };
    return(
        <>
            <h1>Dashboard Page</h1>
            <button onClick={handleClick}>Go to Home</button><br />
            <NavLink className={({isActive}) => isActive ? 'dashLink active' : 'dashLink'} to='first'>First</NavLink>
            <NavLink className={({isActive}) => isActive ? 'dashLink active' : 'dashLink'} to='second'>Second</NavLink>
            <NavLink className={({isActive}) => isActive ? 'dashLink active' : 'dashLink'} to='third'>Third</NavLink>
            <Outlet />
        </>
    )
};
