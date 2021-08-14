import React from 'react';
import { useRouter } from 'next/router';

const ClassWhite = (props) => {

    const {title, createdAt, bookings} = props;
    const router = useRouter();

    const onPress = () => {
        router.push("/class-bookings")
    };

    return (
        <div className="hover:cursor-pointer flex flex-row py-5 pr-5 " onClick={onPress}>
            <div style={{
                backgroundColor: "gray", 
                height: 30, 
                width: 5, 
                borderTopLeftRadius: 2, 
                borderBottomLeftRadius: 2, 
                marginTop: 20,
                }}
                className="">
            </div>
            <div 
                style={{
                    borderTopLeftRadius: 5, 
                    borderBottomLeftRadius: 5,  
                    width: 5,
                    }}
                className="bg-gray-700 h-44 ">
                
            </div>
            <div 
                style={{
                    borderTopRightRadius: 5, 
                    borderBottomRightRadius: 5,
                    }}
                className="bg-gray-500 w-32 h-44 flex flex-col justify-between py-5 pl-1">
                
                <p className="text-white text-xs font-sans rounded font-semibold wrap">{title}</p>
                {/* <div>
                    <p className="text-gray-400 text-xs font-sans rounded ">Date created</p>
                    <p className="text-white text-xs font-sans rounded">{createdAt}</p>
                </div> */}
                <div>
                    <p className="text-gray-100 text-xs font-sans rounded ">Total bookings</p>
                    <p className="text-white text-xs font-sans rounded">{bookings}</p>
                </div>
            </div>
        </div>
    )
}

export default ClassWhite;
