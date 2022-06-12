// import { useNavigate } from 'react-router-dom'
export default function Login() {
    // const navigate = useNavigate()
    function goAbout() {
        // navigate('/about?id=1', { replace: true })
        // navigate('/about/1', { replace: true })
    }
    return (
        <div>
            <button onClick={goAbout}>Login</button>
        </div>
    )
}