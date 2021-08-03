import React, { Component } from "react";

import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

import styles from "./index.module.scss";

class Create extends Component{

    render(){
        return(
            <div>
                <div>
                    <div className="content-container">
                        <Header />
                        <Sidebar />
                        <div className="content">

                            <div className={styles.wrapper}>
                                
                                <div className={styles.calendly}>
                                    
                                </div>
                                
                                <div className={styles.create}>
                                    <div className={styles.cNav}>
                                        <h3>Class details</h3>
                                    </div>

                                    <form className={styles.form}>
                                        <input type="text" name="class_title" className={styles.fStyle} placeholder="class title" />

                                        <input type="text" name="class_description" className={styles.fStyle} placeholder="class description" />

                                        <textarea type="text" name="class_requirements" className={styles.fStyle} placeholder="class requirements"></textarea>

                                        <div className={styles.cost}>
                                            <input type="text" name="class_cost" className={styles.fStyle} placeholder="class cost" />

                                            <select className={styles.fStyle}>
                                                <option value="">NGN</option>
                                            </select>
                                        </div>

                                        <div className={styles.coverImg}>
                                            <span>
                                                <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.9631 16.803C29.9344 16.7697 29.8922 16.75 29.8479 16.75H0.152272C0.107912 16.75 0.0660168 16.7694 0.0370597 16.803C0.00810249 16.8363 -0.00483583 16.8809 0.00163333 16.925C0.0059461 16.9527 0.453858 19.7024 3.93026 19.7024H26.0699C29.546 19.7024 29.9939 16.9527 29.9985 16.925C30.0047 16.8809 29.9917 16.8363 29.9631 16.803ZM17.2333 18.7394H12.7665V17.7124H17.2333V18.7394Z" fill="#c4c4c4"/>
                                                <path d="M3.23672 15.6819H26.7629C27.103 15.6819 27.379 15.4058 27.379 15.0657V0.61611C27.379 0.276017 27.103 0 26.7629 0H3.23672C2.89662 0 2.62061 0.276017 2.62061 0.61611V15.0657C2.62061 15.4058 2.89662 15.6819 3.23672 15.6819ZM4.77699 2.15639H25.2226V13.5255H4.77699V2.15639Z" fill="#c4c4c4"/>
                                                </svg>
                                                Upload a cover image
                                            </span>

                                            <input type="file" name="cover_image" className={styles.fStyle} />
                                        </div>

                                        <div className={styles.submit}>
                                            <span className={styles.cc}>
                                                <input type="checkbox" />
                                                Recurring classes.
                                            </span>
                                            
                                            <input type="submit" className={styles.ss} value="Create Class" />
                                        </div>
                                    </form>
                                </div>
                                
                            </div>                           
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;