import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Details(){

    const { id } = useParams();
    const [details, setDetails] = useState(null);

    const address = (details?.address?.street + ' ' + details?.address?.suite  + ' ' + details?.address?.city  + ' ' + details?.address?.zipcode)
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => setDetails(json))
    },[])
    
    if (!details) return <h2 className="text-center">Loading...</h2>;


    return(
        <div className="main-content">
            <div className="container">
                <div className="py-3">
                    <Link to='/dashboard' className="btn btn-secondary mb-3">Back</Link>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h3>User Details</h3>
                                </div>
                                <div className="card-body">
                                    <div id="user-profile">
                                        {/* <div className="text-center">
                                            <img id="user-avatar" src="https://via.placeholder.com/150" alt="User Avatar" className="rounded-circle mb-3" />
                                        </div> */}
                                        <h4 className="card-title"> { details?.name ? details?.name : '--' } </h4>
                                        <p><strong>Email:</strong> <span> { details?.email ? details?.email : '--' } </span></p>
                                        <p><strong>Phone:</strong> <span> { details?.phone ? details?.phone : '--' } </span></p>
                                        <p><strong>Website:</strong> <span> { details?.website ? details?.website : '--' } </span></p>
                                        <p><strong>Company:</strong> <span> { details?.company?.name ? details?.company?.name : '--' } </span></p>
                                        <p><strong>Address:</strong> <span> { address ? address : '--' }</span></p>
                                        {/* <p><strong>Address:</strong> <span> { details?.address?.street ? details?.address?.street : '--' } { details?.address?.suite ? details?.address?.suite : '--' } { details?.address?.city ? details?.address?.city : '--' } { details?.address?.zipcode ? details?.address?.zipcode : '--' }</span></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}