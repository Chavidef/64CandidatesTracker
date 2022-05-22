import React from 'react';

const CandidateRow = ({ candidate, key }) => {
    const { firstName, lastName, phoneNumber, email, notes } = candidate

    return (
        <>
            <tr key={key}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
                <td>{notes}</td>
            </tr>
         </>
        )
}

export default CandidateRow;