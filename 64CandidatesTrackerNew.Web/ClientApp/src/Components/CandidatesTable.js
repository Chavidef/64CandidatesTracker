import React from 'react';
import CandidateRow from './CandidateRow';

const CandidatesTable = ({ candidates }) => {

    
    return (
        <>
            <div className='container'>
                <table className='table table-hover table-striped table-bordered mt-5'>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Notes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!!candidates && candidates.map(c =>
                            <CandidateRow
                                key={c.id}
                                candidate={c}
                            />)}
                    </tbody>
                </table>
            </div>
         </>
        )
}

export default CandidatesTable;