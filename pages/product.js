import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HeaderShop } from "@/components/ui/header-shop"
import { Input } from "@/components/ui/input"

export default function product() {
    return (
        // max witdh 1200px
        <div className="flex flex-col items-center w-screen">
            <div className="max-w-screen-xl">
                <HeaderShop />
                <div className="max-w-7xl mx-auto py-12 px-4 sm:pl-6 sm:pr-16 lg:pr-12">
                    <nav className="mb-8">
                        <ol className="flex space-x-2">
                            <li>
                                <Link className="text-blue-600" href="#">
                                    Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link className="text-blue-600" href="#">
                                    Trending
                                </Link>
                            </li>
                            <li>/</li>
                            <li aria-current="page" className="text-gray-500">
                                Plush toys for babies
                            </li>
                        </ol>
                    </nav>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="md:col-span-3">
                            <img
                                alt="Plush toys for babies"
                                className="w-full h-auto rounded-lg"
                                height="400"
                                src="http://www.piticlic.ro/components/com_jshopping/files/img_products/full_P367_0.png"
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "contain",
                                    backgroundColor: "#f5f5f5",
                                }}
                                width="600"
                            />
                            <div className="flex space-x-2 mt-4">
                                <img
                                    alt="Plush toy 1"
                                    className="w-24 h-24 rounded-lg border-2 border-gray-300"
                                    height="100"
                                    src="http://www.piticlic.ro/images/products/P367_2.jpg"
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="100"
                                />
                                <img
                                    alt="Plush toy 2"
                                    className="w-24 h-24 rounded-lg border-2 border-gray-300"
                                    height="100"
                                    src="http://www.piticlic.ro/images/products/P367_3.jpg"
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="100"
                                />
                                <img
                                    alt="Plush toy 3"
                                    className="w-24 h-24 rounded-lg border-2 border-gray-300"
                                    height="100"
                                    src="http://www.piticlic.ro/images/products/P367_4.jpg"
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="100"
                                />
                                <img
                                    alt="Plush toy 4"
                                    className="w-24 h-24 rounded-lg border-2 border-gray-300"
                                    height="100"
                                    src="http://www.piticlic.ro/images/products/P367_5.jpg"
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="100"
                                />
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <Badge variant="secondary">Value for money</Badge>
                                <Badge>1-2 yr olds</Badge>
                                <Badge variant="secondary">Good for gifting</Badge>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h1 className="text-3xl font-bold">Plush toys for babies</h1>
                            <p className="mt-2 text-gray-500">
                                Ideal age 1 to 2 years, helps develop social & emotional growth, adorable soft toy with realistic eyes.
                            </p>
                            <div className="flex items-center mt-4">
                                <StarIcon className="text-yellow-400 w-5 h-5" />
                                <StarIcon className="text-yellow-400 w-5 h-5" />
                                <StarIcon className="text-yellow-400 w-5 h-5" />
                                <StarIcon className="text-yellow-400 w-5 h-5" />
                                <StarHalfIcon className="text-yellow-400 w-5 h-5" />
                                <p className="text-gray-600 ml-2">4.4</p>
                                <Link className="text-blue-600 ml-1" href="#">
                                    24 reviews
                                </Link>
                            </div>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">$25.60</span>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
                                        Qty:
                                    </label>
                                    <div className="flex mt-1">
                                        <Button variant="outline">-</Button>
                                        <Input className="mx-2 w-16 text-center" placeholder="1" type="text" />
                                        <Button variant="outline">+</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Button className="w-full">Buy Now</Button>
                                <Button className="w-full mt-2" variant="outline">
                                    Add to Cart
                                </Button>
                            </div>
                            <div className="mt-8">
                                <h1 className="text-xl font-semibold">Delivery Options</h1>
                                <div className="mt-2">
                                    <p className="text-zinc-500">🚚 100% Original Products</p>
                                    <p className="text-zinc-500">💳 Pay on delivery might be available</p>
                                    <p className="text-zinc-500">🔄 Easy 30 days returns</p>
                                </div>
                                <div className="mt-4">
                                    <Input placeholder="Enter Pincode" />
                                    <ChevronRightIcon className="w-5 h-5 absolute inset-y-0 right-0 mr-3" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <h1 className="text-xl font-semibold">Product Description</h1>
                                <ul className="list-disc pl-5 mt-2">
                                    <li className="text-zinc-500">Ultra-Portable Soft Toy For Your Child To Bond With On The Go</li>
                                    <li className="text-zinc-500">Very Soft Stuffed Toy That Is The Perfect Companion For Your Child</li>
                                    <li className="text-zinc-500">Intricate Details Develop Your Child's Sense Of Touch</li>
                                </ul>
                                <Link className="text-blue-600 mt-2" href="#">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ChevronRightIcon(props) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function StarHalfIcon(props) {
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
            <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
        </svg>
    )
}


function StarIcon(props) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
