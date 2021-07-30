import React, {useState} from 'react'
import TopBar from "./TopBar";
import Welcome from "./Welcome";



function Landing() {

    const onPress = () => {
    };

    return (
        <div name="home" id="home" className="flex flex-col bg-white h-screen md:px-10 overflow-hidden w-full justify-start">
            <TopBar />
            <Welcome />
        </div>
    )
}

export default Landing;