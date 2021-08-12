import React, {Component} from "react"
import styles from "./header.module.scss";
import userIMG from "../../assets/images/Ellipse 2 (1).svg";


const user = 
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        imageUri: userIMG,
    }
;


const Header = () => {



    return(
        <div>
            <div className="flex w-full h-14 items-center justify-center py-3">
                <div className="w-full flex justify-between items-center pr-2 rounded">
                    <div className="relative flex justify-start items-start w-1/3">
                        <div className="absolute px-5 pt-3 ">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.433C19.566 12.8254 20.1536 10.803 19.9625 8.77748C19.7713 6.7519 18.8157 4.87524 17.2899 3.52927C15.7642 2.1833 13.783 1.46913 11.7494 1.53206C9.71581 1.59499 7.78257 2.43028 6.34298 3.86801C4.90213 5.30674 4.06411 7.24073 3.99968 9.27588C3.93524 11.311 4.64926 13.2942 5.99621 14.8211C7.34316 16.3481 9.22168 17.304 11.249 17.4941C13.2762 17.6842 15.2997 17.094 16.907 15.844L16.95 15.889L21.192 20.132C21.2849 20.2249 21.3952 20.2986 21.5166 20.3489C21.638 20.3992 21.7681 20.4251 21.8995 20.4251C22.0309 20.4251 22.161 20.3992 22.2824 20.3489C22.4038 20.2986 22.5141 20.2249 22.607 20.132C22.6999 20.0391 22.7736 19.9288 22.8239 19.8074C22.8742 19.686 22.9 19.5559 22.9 19.4245C22.9 19.2931 22.8742 19.163 22.8239 19.0416C22.7736 18.9202 22.6999 18.8099 22.607 18.717L18.364 14.475C18.3494 14.4606 18.3344 14.4466 18.319 14.433ZM16.243 5.28301C16.8076 5.83849 17.2566 6.50026 17.5642 7.23015C17.8717 7.96004 18.0318 8.7436 18.035 9.53563C18.0382 10.3277 17.8846 11.1125 17.583 11.8449C17.2814 12.5772 16.8377 13.2426 16.2777 13.8027C15.7176 14.3628 15.0522 14.8064 14.3198 15.108C13.5875 15.4096 12.8026 15.5632 12.0106 15.56C11.2186 15.5568 10.435 15.3968 9.70511 15.0892C8.97523 14.7816 8.31346 14.3326 7.75798 13.768C6.6479 12.6397 6.02863 11.1185 6.03508 9.53563C6.04152 7.95281 6.67316 6.43666 7.79239 5.31742C8.91162 4.19819 10.4278 3.56656 12.0106 3.56011C13.5934 3.55367 15.1147 4.17293 16.243 5.28301Z" fill="gray"/>
                            </svg>
                        </div>

                        <div className="h-full w-full">
                            <input
                            type="text"
                            placeholder="search"
                            className="pl-10 text-xs text-gray-500 h-full w-full focus:ring-gray-500 focus:border-gray-500 block sm:text-sm border-gray-50 rounded-full bg-gray-50"
                        />
                        </div>
                    </div> 
                    
                    <div className="flex items-center justify-center">
                        <div className="h-auto w-auto">
                            <svg width="14" height="18" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.01 19.01C7.01 20.11 7.9 21 9 21C10.1 21 10.99 20.11 10.99 19.01H7.01ZM15.88 14.82V9C15.88 5.75 13.63 3.03 10.59 2.31V1.59C10.59 0.71 9.88 0 9 0C8.12 0 7.41 0.71 7.41 1.59V2.31C4.37 3.03 2.12 5.75 2.12 9V14.82L0 16.94V18H18V16.94L15.88 14.82ZM13 11.01H10V14.01H8V11.01H5V9H8V6H10V9H13V11.01Z" fill="#52525A"/>
                            </svg>
                        </div>

                        <div className="px-10 h-auto w-auto">
                            <svg width="35" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.41 6L35 10.58L39.59 6L41 7.41L35 13.41L29 7.41L30.41 6Z" fill="#52525A"/>
                                <path d="M8.48813 10.6759H3.62813V13.9666H9.33188V16H1.09688V3.715H9.315V5.76531H3.62813V8.69312H8.48813V10.6759ZM20.8069 16H18.2756L13.3481 7.91687V16H10.8169V3.715H13.3481L18.2841 11.815V3.715H20.8069V16Z" fill="#52525A"/>
                            </svg>
                        </div>


                        <div className="flex items-center justify-center">
                            <div className="flex flex-col">
                                <h1 className="text-sm font-semibold font-sans rounded text-right pr-5">{user.firstName} {user.lastName}</h1>
                                <p className="text-xs font-semibold font-sans rounded text-right pr-5 text-gray-500">{user.email}</p>
                            </div>

                            <img src={user.imageUri} alt="" className="h-10 w-10 object-contain"/>
                        </div>

                    </div>
                </div> 
            </div>  

            { /*======= Modal Here ========*/ }
            { /*======= Modal Here ========*/ }

        </div>
    );

}

export default Header;