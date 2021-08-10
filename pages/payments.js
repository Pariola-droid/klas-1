import React, {useState} from 'react';
import Head from 'next/head';

import Header from "../components/Dashboard/header";
import Sidebar from "../components/Dashboard/sidebar";



const Payments = () => {

    const [recurring, setRecurring] = useState(false);

    const onPress = () => {
        setRecurring(true)
    };

  
    return (
    <div className="h-screen w-screen flex flex-row">

        <Head>
          <title>Klas - Payments </title>
          <meta name="Klas" content="Klas is your online content management, Share and monetize your knowledge." />
          <link rel="icon" href="/klas.svg" />
        </Head>
                            
        <Sidebar b1={"#808080"} b2={"#808080"} b3={"#fff"} b4={"#808080"}/>

        <div className="flex flex-col pr-10 pl-3 w-full">
            
            <Header />
            
            <div style={{borderRadius: 20}} className="w-full h-full flex flex-col justify-start items-start bg-gray-50 my-5 py-5 px-5">
                
                    
            </div>
        </div>
    </div>
    )
}

export default Payments;
