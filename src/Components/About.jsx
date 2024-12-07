import { useNavigate } from "react-router-dom"

export default function About() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/Contact')
    };
    return(
        <>
            <h1>About Page</h1>
            <button onClick={handleClick}>Go to Contact Page</button>
        </>
    )
};
