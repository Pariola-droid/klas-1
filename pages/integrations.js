import React, {useState} from 'react';

import Header from "../components/Dashboard/header";
import Sidebar from "../components/Dashboard/sidebar";



const Integrations = () => {

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
            
            <div style={{borderRadius: 20}} className="w-full h-full flex flex-col justify-start items-start bg-gray-50 my-5 py-5 px-5">
                
                    
            </div>
        </div>
    </div>
    )
}

export default Integrations;
