import React from 'react';
import Header from "../../@shared/header";
import RegisterID from "../../@shared/register-id";
import styles from './styles.module.css';

function Home() {

    return (
        <>
            <Header />
            <div className={styles.avatar} />
            <RegisterID />
        </>
    )
}

export default Home
