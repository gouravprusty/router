import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about')
    };
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Move to About Page</button>
        </div>
    )
};
