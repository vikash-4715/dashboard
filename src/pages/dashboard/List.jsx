import { useEffect, useState } from "react"
import Item from "./Item"

export default function List(props){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
        // console.log(users)
    },[])

    return(
        <div className="table table-responsive">
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users && users.map((item)=>(
                        // <tr>
                        //     <td>{item.id}</td>
                        //     <td>{item.name}</td>
                        // </tr>  
                        <Item user={item}/>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

// what are props and states