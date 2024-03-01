"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

import shop5 from '../public/shop/shop5.png';
import shop4 from '../public/shop/shop4.png';
import shop3 from '../public/shop/shop3.png';
import shop1 from '../public/shop/shop1.png';

export default function shop() {
    return (

        <div style={{ backgroundImage: 'url("/kids.webp")' }} class="flex justify-center items-center min-h-[105vh] flex-wrap bg-teal-100">
            <a href="/shop/products?filter=piticlic" className="backdrop-blur-md h-[100%] flex justify-center items-center inter-var w-full md:w-1/2 lg:w-[23%] my-2 border rounded-3xl h-[27rem]">
                <CardContainer className="inter-var">
                    <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] w-auto sm:w-[sm:w-[33vw]] h-auto rounded-xl ">
                        <CardItem
                            translateZ="50"
                            className="invert text-xl font-bold text-neutral-600 text-white"
                        >
                            PitiClic
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="invert text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
                        >
                            Software educational pentru gradinita
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={shop4}
                                height="200"
                                width="200"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </a>
            <div className="backdrop-blur-md h-[100%] flex justify-center items-center inter-var w-full md:w-1/2 lg:w-[23%] border rounded-3xl h-[27rem] mx-4">
                <CardContainer className="inter-var">
                    <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] w-auto sm:w-[sm:w-[33vw]] h-auto rounded-xl ">
                        <CardItem
                            translateZ="50"
                            className="invert text-xl font-bold text-neutral-600 text-white"
                        >
                            PitiClic Senior
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="invert text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
                        >


                            Software educational pentru ciclul primar


                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={shop3}
                                height="200"
                                width="200"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">

                        </div>
                    </CardBody>
                </CardContainer>
            </div>
            <div className="backdrop-blur-md h-[100%] flex justify-center items-center inter-var w-full md:w-1/2 lg:w-[23%] border rounded-3xl h-[27rem] mr-4">
                <CardContainer className="inter-var">
                    <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] w-auto sm:w-[sm:w-[33vw]] h-auto rounded-xl ">
                        <CardItem
                            translateZ="50"
                            className="invert text-xl font-bold text-neutral-600 text-white"
                        >
                            Bazar
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="invert text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
                        >
                            Jucarie pluș PitiClic, Covorasul PitiClic
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={shop5}
                                height="200"
                                width="200"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">

                        </div>
                    </CardBody>
                </CardContainer>
            </div>
            <div className="backdrop-blur-md h-[100%] flex justify-center items-center inter-var w-full md:w-1/2 lg:w-[23%] border rounded-3xl h-[27rem]">
                <CardContainer className="inter-var">
                    <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] w-auto sm:w-[sm:w-[33vw]] h-auto rounded-xl ">
                        <CardItem
                            translateZ="50"
                            className="invert text-xl font-bold text-neutral-600 text-white"
                        >
                            PitiClic bebe
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="invert text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
                        >
                            Software educational pentru anteprescolari
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={shop1}
                                height="200"
                                width="200"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">

                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    );
}
