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
                    <title>Klas</title>
                    <meta name="Klas" content="Klas" content="Remote teaching platform for creating engaging online classes anywhere, anytime. Share and monetize your knowledge." />
                    <link rel="icon" href="/klas.svg" />
                </Head>
                   
                <section className={styles.container}>
                <div className={styles.narrativeSection}>
                    <div>
                        <h2>Create, manage monetize cohort-based classes.</h2>
                    </div>
                </div>
                <div className={styles.formSection}>
                    <div>
                        <div className={styles.formHeader}>
                            <img src="/klas.svg" alt=""/>
                            <p>Begin your journey, Sign Up!</p>
                        </div>
                        <div className={styles.formElements}>
                            <Input type="text" placeholder="Name" name="fullname"/>
                            <Input type="email" placeholder="Email" name="email"/>
                            <Input type="text" placeholder="Name of School" name="school"/>
                            <select name="category">
                                <option value="">Category</option>
                                <option value="Entrepreneurship">Entrepreneurship</option>
                                <option value="Coding">Coding</option>
                                <option value="Crypto trading">Crypto trading</option>
                                <option value="Stock trading">Stock trading</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Design">Design</option>
                                <option value="Animation">Animation</option>
                                <option value="Makeup">Makeup</option>
                                <option value="Other">Other</option>
                            </select>
                            <Input type="password" name="password" placeholder="Password"/>
                            <p className={styles.terms}>
                                By signing up, you're automatically agreeing to the <a href="/">terms and conditions</a> of Klas.
                            </p>
                            <button className={styles.button}>Sign Up</button>
                        </div>
                        <div className={styles.formSwitch}>                            
                            <p>
                                <span>Already have an account? </span>
                                <Link href="/sign-in" className={styles.link}>Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
                
               
            </div>
        );
    }
}

export default SignUp;