import {faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import HeaderItem from "./HeaderItem";
import Link from "next/link";
import ButtonBlack from "./ButtonBlack";
import {useRouter} from "next/router";


function TopBar() {

    const onPress = () => {
        router.push(`/waitlist`)
    };

    return (
        <div className="flex w-full h-12 justify-between mt-5 px-5 lg:px-10 items-center overflow-hidden">
            <Link href='/'>
                <div className="flex cursor-pointer justify-center items-center ">
                    <img src="/klas.svg" alt="Klas Logo" className="h-12 w-12 object-contain"/>
                    <p className="text-black font-bold text-3xl text-start rounded-md font-sans">Klas.</p>
                </div>
            </Link>

        </div>
    )
}

export default TopBar;

