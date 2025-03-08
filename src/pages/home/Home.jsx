import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div className="container-main">
            <div className="login-container">
                <h1 className='mb-2'>Welcome to Our Website</h1>
                <p className='mb-3'>Select an option to continue:</p>
                <div className='d-flex justify-content-center'>
                    <Link className="btn btn-primary me-1 flex-fill" to="/login">Login</Link><br/>
                    <Link className="btn btn-secondary ms-1 flex-fill" to={"/signup"}>Signup</Link>
                </div>
            </div>
        </div>
    )
}