import { signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function myProfile() {
    const { data: session, status } = useSession();
    const router = useRouter();

    return (
        <div className="w-64 rounded-lg border bg-white p-4 shadow-lg">
            {status === 'authenticated' ? (
                <>
                    <div className="mb-4 text-sm font-medium">mail@example.com</div>
                    <div className="space-y-2">
                        <hr></hr>
                        <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900" href="#">
                            <UserIcon className="h-4 w-4" />
                            <span>Profilul meu</span>
                        </a>
                        <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900" href="#">
                            <CreditCardIcon className="h-4 w-4" />
                            <span>Achizițiile mele</span>
                        </a>
                        <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900" href="#">
                            <ArrowUpSquareIcon className="h-4 w-4" />
                            <span>Favorite</span>
                        </a>
                        <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900" href="#">
                            <LogOutIcon className="h-4 w-4" />
                            <span onClick={() => signOut()}>Logout</span>
                        </a>
                    </div>
                </>
            ) : (
                <>
                    <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900" href="#">
                        <UserIcon className="h-4 w-4" />
                        <span onClick={() => router.push("/login")}>Logheazǎ-te</span>
                    </a>
                </>
            )
            }
        </div >
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


function ArrowUpSquareIcon(props) {
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
            <path d="M12 7.69C11.21 6.74 9.88 6 8.5 6C6.12 6 4 7.74 4 10.2c0 2.87 3.13 5.05 8 8.8 4.87-3.75 8-5.93 8-8.8 0-2.46-2.12-4.2-4.5-4.2-1.38 0-2.71.74-3.5 1.69z" />
        </svg>
    )
}

function CreditCardIcon(props) {
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}

function LogOutIcon(props) {
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
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    )
}
