import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidatesTable from '../Components/CandidatesTable';
import { useParams } from 'react-router-dom';



const ViewTable = () => {
    const [candidates, setCandidates] = useState([{ id: '', firstName: '', lastName: '', email: '', phoneNumber: '', registrationStatus: '' }]);
    const { status } = useParams();

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`/api/candidates/GetCandidatesForRegistrationStatus?status=${status}`);
            setCandidates(data);
        }

        getCandidates();
    }, [status]);

    return (
        <>
            <h1>{status}</h1>
            <CandidatesTable
                candidates={candidates}
            />
        </>
    )
}

export default ViewTable;