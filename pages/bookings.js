import React, { Component } from "react";
import Link from "next/link";
import Head from 'next/head';

import Input from "../components/inputComponent/input";

import styles from '.././styles/bookings/bookings.module.scss'


class Bookings extends Component{
    
    

    render(){
        return(
            <div>

                <Head>
                    <title>Klas - Bookings </title>
                    <meta name="Klas" content="Klas" content="Remote teaching platform for creating engaging online classes anywhere, anytime. Share and monetize your knowledge." />
                    <link rel="icon" href="/klas.svg" />
                </Head>
                   
                <section className={styles.container}>
                    
                    <div className={styles.header}>
                        <img src="/klas.svg" alt="" className={styles.kLogo}/>
                        
                        <h1 className={styles.title}>
                            Become a dangerous product designer in 2 minutes.
                        </h1>

                        <div className={styles.tutor}>
                            <img src="/mickey.png" alt="" />

                            with <span>pariola philip</span>
                        </div>

                        <div className={styles.schedule}>
                            cohort schedule <span></span> Aug 9 - Aug 20, 2021.
                        </div>
                    </div>

                    <div className={styles.details}>
                        <div className={styles.desc}>
                            <h3>What you'll learn</h3>
                            <p>Product design is the process designers use to blend user needs with business goals to help brands make consistently successful products.</p>
                        </div>
                        
                        <div className={styles.req}>
                            <h3>Requirements</h3>
                            <p>Buy enough popcorn</p>
                        </div>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.iFlex}>
                            <Input type="text" name="user_name" placeholder="Your Name"/>
                            <Input type="email" name="email_address" placeholder="Your Email"/>
                        </div>                        
                        <button className={styles.button}>Proceed to Book</button>
                        <div className={styles.powered}>
                            Powered by Klas
                        </div>
                    </div>
                </section>
                
               
            </div>
        );
    }
}

export default Bookings;