import React from 'react'



const Integrations = ({imageUri, title, description}) => {
    return (
        <div className="flex flex-col justify-center items-center px-5 m-8">
            <div className="hover:cursor-pointer bg-white h-16 w-24 flex justify-center items-center rounded-lg px-3">
                <img src={imageUri} alt="" className="h-14 w-auto object-contain"/>
            </div>
            <p className="font-sans rounded font-semibold text-center my-3">{title}</p>
            <p className="font-sans rounded text-sm text-center text-gray-700">{description}</p>
        </div>
    )
}

export default Integrations;
