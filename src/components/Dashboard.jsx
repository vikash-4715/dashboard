import { useEffect, useState } from "react"
import Item from "./Item"

const usersList = [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" },
    { "id": 3, "name": "Charlie" },
    { "id": 4, "name": "David" },
    { "id": 5, "name": "Eve" }
  ]
  

export default function Dashboard(){
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])


    useEffect(()=>{
        console.log('use effect dashbaord')
        setName('Vikash')   
        setUsers(usersList)    
    })

    return(
        <>
        <p>Hii, {name}</p>
        <p>Dashboard</p>
        <table>
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

        </>
    )
}


// Props - > accept data from parent