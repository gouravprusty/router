import { useParams } from "react-router-dom"

export default function Login() {
    const {id} = useParams();
    return(
        <h1>User: {id}</h1>
    )
};
