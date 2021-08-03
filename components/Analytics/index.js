import React, { Component } from "react";
import Link from "next/link";
import styles from "./analysis.module.scss"

class Analysis extends Component{
    render(){
        return(
            <div>
                
                <div className="w-80 mb-3 h-14 rounded-lg bg-white shadow-sm flex justify-start items-center p-3">
                    <div className="px-3">
                        <img src={this.props.icon} alt=""/>
                    </div>

                    <div className="flex flex-col justify-between items-start w-full">
                        <small className="text-gray-700 text-xs font-semibold capitalize font-sans rounded">{this.props.title}</small>
                        <h4 className="text-black text-sm font-semibold font-sans rounded">{this.props.number}</h4>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Analysis