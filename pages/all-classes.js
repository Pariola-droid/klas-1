import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Link from "next/link";
import Head from 'next/head';

import Header from "../components/Dashboard/header";
import Sidebar from "../components/Dashboard/sidebar";
import ClassWhite from "../components/Dashboard/classWhite";
import course from "../data/course";



const Classes = () => {


    return (
    <div className="h-screen w-screen flex flex-row">

        <Head>
          <title>Klas - All classes </title>
          <meta name="Klas" content="Klas is your online content management, Share and moneytize your knowledge." />
          <link rel="icon" href="/klas.svg" />
        </Head>
                            
        <Sidebar b1={"#808080"} b2={"white"} b3={"#808080"} b4={"#808080"}/>

        <div className="flex flex-col pr-10 pl-3 w-full">
            
            <Header />
            
            <div style={{borderRadius: 20}} className="w-full flex flex-col justify-start items-center bg-gray-50 mt-5 h-full">
               
                <div className="flex flex-row justify-start items-start py-3 w-full pl-8">
                    <p className="font-sans rounded font-semibold text-start text-sm">All classes</p>
                </div>

                <div className="grid grid-cols-7">
                    { course.map(item => (

                        <ClassWhite key={item.id} title={item.title} createdAt={item.createdAt} bookings={item.bookings || 0}/>

                    )) }
                </div>

                
                    
            </div>
        </div>
    </div>
    )
}

export default Classes

const styles = StyleSheet.create({})
