import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useCounts } from '../CountsContext';


const ViewDetails = () => {
    const [candidate, setCandidate] = useState({ id: '', firstName: '', lastName: '', email: '', phoneNumber: '', registrationStatus: '', notes:'' });

    const { id } = useParams();
    const history = useHistory();

    const { updateCounts } = useCounts();

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidates/viewcandidatedetails?id=${id}`);
            setCandidate(data);
        }
        getCandidate();
    }, [candidate.registrationStatus]);

    const onUpdateStatusClick = async (status) => {
        const { data } = await axios.post(`/api/candidates/updatestatus`, { id, status });
        setCandidate(data);
        updateCounts();
        history.push(`/viewcandidatedetails/${id}`);
    }

    return (
        <>
            <div className='container mt-5 col-md-5'>
                <div className='card card-body bg-light mt-3'>
                    <h3>Name: {candidate.firstName} {candidate.lastName}</h3>
                    <h3>Email: {candidate.email}</h3>
                    <h3>Phone: {candidate.phoneNumber}</h3>
                    <h3>Status: {candidate.registrationStatus}</h3>
                    <h3>Notes:</h3>
                    <h6>{candidate.notes}</h6>
                    {candidate.registrationStatus == 'pending' && <div className='row mt-2'>
                        <button className='btn btn-block btn-success' onClick={() => onUpdateStatusClick('confirmed')}>Confirm</button>
                        <button className='btn btn-block btn-danger' onClick={() => onUpdateStatusClick('refused')}>Refuse</button>
                    </div>}
                    
                </div>
            </div>
            </>
        )
}

export default ViewDetails;
