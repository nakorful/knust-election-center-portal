import React, {useState} from 'react';
import { RegisterCredsStyles } from "./styles";
import {Textbox} from "../textbox/styles";
import {PrimaryBtn} from "../button/styles";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function RegisterCreds() {
    const currentVoter = useSelector(state => state.auth.voter);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const loginUser = (e) => {
        e.preventDefault();

        const resourceUrl = 'http://localhost:9001/api/v1/login';

        axios.post(resourceUrl, {
            studentId: currentVoter.studentId,
            username,
            password
        }).then(res => {
            if (res.status === 200) {
                console.log(res.data);

                history.push('/election-page');
            }
        }).catch(err => console.log(err));
    }

    return (
        <RegisterCredsStyles>
            <p>{currentVoter.name}</p>
            <Textbox placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Textbox className='password' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <PrimaryBtn onClick={loginUser}>Login</PrimaryBtn>
            {/*<p className='forgot-pass'>Forgot password?</p>*/}
        </RegisterCredsStyles>
    )
}

export default RegisterCreds
