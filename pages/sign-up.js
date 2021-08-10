import React, { Component } from "react";
import Link from "next/link";
import Head from 'next/head';

import Input from "../components/inputComponent/input";

import styles from '.././styles/onboard/sign_up.module.scss'


class SignUp extends Component{
    
    

    render(){
        return(
            <div>

                <Head>
                    <title>Klas - Bookings </title>
                    <meta name="Klas" content="Klas" content="Remote teaching platform for creating engaging online classes anywhere, anytime. Share and monetize your knowledge." />
                    <link rel="icon" href="/klas.svg" />
                </Head>
                   
                <section className={styles.container}>
                    
                   
                </section>
                
               
            </div>
        );
    }
}

export default SignUp;