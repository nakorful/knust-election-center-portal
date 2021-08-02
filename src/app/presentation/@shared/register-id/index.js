import React, {useState} from 'react';
import {RegisterIDStyles} from "./styles";
import {Textbox} from "../textbox/styles";
import {PrimaryBtn} from "../button/styles";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dispatchVoter } from "../../../data/redux/actions/auth";

function RegisterID() {
    const [studentId, setStudentId] = useState('');

    const handleChange = (e) => {
        setStudentId(e.target.value);
    }

    const history = useHistory();
    const dispatch = useDispatch();

    const validateStudentId = (e) => {
        e.preventDefault();

        const resourceUrl = 'http://localhost:9001/api/v1/validate/studentId';

        axios.post(resourceUrl, null, {params: {studentId}})
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    dispatch((dispatchVoter(res.data)));
                    history.push('/login');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <RegisterIDStyles>
            <Textbox placeholder='Enter your student ID number' value={studentId} onChange={handleChange}/>
            <PrimaryBtn onClick={validateStudentId}>Next</PrimaryBtn>
        </RegisterIDStyles>
    );
}

export default RegisterID
