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
          <meta name="Klas" content="Klas is your online content management, Share and moneytize your knowledge." />
          <link rel="icon" href="/klas.svg" />
        </Head>
                            
        <Sidebar b1={"#808080"} b2={"#808080"} b3={"#fff"} b4={"#808080"}/>

        <div className="flex flex-col pr-10 pl-3 w-full">
            
            <Header />
            
            <div style={{borderRadius: 20}} className="w-full h-full flex flex-col justify-start items-start bg-gray-50 my-5 py-5 px-5">
                <div className="flex flex-row justify-start items-start py-3 w-full pl-8">
                    <p className="font-sans rounded font-semibold text-start text-sm">Your cards</p>
                </div>

                <div className="flex flex-row justify-center items-center px-10 w-full">
                    <div className="flex flex-col ">
                        <p className="font-sans rounded font-semibold text-start my-3 italic">Coming Soon</p>
                        <p className="font-sans rounded text-sm text-start text-gray-700 w-3/4">Create virtual and plastic cards for your business and personal needs...</p>

                        <button className="w-28 mt-8 text-sm font-semibold h-10 rounded-md hover:cursor-pointer text-white bg-black text-center justify-center items-center">Create card</button>
                        
                    </div>

                    <div className="flex h-full w-1/2 justify-center items-center">
                        <img src="/emptycards.svg" alt="" className=" h-full w-full object-contain"/>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
    )
}

export default Payments;
