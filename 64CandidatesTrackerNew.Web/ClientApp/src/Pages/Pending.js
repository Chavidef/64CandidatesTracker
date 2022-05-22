import React, { useState, useEffect } from 'react';
import PendingRow from '../Components/PendingRow'
import axios from 'axios';


const Pending = () => {
    const [candidates, setCandidates] = useState([{ id: '', firstName: '', lastName: '', email: '', phoneNumber: '', registrationStatus: '' }]);

    useEffect(() => {
        const getPendingCandidates = async () => {

            const { data } = await axios.get('/api/candidates/GetCandidatesForRegistrationStatus', 'pending');
            setCandidates(data);
        }

        getPendingCandidates();
    }, []);

    return (
        <>
            <div className='container'>
                <table className='table table-hover table-striped table-bordered mt-5'>
                    <thead>
                        <tr>
                            <td>View Details</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!!candidates && candidates.map(c =>
                            <PendingRow
                                key={c.id}
                                candidate={c}
                            />)}
                    </tbody>
                </table>
            </div>
        </>
        )
}

export default Pending;