import React, { Component } from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss"
import logo from "../../assets/images/logo.svg"


const Sidebar = (props) => {

    const {b1, b2, b3, b4} = props;
    
    return(
        <div>
            
            <div className="mx-3 h-full py-5">
                <div style={{width: 70, borderRadius: 20}} className="bg-black h-full flex flex-col justify-start items-center p-3 ">
                    <div className="my-5 hover:cursor-pointer p-1">
                        <img src={logo} alt=""  className="h-12 w-12 object-contain"/>
                    </div>

                    <ul className="flex flex-col justify-between pt-12 pb-10 items-center h-full">
                        <li>
                            <Link href="/dashboard" className="">
                                <svg className="hover:cursor-pointer" width="20" height="20" viewBox="0 0 26 27" fill="none" xmlns="http://www.  w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 0H3.5C3.042 0 2.648 1.49012e-08 2.3 0.082C1.76127 0.21073 1.2687 0.486093 0.876861 0.877579C0.485022 1.26906 0.209215 1.76139 0.0799999 2.3C-7.45058e-08 2.648 0 3.04 0 3.5V8.5C0 8.958 1.49012e-08 9.352 0.082 9.7C0.21073 10.2387 0.486093 10.7313 0.877579 11.1231C1.26906 11.515 1.76139 11.7908 2.3 11.92C2.648 12 3.04 12 3.5 12H8.5C8.958 12 9.352 12 9.7 11.918C10.2387 11.7893 10.7313 11.5139 11.1231 11.1224C11.515 10.7309 11.7908 10.2386 11.92 9.7C12 9.352 12 8.96 12 8.5V3.5C12 3.042 12 2.648 11.918 2.3C11.7893 1.76127 11.5139 1.2687 11.1224 0.876861C10.7309 0.485022 10.2386 0.209215 9.7 0.0799999C9.352 -7.45058e-08 8.96 0 8.5 0H3.6ZM2.766 2.028C2.852 2.008 2.986 2 3.6 2H8.4C9.016 2 9.148 2.006 9.234 2.028C9.41366 2.07096 9.57791 2.16285 9.70853 2.29347C9.83915 2.42409 9.93104 2.58834 9.974 2.768C9.994 2.852 10 2.984 10 3.6V8.4C10 9.016 9.994 9.148 9.972 9.234C9.92904 9.41366 9.83715 9.57791 9.70653 9.70853C9.57591 9.83915 9.41166 9.93104 9.232 9.974C9.15 9.992 9.018 10 8.4 10H3.6C2.984 10 2.852 9.994 2.766 9.972C2.58634 9.92904 2.42209 9.83715 2.29147 9.70653C2.16085 9.57591 2.06896 9.41166 2.026 9.232C2.008 9.15 2 9.018 2 8.4V3.6C2 2.984 2.006 2.852 2.028 2.766C2.07096 2.58634 2.16285 2.42209 2.29347 2.29147C2.42409 2.16085 2.58834 2.06896 2.768 2.026L2.766 2.028ZM17.6 0H17.5C17.042 0 16.648 1.49012e-08 16.3 0.082C15.7613 0.21073 15.2687 0.486093 14.8769 0.877579C14.485 1.26906 14.2092 1.76139 14.08 2.3C14 2.648 14 3.04 14 3.5V8.5C14 8.958 14 9.352 14.082 9.7C14.2107 10.2387 14.4861 10.7313 14.8776 11.1231C15.2691 11.515 15.7614 11.7908 16.3 11.92C16.648 12 17.04 12 17.5 12H22.5C22.958 12 23.352 12 23.7 11.918C24.2387 11.7893 24.7313 11.5139 25.1231 11.1224C25.515 10.7309 25.7908 10.2386 25.92 9.7C26 9.352 26 8.96 26 8.5V3.5C26 3.042 26 2.648 25.918 2.3C25.7893 1.76127 25.5139 1.2687 25.1224 0.876861C24.7309 0.485022 24.2386 0.209215 23.7 0.0799999C23.352 -7.45058e-08 22.96 0 22.5 0H17.6ZM16.766 2.028C16.852 2.008 16.986 2 17.6 2H22.4C23.016 2 23.148 2.006 23.234 2.028C23.4137 2.07096 23.5779 2.16285 23.7085 2.29347C23.8391 2.42409 23.931 2.58834 23.974 2.768C23.994 2.852 24 2.984 24 3.6V8.4C24 9.016 23.992 9.148 23.972 9.234C23.929 9.41366 23.8372 9.57791 23.7065 9.70853C23.5759 9.83915 23.4117 9.93104 23.232 9.974C23.148 9.994 23.016 10 22.4 10H17.6C16.984 10 16.852 9.994 16.766 9.972C16.5863 9.92904 16.4221 9.83715 16.2915 9.70653C16.1609 9.57591 16.069 9.41166 16.026 9.232C16.008 9.15 16 9.018 16 8.4V3.6C16 2.984 16.006 2.852 16.028 2.766C16.071 2.58634 16.1628 2.42209 16.2935 2.29147C16.4241 2.16085 16.5883 2.06896 16.768 2.026L16.766 2.028ZM3.5 14H8.5C8.958 14 9.352 14 9.7 14.082C10.2387 14.2107 10.7313 14.4861 11.1231 14.8776C11.515 15.2691 11.7908 15.7614 11.92 16.3C12 16.648 12 17.04 12 17.5V22.5C12 22.958 12 23.352 11.918 23.7C11.7893 24.2387 11.5139 24.7313 11.1224 25.1231C10.7309 25.515 10.2386 25.7908 9.7 25.92C9.352 26 8.96 26 8.5 26H3.5C3.042 26 2.648 26 2.3 25.918C1.76127 25.7893 1.2687 25.5139 0.876861 25.1224C0.485022 24.7309 0.209215 24.2386 0.0799999 23.7C-7.45058e-08 23.352 0 22.96 0 22.5V17.5C0 17.042 1.49012e-08 16.648 0.082 16.3C0.21073 15.7613 0.486093 15.2687 0.877579 14.8769C1.26906 14.485 1.76139 14.2092 2.3 14.08C2.648 14 3.04 14 3.5 14ZM3.6 16C2.984 16 2.852 16.006 2.766 16.028C2.58634 16.071 2.42209 16.1628 2.29147 16.2935C2.16085 16.4241 2.06896 16.5883 2.026 16.768C2.008 16.85 2 16.982 2 17.6V22.4C2 23.016 2.006 23.148 2.028 23.234C2.07096 23.4137 2.16285 23.5779 2.29347 23.7085C2.42409 23.8391 2.58834 23.931 2.768 23.974C2.852 23.994 2.984 24 3.6 24H8.4C9.016 24 9.148 23.992 9.234 23.972C9.41366 23.929 9.57791 23.8372 9.70853 23.7065C9.83915 23.5759 9.93104 23.4117 9.974 23.232C9.994 23.148 10 23.016 10 22.4V17.6C10 16.984 9.994 16.852 9.972 16.766C9.92904 16.5863 9.83715 16.4221 9.70653 16.2915C9.57591 16.1609 9.41166 16.069 9.232 16.026C9.15 16.008 9.018 16 8.4 16H3.6ZM17.6 14H17.5C17.042 14 16.648 14 16.3 14.082C15.7613 14.2107 15.2687 14.4861 14.8769 14.8776C14.485 15.2691 14.2092 15.7614 14.08 16.3C14 16.648 14 17.04 14 17.5V22.5C14 22.958 14 23.352 14.082 23.7C14.2107 24.2387 14.4861 24.7313 14.8776 25.1231C15.2691 25.515 15.7614 25.7908 16.3 25.92C16.648 26.002 17.042 26.002 17.5 26.002H22.5C22.958 26.002 23.352 26.002 23.7 25.92C24.2384 25.7909 24.7305 25.5154 25.122 25.124C25.5134 24.7325 25.7889 24.2404 25.918 23.702C26 23.354 26 22.96 26 22.502V17.5C26 17.042 26 16.648 25.918 16.3C25.7893 15.7613 25.5139 15.2687 25.1224 14.8769C24.7309 14.485 24.2386 14.2092 23.7 14.08C23.352 14 22.96 14 22.5 14H17.6ZM16.766 16.028C16.852 16.008 16.986 16 17.6 16H22.4C23.016 16 23.148 16.006 23.234 16.028C23.4137 16.071 23.5779 16.1628 23.7085 16.2935C23.8391 16.4241 23.931 16.5883 23.974 16.768C23.994 16.852 24 16.984 24 17.6V22.4C24 23.016 23.992 23.148 23.972 23.234C23.929 23.4137 23.8372 23.5779 23.7065 23.7085C23.5759 23.8391 23.4117 23.931 23.232 23.974C23.148 23.994 23.016 24 22.4 24H17.6C16.984 24 16.852 23.992 16.766 23.972C16.5863 23.929 16.4221 23.8372 16.2915 23.7065C16.1609 23.5759 16.069 23.4117 16.026 23.232C16.008 23.15 16 23.018 16 22.4V17.6C16 16.984 16.006 16.852 16.028 16.766C16.071 16.5863 16.1628 16.4221 16.2935 16.2915C16.4241 16.1609 16.5883 16.069 16.768 16.026L16.766 16.028Z" fill={b1}/>
                                </svg>
                            </Link>    
                        </li>
                        
                        <li>
                            <Link href="/all-classes">
                                <svg className="hover:cursor-pointer" width="20" height="24" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 25.5C0.918479 25.5 0.600537 25.3683 0.366117 25.1339C0.131696 24.8995 0 24.5815 0 24.25V14.25C0 13.9185 0.131696 13.6005 0.366117 13.3661C0.600537 13.1317 0.918479 13 1.25 13C1.58152 13 1.89946 13.1317 2.13388 13.3661C2.3683 13.6005 2.5 13.9185 2.5 14.25V24.25C2.5 24.5815 2.3683 24.8995 2.13388 25.1339C1.89946 25.3683 1.58152 25.5 1.25 25.5ZM7.5 25.5C7.16848 25.5 6.85054 25.3683 6.61612 25.1339C6.3817 24.8995 6.25 24.5815 6.25 24.25V1.75C6.25 1.41848 6.3817 1.10054 6.61612 0.866116C6.85054 0.631696 7.16848 0.5 7.5 0.5C7.83152 0.5 8.14946 0.631696 8.38388 0.866116C8.6183 1.10054 8.75 1.41848 8.75 1.75V24.25C8.75 24.5815 8.6183 24.8995 8.38388 25.1339C8.14946 25.3683 7.83152 25.5 7.5 25.5ZM13.75 25.5C13.4185 25.5 13.1005 25.3683 12.8661 25.1339C12.6317 24.8995 12.5 24.5815 12.5 24.25V9.25C12.5 8.91848 12.6317 8.60054 12.8661 8.36612C13.1005 8.1317 13.4185 8 13.75 8C14.0815 8 14.3995 8.1317 14.6339 8.36612C14.8683 8.60054 15 8.91848 15 9.25V24.25C15 24.5815 14.8683 24.8995 14.6339 25.1339C14.3995 25.3683 14.0815 25.5 13.75 25.5ZM20 25.5C19.6685 25.5 19.3505 25.3683 19.1161 25.1339C18.8817 24.8995 18.75 24.5815 18.75 24.25V19.25C18.75 18.9185 18.8817 18.6005 19.1161 18.3661C19.3505 18.1317 19.6685 18 20 18C20.3315 18 20.6495 18.1317 20.8839 18.3661C21.1183 18.6005 21.25 18.9185 21.25 19.25V24.25C21.25 24.5815 21.1183 24.8995 20.8839 25.1339C20.6495 25.3683 20.3315 25.5 20 25.5Z" fill={b2}/>
                                </svg>
                            </Link>    
                        </li>

                        <li>
                            <Link href="/payments">
                                <svg className="hover:cursor-pointer" width="22" height="18" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.625 0.625C3.63044 0.625 2.67661 1.02009 1.97335 1.72335C1.27009 2.42661 0.875 3.38044 0.875 4.375V6.25H27.125V4.375C27.125 3.38044 26.7299 2.42661 26.0266 1.72335C25.3234 1.02009 24.3696 0.625 23.375 0.625H4.625Z" fill={b3}/>
                                    <path d="M0.875 15.625V8.125H27.125V15.625C27.125 16.6196 26.7299 17.5734 26.0266 18.2766C25.3234 18.9799 24.3696 19.375 23.375 19.375H4.625C3.63044 19.375 2.67661 18.9799 1.97335 18.2766C1.27009 17.5734 0.875 16.6196 0.875 15.625ZM18.6875 13.75C18.4389 13.75 18.2004 13.8488 18.0246 14.0246C17.8488 14.2004 17.75 14.4389 17.75 14.6875C17.75 14.9361 17.8488 15.1746 18.0246 15.3504C18.2004 15.5262 18.4389 15.625 18.6875 15.625H22.4375C22.6861 15.625 22.9246 15.5262 23.1004 15.3504C23.2762 15.1746 23.375 14.9361 23.375 14.6875C23.375 14.4389 23.2762 14.2004 23.1004 14.0246C22.9246 13.8488 22.6861 13.75 22.4375 13.75H18.6875Z" fill={b3}/>
                                </svg>
                            </Link>
                        </li>

                        <li>
                            <Link href="/integrations">
                                <svg className="hover:cursor-pointer" width="20" height="22" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0146 10.4434C12.1387 10.4434 11.3183 10.7832 10.6972 11.4043C10.0791 12.0254 9.73631 12.8457 9.73631 13.7217C9.73631 14.5977 10.0791 15.418 10.6972 16.0391C11.3183 16.6572 12.1387 17 13.0146 17C13.8906 17 14.7109 16.6572 15.332 16.0391C15.9502 15.418 16.293 14.5977 16.293 13.7217C16.293 12.8457 15.9502 12.0254 15.332 11.4043C15.0287 11.0986 14.6676 10.8562 14.2698 10.6913C13.8719 10.5263 13.4453 10.442 13.0146 10.4434ZM25.0937 17.3428L23.1777 15.7051C23.2685 15.1484 23.3154 14.5801 23.3154 14.0146C23.3154 13.4492 23.2685 12.8779 23.1777 12.3242L25.0937 10.6865C25.2385 10.5626 25.3421 10.3976 25.3907 10.2134C25.4394 10.0292 25.4308 9.8345 25.3662 9.65527L25.3398 9.5791C24.8125 8.10456 24.0224 6.73776 23.0078 5.54492L22.9551 5.4834C22.8319 5.33853 22.6676 5.23439 22.4841 5.18471C22.3005 5.13503 22.1062 5.14213 21.9267 5.20508L19.5478 6.05176C18.6689 5.33105 17.6904 4.7627 16.6299 4.36719L16.1699 1.87988C16.1352 1.69251 16.0443 1.52012 15.9093 1.38564C15.7743 1.25115 15.6016 1.16093 15.414 1.12695L15.3349 1.1123C13.8115 0.836914 12.206 0.836914 10.6826 1.1123L10.6035 1.12695C10.416 1.16093 10.2433 1.25115 10.1082 1.38564C9.97324 1.52012 9.88234 1.69251 9.84764 1.87988L9.38475 4.37891C8.33425 4.77757 7.35563 5.34455 6.48729 6.05762L4.0908 5.20508C3.91141 5.14163 3.71695 5.13427 3.53327 5.18398C3.34959 5.2337 3.18539 5.33813 3.06248 5.4834L3.00975 5.54492C1.99693 6.73903 1.20703 8.10549 0.677718 9.5791L0.651351 9.65527C0.519515 10.0215 0.627913 10.4316 0.923812 10.6865L2.86326 12.3418C2.77244 12.8926 2.7285 13.4551 2.7285 14.0117C2.7285 14.5742 2.77244 15.1367 2.86326 15.6816L0.929671 17.3369C0.784932 17.4608 0.68134 17.6259 0.632671 17.8101C0.584002 17.9943 0.592561 18.1889 0.65721 18.3682L0.683577 18.4443C1.21385 19.918 1.99608 21.2803 3.01561 22.4785L3.06834 22.54C3.19155 22.6849 3.35576 22.789 3.53933 22.8387C3.7229 22.8884 3.91721 22.8813 4.09666 22.8184L6.49315 21.9658C7.36619 22.6836 8.33885 23.252 9.39061 23.6445L9.8535 26.1436C9.8882 26.3309 9.9791 26.5033 10.1141 26.6378C10.2491 26.7723 10.4218 26.8625 10.6094 26.8965L10.6885 26.9111C12.2269 27.188 13.8024 27.188 15.3408 26.9111L15.4199 26.8965C15.6074 26.8625 15.7801 26.7723 15.9152 26.6378C16.0502 26.5033 16.1411 26.3309 16.1758 26.1436L16.6357 23.6563C17.6963 23.2578 18.6748 22.6924 19.5537 21.9717L21.9326 22.8184C22.112 22.8818 22.3065 22.8892 22.4901 22.8395C22.6738 22.7897 22.838 22.6853 22.9609 22.54L23.0137 22.4785C24.0332 21.2744 24.8154 19.918 25.3457 18.4443L25.3721 18.3682C25.498 18.0049 25.3896 17.5977 25.0937 17.3428ZM13.0146 18.8721C10.1699 18.8721 7.86424 16.5664 7.86424 13.7217C7.86424 10.877 10.1699 8.57129 13.0146 8.57129C15.8594 8.57129 18.165 10.877 18.165 13.7217C18.165 16.5664 15.8594 18.8721 13.0146 18.8721Z" fill={b4}/>
                                </svg>
                            </Link>    
                        </li>

                        <li className="mt-32"> 
                            <Link href="/">
                                <svg className="hover:cursor-pointer" width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.3875 10.5125L15.625 8.75L9.375 15L15.625 21.25L17.3875 19.4875L14.1625 16.25H26.25V13.75L14.1625 13.75L17.3875 10.5125ZM6.25 26.25L23.75 26.25C25.1375 26.25 26.25 25.125 26.25 23.75V18.75H23.75V23.75L6.25 23.75L6.25 6.25L23.75 6.25L23.75 11.25H26.25V6.25C26.25 4.875 25.1375 3.75 23.75 3.75L6.25 3.75C4.875 3.75 3.75 4.875 3.75 6.25L3.75 23.75C3.75 25.125 4.875 26.25 6.25 26.25Z" fill="#52525A"/>
                                </svg>
                            </Link>    
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    );
    
}

export default Sidebar;