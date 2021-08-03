import React, {useState} from 'react';
import Link from "next/link";

import Header from "../components/Dashboard/header";
import Sidebar from "../components/Dashboard/sidebar";



const CreateClass = () => {

    const [recurring, setRecurring] = useState(false);

    const onPress = () => {
        setRecurring(true)
    };

    return (
    <div className="h-screen w-screen flex flex-row">
                            
        <Sidebar b1={"white"} b2={"#808080"} b3={"#808080"} b4={"#808080"}/>

        <div className="flex flex-col pr-10 pl-3 w-full">
            
            <Header />
            
            <div className="w-full flex flex-row justify-between items-start my-5 h-full">

                <div style={{borderRadius: 20}} className="w-2/3 flex flex-row bg-gray-50 justify-between items-center h-full">

                </div>
               
                <div style={{borderRadius: 20}} className="w-96 h-auto bg-gray-50 p-6 ml-16">
                    <div className="mb-5">
                        <h3 className="text-sm font-semibold font-sans rounded text-gray-900">Class details</h3>
                    </div>

                    <form className="flex flex-col">
                        <input 
                            type="text" 
                            name="class_title" 
                            className="mb-5 text-xs text-gray-500 h-12 w-full focus:ring-gray-500 focus:border-gray-500 block sm:text-sm border-white shadow-sm rounded-lg bg-white" 
                            placeholder="Class title" 
                        />

                        <input 
                            type="text" 
                            name="class_description" 
                            className="mb-5 text-xs text-gray-500 h-12 w-full focus:ring-gray-500 focus:border-gray-500 block sm:text-sm border-white shadow-sm rounded-lg bg-white" 
                            placeholder="Class description" 
                            />

                        <textarea 
                            type="text" 
                            name="class_requirements" 
                            className="mb-5 text-xs text-gray-500 h-24 w-full focus:ring-gray-500 focus:border-gray-500 block sm:text-sm border-white shadow-sm rounded-lg bg-white" 
                            placeholder="Class requirements">

                        </textarea>

                        <div className="flex flex-row">
                            <input 
                                type="number" 
                                name="class_cost" 
                                className="mb-5 text-xs text-gray-500 h-12 w-full focus:ring-gray-500 focus:border-gray-500 block sm:text-sm border-white shadow-sm rounded-lg bg-white" 
                                placeholder="Class cost" 
                            />

                            <select className="ml-5 w-24 hover:cursor-pointer bg-white focus:ring-white focus:border-white border-white rounded-lg h-8 p-0 text-sm font-semibold px-2 m-0 text-black">
                                <option >NGN</option>
                                <option >USD</option>
                            </select>
                        </div>

                        <div className="h-12 flex flex-row">
                            <span className="ml-3 text-sm font-semibold font-sans rounded">
                                <input type="checkbox" className="mr-3 shadow-md border-gray-500 focus:ring-gray-500 focus:border-gray-500 rounded"/>
                                Recurring classes.
                            </span>
                        </div>

                        {recurring && <p>Recurring UI</p>}

                        <button
                                type="submit"
                                className="mt-5 inline-flex justify-center h-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                Submit
                        </button>
                    </form>   
                            
                </div>
                    
            </div>
        </div>
    </div>
    )
}

export default CreateClass;
