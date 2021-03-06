import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


function HeaderItem({icon, url}) {
    return (
        <Link href={url}>
            <a
                target="_blank" rel="noopener noreferrer"
                className="flex justify-center items-center cursor-pointer hover:animate-bounce w-8">
                <FontAwesomeIcon icon={icon}  style={{color: '#fff', height: 20, width: 20,}}/>
            </a>
        </Link>

    )
}

export default HeaderItem;