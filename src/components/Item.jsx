import { useEffect } from "react"

export default function Item(props){

    useEffect(()=>{

    })

    return(
        <tr>
            <td>
                {props.user.id}
            </td>
            <td>
                {props.user.name}
            </td>
        </tr>
    )
}

// what are props and states