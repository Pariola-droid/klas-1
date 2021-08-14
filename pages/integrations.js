import React, {useState} from 'react';
import Head from 'next/head';

import Header from "../components/Dashboard/header";
import Sidebar from "../components/Dashboard/sidebar";
import Integrations from "../components/Integrations";

import zoom from "../public/zoom.png";
import gmeet from "../public/gmeet.png";
// import gmail from "../public/gmail.png";
import calendar from "../public/calendar.png";
import stripe from "../public/stripe.png";
import flutterwave from "../public/flutterwave.png";

const apis = [
    {
        id: "zoom",
        imageUri: zoom,
        title: "Zoom",
        description: "Automatically include Zoom meeting details in your cohort bookings.",
    },
    {
        id: "gmeet",
        imageUri: gmeet,
        title: "Google Meet",
        description: "Automatically include Google meet details in your cohort bookings.",
    },
    {
        id: "calender",
        imageUri: calendar,
        title: "Calender Connection",
        description: "Connect your calendar to Klas and manage your calendar settings.",
    },
    {
        id: "gmail",
        imageUri: "https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png",
        title: "Gmail for Business",
        description: "Coming Soon",
    },
    {
        id: "stripe",
        imageUri: stripe,
        title: "Stripe",
        description: "Coming Soon",
    },
    {
        id: "flutterwave",
        imageUri: flutterwave,
        title: "Flutterwave",
        description: "Coming Soon",
    },
]

const integrations = () => {

    const [recurring, setRecurring] = useState(false);

    const onPress = () => {
        setRecurring(true)
    };


    return (
    <div className="h-screen w-screen flex flex-row">

        <Head>
          <title>Klas - Integrations </title>
          <meta name="Klas" content="Klas is your online content management, Share and moneytize your knowledge." />
          <link rel="icon" href="/klas.svg" />
        </Head>
                            
        <Sidebar b1={"#808080"} b2={"#808080"} b3={"#808080"} b4={"#fff"}/>

        <div className="flex flex-col pr-10 pl-3 w-full">
            
            <Header />
            
            <div style={{borderRadius: 20}} className="w-full h-full flex flex-col justify-start items-center bg-gray-50 my-5 py-5 px-5">
                <div className="grid grid-cols-3">
                    { apis.map(item => (

                        <Integrations key={item.id} imageUri={item.imageUri} title={item.title} description={item.description}/>

                    )) }
                </div>
                
                    
            </div>
        </div>
    </div>
    )
}

export default integrations;
