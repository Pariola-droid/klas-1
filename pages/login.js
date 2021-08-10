import React, { Component } from "react";
import Link from "next/link";
import Head from 'next/head';

import Input from "../components/inputComponent/input";

import styles from '.././styles/onboard/login.module.scss'


class Login extends Component{
    
    

    render(){
        return(
            <div>

                <Head>
                    <title>Klas - Bookings </title>
                    <meta name="Klas" content="Klas" content="Remote teaching platform for creating engaging online classes anywhere, anytime. Share and monetize your knowledge." />
                    <link rel="icon" href="/klas.svg" />
                </Head>
                   
                <section className={styles.container}>
                     <div className={styles.narrativeSection}>
                    <div>
                        <h2>Host, Manage and Monetize Your Online Classes</h2>
                    </div>
                </div>
                
                <div className={styles.formSection}>
                    <div>
                        <div className={styles.formHeader}>
                            <img src="/klas.svg" alt=""/>
                            <p>Ready? Log In!</p>
                        </div>

                        <div className={styles.formElements}>
                            <Input type="email" placeholder="Email" name="email" />
                            <Input type="password" name="password" placeholder="Password" />
                            <div className={styles.forgotPassword}>
                                <span>Forgot Password?</span>
                            </div>
                            <button className={styles.button}>Login</button>
                        </div>

                        <div className={styles.formSwitch}>
                            <p>
                                <span>Don’t have an account? </span>
                                <Link href="/sign-up" className={styles.link}>Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
                   
                </section>
                
               
            </div>
        );
    }
}

export default Login;