import { ItemShop } from './../components/ui/item-shop';
import { Button } from "@/components/ui/button"
import { HeaderShop } from "@/components/ui/header-shop"

export default function cart() {
    return (
        <div key="1" className="h-[100vh] bg-white rounded-lg shadow-lg p-8">
            <HeaderShop />
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
                    <ItemShop
                        image="http://www.piticlic.ro/components/com_jshopping/files/img_products/P298_0.png"
                        title="Cute worm baby toys"
                        price={45.20}
                        description="Express delivery in 3 days"
                        category="1-2 yr"
                    />
                </div>
                <div className="w-full lg:w-96">
                    <div className="mb-6">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">Cupoane</h3>
                            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
                                <div className="flex items-center">
                                    <input
                                        className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600"
                                        placeholder="Introduceți cuponul"
                                        type="text"
                                    />
                                    <Button className="ml-2" variant="ghost">
                                        Aplică
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Detalii preț</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>1 articol</span>
                                <span>45,20 RON</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Reducere cupon</span>
                                <span className="text-green-500">-2,50 RON</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Costuri livrare</span>
                                <span className="text-green-500">Livrare gratuită</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total de plată</span>
                                <span>67,09 RON</span>
                            </div>
                        </div>
                    </div>
                    <Button className="w-full">Finalizează comanda</Button>
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
