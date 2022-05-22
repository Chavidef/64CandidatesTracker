import React from 'react';
import { Link } from 'react-router-dom';


const PendingRow = ({ candidate, key }) => {
    const { id, firstName, lastName, phoneNumber, email } = candidate

    return (
        <>
            <tr key={key}>
                <td>
                    <Link to={`/viewcandidatedetails/${id}`}>
                        View Details
                    </Link>
                </td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
            </tr>
        </>
        )
}
export default PendingRow;

