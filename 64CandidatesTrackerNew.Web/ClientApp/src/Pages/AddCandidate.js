import React from 'react';
import useForm from "../Hooks/useForm";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AddCandidate = () => {

    const [formData, setFormData] = useForm({ firstName: '', lastName: '', email: '', phoneNumber: '', notes: '', registrationStatus:'pending' });
    const history = useHistory();

    const onSubmitClick = async () => {
        await axios.post('/api/candidates/addcandidate', formData);
        history.push('/');
    }

    return (
        <>
            <div className="col-md-6 offset-md-2 card card-body bg-light">
                <h3>Add new Candidate</h3>
                <input onChange={setFormData}
                    value={formData.firstName}
                    className="form-control"
                    placeholder="First Name"
                    name="firstName" />
                <br />
                <input onChange={setFormData}
                    value={formData.lastName}
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName" />
                <br />
                <input onChange={setFormData}
                    value={formData.email}
                    className="form-control"
                    placeholder="Email"
                    name="email" />
                <br />
                <input onChange={setFormData}
                    value={formData.phoneNumber}
                    className="form-control"
                    placeholder="Phone Number"
                    name="phoneNumber" />
                <br />
                <textarea onChange={setFormData}
                    value={formData.notes}
                    name="notes"
                    placeholder="Notes"
                    className="form-control"
                    rows="5" />
                <br />
                <button onClick={onSubmitClick} className="btn btn-primary">Submit</button>
            </div>
        </>
        )
}
export default AddCandidate;