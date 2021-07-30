import React, {useState} from 'react'
import Link from "next/link";
import ButtonBlue from "./ButtonBlue";
import {useRouter} from "next/router";



function Welcome() {

    //const [modalVisible, setModalVisible] = useState(false);
    const router =useRouter();

    const onPress = () => {
        router.push(`https://web.elpisacademy.us/`)
    };



    return (
        <div className="flex flex-col-reverse md:flex-row h-screen lg:pb-0 lg:h-screen w-full px-5 lg:px-0 lg:pl-10 justify-between">
            
            <div className="flex flex-col h-1/2 lg:h-full w-full lg:w-1/2 justify-center items-center">
                <div className="flex flex-col justify-start items-start">
                    <p className="text-black font-semibold text-3xl md:text-6xl text-start rounded-md font-sans">A Remote Teaching Tool For Online Classes</p>
                    <p className="text-black font-base text-lg text-start font-sans mt-5 w-full md:w-5/6">
                        Run engaging online classes with built-in support for payment processing and student management.
                    </p>
                    <div className="mt-5 lg:mt-10 flex justify-center">
                        <ButtonBlue title="GET STARTED" onPress={onPress}/>
                    </div>
                
                </div>
            </div>

            <div className="flex h-1/2 lg:py-0 lg:h-full w-full lg:w-1/2 justify-center items-center">
                <img src="/klas-dashboard.png" alt="Dashboard" className=" h-full w-full object-contain"/>
            </div>

            
        </div>
    )
}

export default Welcome;