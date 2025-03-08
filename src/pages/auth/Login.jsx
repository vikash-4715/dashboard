import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
            <div className="container-main">
                <div className="login-container">
                    <h1 className='mb-3 text-start'>Login</h1>
                    <form>
                        <div className="form-group text-start mb-3">
                            <label className="d-block mb-1">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group text-start mb-3">
                            <label className="d-block mb-1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                    </form>
                    <div className='d-flex justify-content-center'>
                        <Link className="btn btn-primary me-1 flex-fill" to="/dashboard">Submit</Link><br/>
                        <Link className="btn btn-secondary ms-1 flex-fill" to={"/"}>Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}