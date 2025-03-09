import { Link } from "react-router-dom";

export default function Item(props){


    return(
        <tr key={props?.user?.id}>
            <td>
                { props?.user?.id ? props?.user?.id : '--'}
            </td>
            <td>
                <Link to={`/details/${props?.user?.id}`}>
                    { props?.user?.name ? props?.user?.name : '--'}
                </Link>
            </td>
            <td>
                { props?.user?.email ? props?.user?.email : '--'}
            </td>
            <td>
                { props?.user?.phone ? props?.user?.phone : '--'}
            </td>
            <td>
                { props?.user?.website ? props?.user?.website : '--'}
            </td>
            <td>
                {props.user.company.name}
            </td>
            <td>
                {props.user.address.city}
            </td>
        </tr>
    )
}

// what are props and states