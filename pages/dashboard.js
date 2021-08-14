import React, { Component } from "react";
import { FlatList } from "react-native";
import Link from "next/link";
import Head from 'next/head';

import Header from "../components/Dashboard/header";
import Sidebar from "../components/Dashboard/sidebar";
import ClassCard from "../components/Dashboard/classcard";

import Chart from "chart.js"

import Analysis from "../components/Analytics/index";
import user from "../data/user";
import course from "../data/course";

import welcome from "../assets/images/Avatar.svg"
import Tclass from "../assets/images/Vector (4).svg"
import Tbook from "../assets/images/_user-profile.svg"
import Tearn from "../assets/images/clarity_dollar-solid.svg"
import Tavg from "../assets/images/Vector (5).svg"




class Dashboard extends Component{
    
    
     componentDidMount(){
        let draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line = Chart.controllers.line.extend({
            draw: function() {
                draw.apply(this, arguments);
                let ctx = this.chart.chart.ctx;
                let _stroke = ctx.stroke;
                ctx.stroke = function() {
                    ctx.save();
                    ctx.shadowColor = '#8AF1B9';
                    ctx.shadowBlur = 100;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 20;
                    _stroke.apply(this, arguments)
                    ctx.restore();
                }
            }
        });
        var ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
                datasets: [{
                    label: 'Bookings analysis',
                    data: [50, 46, 50, 45, 50, 10, 30, 60, 80, 5],
                    backgroundColor: [
                        'transparent'
                    ],
                    pointBackgroundColor: ['#c4c4c4'],
                    borderColor: [
                        "#c4c4c4"                        
                    ],
                    borderWidth: 1,
                    display: false
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        display: false,
                        gridLines: {
                            display: false,
                            color: "black"
                        },
                    }],
                    xAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false,
                            color: "black"
                        },
                    }]
                },
                layout: {
                    padding:5
                },
                legend: {
                    display: false
                }
            }
        });
    }

    render(){
        return(
            <div className="h-screen w-screen flex flex-row">

                <Head>
                    <title>Klas - Dashboard </title>
                    <meta name="Klas" content="Klas" content="Remote teaching platform for creating engaging online classes anywhere, anytime. Share and monetize your knowledge." />
                    <link rel="icon" href="/klas.svg" />
                </Head>
                            
                <Sidebar b1={"white"} b2={"#808080"} b3={"#808080"} b4={"#808080"}/>

                <div className="flex flex-col pr-10 pl-3">
                    
                    <Header />
                    
                    <div className="w-full flex flex-row justify-between ">
                        <div className="mt-5">
                            <div style={{borderRadius: 20, height: 260, width: 700}} className="bg-gray-50 mb-8 flex flex-row justify-between items-center p-5">
                                <div className="w-full flex flex-col ">
                                    <h1 className="font-bold text-gray-900 text-xl py-3">Welcome back, {user.firstName}</h1>

                                    <p className="text-justify pr-3 text-gray-900 text-sm pt-2">{user?.summary} </p>
                                    
                                    <Link href="/create-class" >
                                        <button className="w-28 mt-8 text-sm font-semibold h-10 rounded-md hover:cursor-pointer text-white bg-black text-center justify-center items-center">Create cohort</button>
                                    </Link>
                                </div>

                                <img style={{height: 180}} src={welcome} alt="welcome svg"/>
                            </div>
                            <div style={{height: 260, width: 700}}>
                                <div className="flex flex-row justify-between items-center py-3">
                                    <p className="font-sans rounded font-semibold">Your cohorts</p>
                                    <Link href="/all-classes">
                                        <p className="hover:cursor-pointer font-sans rounded font-semibold text-gray-700">View all</p>
                                    </Link>
                                </div>
                                <FlatList
                                    style={{width: '100%', }}
                                    data={course}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) =><ClassCard title={item.title} createdAt={item.createdAt} bookings={item.bookings || 0}/>}
                                />
                                
                            </div>
                        </div>

                        <div style={{borderRadius: 20}} className="w-full h-auto bg-gray-50 p-6 ml-16 mt-5">
                            <div className="mb-8 flex flex-col items-center">
                                <Analysis icon={Tclass} title="Total cohorts" number="105" />
                                <Analysis icon={Tbook} title="Total bookings" number="1154" />
                                <Analysis icon={Tearn} title="Total earnings" number="NGN 111,595,000" />
                                <Analysis icon={Tavg} title="average weekly bookings" number="372" />
                            </div>

                            <div className="w-full">
                                <div className="flex px-3 flex-row justify-between items-center w-full h-auto">
                                    <h3 className="text-sm font-semibold">
                                        Analytics
                                    </h3>

                                    <span className=" ">
                                        <select
                                            id="type"
                                            name="type"
                                            //value={""} onChange={(e) => (e.target.value)}
                                            required
                                            style={{width: 100}}
                                            className="hover:cursor-pointer bg-gray-900 rounded-lg h-8 p-0 text-sm font-semibold px-2 m-0 text-white"
                                            >
                                            <option>weekly</option>
                                            <option>monthly</option>
                                        </select>
                                    </span>
                                </div>
                                
                                <div className="mt-8">
                                    <canvas id="myChart" width="330" height="145"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;