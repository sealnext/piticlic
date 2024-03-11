import React from "react";
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function HeaderShop({ }) {
    return (<header className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center space-x-4">
            <nav className="flex space-x-4">
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                    <h1>Piticlic</h1>
                </Link>
            </nav>
        </div>
        <div className="flex items-center space-x-4">
            <SearchIcon className="text-gray-500 h-6 w-6" />
            <ShoppingCartIcon className="text-gray-500 h-6 w-6" />
            <Avatar>
                <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
        </div>
    </header>);
}

function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
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

