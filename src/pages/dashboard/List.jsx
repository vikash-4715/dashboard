import { useEffect, useState } from "react"
import Item from "./Item"

const usersList = [
    { "id": 1, "name": "Alice", "date": "2025-03-01", "amount": 150.75 },
    { "id": 2, "name": "Bob", "date": "2025-03-02", "amount": 230.50 },
    { "id": 3, "name": "Charlie", "date": "2025-03-03", "amount": 120.40 },
    { "id": 4, "name": "David", "date": "2025-03-04", "amount": 99.99 },
    { "id": 5, "name": "Eve", "date": "2025-03-05", "amount": 340.20 },
    { "id": 6, "name": "Frank", "date": "2025-03-06", "amount": 500.00 },
    { "id": 7, "name": "Grace", "date": "2025-03-07", "amount": 75.55 },
    { "id": 8, "name": "Hannah", "date": "2025-03-08", "amount": 620.30 },
    { "id": 9, "name": "Irene", "date": "2025-03-09", "amount": 195.60 },
    { "id": 10, "name": "Jack", "date": "2025-03-10", "amount": 150.80 },
    // { "id": 11, "name": "Karen", "date": "2025-03-11", "amount": 245.70 },
    // { "id": 12, "name": "Leo", "date": "2025-03-12", "amount": 399.99 },
    // { "id": 13, "name": "Mia", "date": "2025-03-13", "amount": 299.40 },
    // { "id": 14, "name": "Nina", "date": "2025-03-14", "amount": 499.20 },
    // { "id": 15, "name": "Oliver", "date": "2025-03-15", "amount": 100.00 },
    // { "id": 16, "name": "Paul", "date": "2025-03-16", "amount": 75.10 },
    // { "id": 17, "name": "Quincy", "date": "2025-03-17", "amount": 580.50 },
    // { "id": 18, "name": "Rachel", "date": "2025-03-18", "amount": 289.30 },
    // { "id": 19, "name": "Steve", "date": "2025-03-19", "amount": 150.00 },
    // { "id": 20, "name": "Tina", "date": "2025-03-20", "amount": 120.10 }      
  ]
  

export default function List(props){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        setUsers(usersList)    
    })

    return(
        <div className="table table-responsive">
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
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