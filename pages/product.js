import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeaderShop } from "@/components/header-shop"
import { Input } from "@/components/ui/input"
import 'swiper/css';
import 'swiper/css/thumbs';
import React, { useState } from 'react';
import ImageCarousel from '@/components/image-slider';

export default function product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [
        {
            src: 'http://www.piticlic.ro/components/com_jshopping/files/img_products/full_P367_0.png',
            aspectRatio: '600/400',
        },
        {
            src: 'http://www.piticlic.ro/images/products/P367_2.jpg',
        },
        {
            src: 'http://www.piticlic.ro/images/products/P367_3.jpg',
        },
        {
            src: 'http://www.piticlic.ro/images/products/P367_4.jpg',
        },
        {
            src: 'http://www.piticlic.ro/images/products/P367_5.jpg',
        },
    ];

    return (
        // max witdh 1200px
        <div className="flex flex-col items-center w-screen">
            <div className="max-w-screen-lg">
                <HeaderShop />
                <div className="max-w-7xl mx-auto py-12 px-4 sm:pl-6 sm:pr-16 lg:pr-12">
                    <nav className="mb-8">
                        <ol className="flex text-gray-400 space-x-2">
                            <li>
                                <Link href="#">
                                    Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link href="#">
                                    Trending
                                </Link>
                            </li>
                            <li>/</li>
                            <li aria-current="page" className="text-gray-900">
                                Plush toys for babies
                            </li>
                        </ol>
                    </nav>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <ImageCarousel images={images} />
                        <div className="md:col-span-2">
                            <h1 className="text-3xl font-bold">Plush toys for babies</h1>
                            <p className="mt-2 text-gray-500">
                                Ideal age 1 to 2 years, helps develop social & emotional growth, adorable soft toy with realistic eyes.
                            </p>
                            <div className="flex items-center mt-4">
                                <StarIcon className="text-black w-5 h-5" />
                                <StarIcon className="text-black w-5 h-5" />
                                <StarIcon className="text-black w-5 h-5" />
                                <StarIcon className="text-black w-5 h-5" />
                                <StarHalfIcon className="text-black w-5 h-5" />
                                <p className="text-gray-600 ml-2">4.4</p>
                                <p className="text-gray-600 ml-1">·</p>
                                <Link className="text-black ml-1" href="#">
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
                            <div className="md:flex md:mt-4">
                                <Button className="w-full">Buy Now</Button>
                                <Button className="w-full mt-2 md:mt-0 md:ml-2" variant="outline">
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
        </div >
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
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <defs>
                <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stop-color="currentColor" />
                    <stop offset="50%" stop-color="currentColor" stop-opacity="0" />
                </linearGradient>
            </defs>
            <polygon
                fill="url(#half-fill)"
                stroke="currentColor"
                strokeWidth="2"
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
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
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
