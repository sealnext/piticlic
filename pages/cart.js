import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function cart() {
    return (
        <div key="1" className="bg-white rounded-lg shadow-lg p-8">
            <header className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4">
                    <FlagIcon className="text-black h-6 w-6" />
                    <nav className="hidden sm:flex space-x-4">
                        <Link className="text-gray-500 hover:text-gray-900" href="#">
                            Home
                        </Link>
                        <Link className="text-gray-500 hover:text-gray-900" href="#">
                            Collections
                        </Link>
                        <Link className="text-gray-500 hover:text-gray-900" href="#">
                            Contact
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
            </header>
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold">Cart</h2>
                        <div className="flex space-x-2">
                            <TruckIcon className="text-gray-500 h-6 w-6" />
                            <span className="text-sm text-gray-500">Express</span>
                            <CreditCardIcon className="text-gray-500 h-6 w-6" />
                            <span className="text-sm text-gray-500">Payment</span>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 mb-6">
                        <img
                            alt="Cute worm baby toys"
                            className="w-16 h-16 bg-gray-200 rounded"
                            height="64"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                            }}
                            width="64"
                        />
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Cute worm baby toys</h3>
                            <div className="text-sm text-gray-500">
                                <span>1-2 yr</span> · <span>Girl</span> · <span>Express delivery in 3 days</span>
                            </div>
                            <div className="text-lg font-semibold mt-1">$45.20</div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost">-</Button>
                            <span>1</span>
                            <Button variant="ghost">+</Button>
                        </div>
                        <XIcon className="text-gray-500 h-6 w-6" />
                    </div>
                </div>
                <div className="w-full lg:w-96">
                    <div className="mb-6">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">Coupons</h3>
                            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
                                <div className="flex items-center">
                                    <input
                                        className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600"
                                        placeholder="Enter coupon code"
                                        type="text"
                                    />
                                    <Button className="ml-2" variant="ghost">
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Gifting</h3>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">Buying for a loved one?</p>
                            <GiftIcon className="text-purple-500 h-6 w-6" />
                        </div>
                        <Button className="mt-2" variant="ghost">
                            Add gift wrap
                        </Button>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Price Details</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>1 item</span>
                                <span>$45.20</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Coupon discount</span>
                                <span className="text-green-500">-$2.50</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Charges</span>
                                <span className="text-green-500">Free Delivery</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total Amount</span>
                                <span>$67.09</span>
                            </div>
                        </div>
                    </div>
                    <Button className="w-full">Place order</Button>
                </div>
            </div>
        </div>
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


function FlagIcon(props) {
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
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}


function GiftIcon(props) {
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
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect width="20" height="5" x="2" y="7" />
            <line x1="12" x2="12" y1="22" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
    )
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


function TruckIcon(props) {
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
            <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
            <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
            <circle cx="7" cy="18" r="2" />
            <path d="M15 18H9" />
            <circle cx="17" cy="18" r="2" />
        </svg>
    )
}


function XIcon(props) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
