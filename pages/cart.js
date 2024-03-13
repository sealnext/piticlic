import { ItemShop } from '../components/item-shop';
import { Button } from "@/components/ui/button"
import { HeaderShop } from "@/components/header-shop"

export default function cart() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="max-w-screen-lg w-full">
                <HeaderShop />
                <div key="1" className="h-[100%] bg-white rounded-lg p-8">
                    <div className="flex flex-col lg:flex-row gap-8 mt-8">
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-xl font-semibold">Cart</h1>
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
                        <div>
                            <div className="max-w-md mr-auto md:order-1">
                                <h1 className="text-lg font-semibold mb-4">Select a delivery address</h1>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <input className="radio radio-primary" id="address1" name="delivery-address" type="radio" />
                                        <label className="flex-1 p-4 bg-gray-100 rounded-lg" htmlFor="address1">
                                            <p className="font-medium">Lydia George</p>
                                            <p className="text-sm text-gray-600">23475 Glacier View Dr, Eagle River, Alaska 99577, USA</p>
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input className="radio radio-primary" id="address2" name="delivery-address" type="radio" />
                                        <label className="flex-1 p-4 bg-gray-100 rounded-lg" htmlFor="address2">
                                            <p className="font-medium">George Clooney</p>
                                            <p className="text-sm text-gray-600">3448 Ile De France St #242, Fort Wainwright, Alaska 99703, USA</p>
                                        </label>
                                    </div>
                                </div>
                                <h1 className="text-lg font-semibold my-4">Choose Payment Method</h1>
                                <div className="space-y-2">
                                    <div className="flex mb-12 items-center space-x-2">
                                        <input className="radio radio-primary" id="payment2" name="payment-method" type="radio" />
                                        <label className="flex-1 p-4 bg-gray-100 rounded-lg" htmlFor="payment2">
                                            <div className="flex justify-between items-center">
                                                <p className="font-medium">Debit/Credit Card</p>
                                                <CreditCardIcon className="w-6 h-6 text-green-500" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-96">
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
