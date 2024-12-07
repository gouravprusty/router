import { useNavigate } from "react-router-dom"

export default function Contact() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashboard')
    };
    return(
        <>
            <h1>Contact Page</h1>
            <button onClick={handleClick}>Go to Dashboard</button>
        </>
    )
};
