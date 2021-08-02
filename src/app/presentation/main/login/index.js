import React from 'react';
import Header from "../../@shared/header";
import styles from "../home/styles.module.css";
import RegisterCreds from "../../@shared/register-credentials";
import tree from '../../../../assets/images/tree.jpg';
import avatar from '../../../../assets/images/graduate.jpeg';
import {useSelector} from "react-redux";


function Login() {
    const currentVoter = useSelector(state => state.auth.voter);

    return (
        <>
            <Header />
            <div className={styles.avatar}>
                <img className={styles.avatar_img} src={currentVoter.avatar} alt="Tree" style={{width: '100%', height: '100%'}}/>
            </div>
            <RegisterCreds />
        </>
    );
}

export default Login
