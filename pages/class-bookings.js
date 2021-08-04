import React from 'react';
import { useRouter } from 'next/router';

import Header from "../components/Dashboard/header";
import Sidebar from "../components/Dashboard/sidebar";
import classBookings from "../data/classBookings";



const Classes = () => {

    const router = useRouter();

    const onPress = () => {
        router.push("/all-classes")
    };

   
    return (
    <div className="h-screen w-screen flex flex-row">

        <Head>
          <title>Klas - Class bookings </title>
          <meta name="Klas" content="Klas is your online content management, Share and moneytize your knowledge." />
          <link rel="icon" href="/klas.svg" />
        </Head>
                            
        <Sidebar b1={"#808080"} b2={"white"} b3={"#808080"} b4={"#808080"}/>

        <div className="flex flex-col pr-10 pl-3 w-full">
            
            <Header />
            
            <div style={{borderRadius: 20}} className="w-full flex flex-col justify-start items-start bg-gray-50 mt-5 py-5 px-5">

                <button className="ml-3 text-sm font-semibold pb-5" onClick={onPress}>Back</button>
               
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="table-auto min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                    Name
                                    </th>
                                    <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                    Contact
                                    </th>
                                    <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                    Class Name
                                    </th>
                                    <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                    Currency
                                    </th>
                                    <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                    Amount
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                { classBookings.map(item => (
                                    <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                        {item.email}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.classTitle}</div>
                                    </td>
                                    
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.currency}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                                    
                                    </tr>
                                )) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                    
            </div>

        </div>
    </div>
    )
}

export default Classes;
