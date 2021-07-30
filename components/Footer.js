import {faFacebook, faTwitter, faInstagram, faMedium, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import HeaderItem from "./HeaderItem";
import {useRouter} from "next/router";
import Link from "next/link";



function Footer() {
    const router =useRouter();

    return (
        <div className="flex flex-col justify center lg:justify-start bg-black lg:items-start h-auto w-screen overflow-hidden px-10 lg:px-20 py-10">
            <div className="flex flex-col lg:flex-row w-full ">
                <div className="flex w-full lg:w-1/2 justify-between">
                    <div className="flex flex-col my-10 ">
                        <p className="mb-5 text-sm font-bold text-white">Legal</p>
                        <p onClick={() => router.push(`/`)} className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Terms</p>
                        <p onClick={() => router.push(`/`)} className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Privacy</p>
                    </div>
                    <div className="flex flex-col my-10 text-white">
                        <p className="mb-5 text-sm font-bold ">Contact Us</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">hello@tryklas.com</p>
                    </div>
                    <div className="flex flex-col my-10 text-white">
                        <p className="mb-5 text-sm font-bold text-white">Support</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">FAQs</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Blogs</p>
                    </div>
                </div>


                <div className="flex lg:flex-col w-full lg:w-1/2 justify-evenly lg:items-center">
                    <div className="flex justify-center items-center w-52">
                        <HeaderItem icon={faFacebook} url="https://facebook.com/klas" />
                        <HeaderItem icon={faTwitter} url="https://twitter.com/klas" />
                        <HeaderItem icon={faInstagram} url="https://instagram.com/klas" />
                        <HeaderItem icon={faLinkedin} url="https://www.linkedin.com/company/klas" />
                        <HeaderItem icon={faGithub} url="https://github.com/klas" />
                        <HeaderItem icon={faMedium} url="https://medium.com/klas" />
                    </div>
                    <Link href='/'>
                        <div className="flex cursor-pointer justify-center items-center ">
                            <img src="/klas.svg" alt="Klas Logo" className="h-12 w-12 object-contain"/>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex w-full  ">
                <p className="my-10 text-xs text-gray-200">Copyright @ 2021 Klas LLC |  All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer;

