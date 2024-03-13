import React from "react";
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import ProfilePopOut from "./my-profile";
import { useState, useRef } from "react";
import styles from "@/styles/animations.module.scss";
import { useRouter } from "next/router";
import SearchInput from "./search-input";

export function HeaderShop({ }) {
    const router = useRouter();

    const [isPopOutVisible, setIsPopOutVisible] = useState(false);
    const timeoutRef = useRef(null);

    const showPopOut = () => {
        setIsPopOutVisible(true);
        clearTimeout(timeoutRef.current);
    };

    const hidePopOut = () => {
        timeoutRef.current = setTimeout(() => {
            setIsPopOutVisible(false);
        }, 500);
    };

    return (
        <header className="flex justify-between items-center border-b pb-4 mt-2">
            <div className="flex items-center space-x-4 ml-[15px]">
                <nav className="flex space-x-4">
                    <Link className="text-gray-500 hover:text-gray-900" href="#">
                        <h1>Piticlic</h1>
                    </Link>
                </nav>
            </div>
            <div className=" flex items-center space-x-4 mr-[15px]">
                <SearchInput />
                <div onClick={() => router.push('/cart')} className="cursor-pointer relative pr-3">
                    <ShoppingCartIcon className="text-black h-6 w-6" />
                    <div className="absolute top-[-6px] right-[0px] h-[20px] w-[20px] rounded-full bg-gray-800 border-2 border-white" />
                    <span className="absolute top-[-4.5px] right-[6.3px] select-none text-white text-[12px] font-semibold font-mono">0</span>
                </div>
                <div
                    className="relative"
                    onMouseEnter={showPopOut}
                    onMouseLeave={hidePopOut}
                >
                    <UserIcon className='text-black' />
                    {isPopOutVisible && (
                        <div className={`${styles.animateFadeInUp} absolute top-[40px] right-0 pt-2`}>
                            <ProfilePopOut />
                        </div>
                    )}
                </div>
            </div>
        </header>);
}

function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}

