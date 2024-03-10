"use client";

import Image from 'next/image';
import styles from '../styles/Auth.module.scss';

export default function cart() {
    return (
        <div class="bg-gray-100 font-sans leading-normal tracking-normal">
            <div class="flex flex-col justify-center items-center h-screen">
                <div class="w-full max-w-xs">
                    <div class="flex items-center">
                        <div class="flex items-center text-xs font-semibold text-gray-500">
                            <div class="w-full bg-gray-300 rounded-full mr-2">
                                <div class="rounded-full bg-black py-1" style={{ width: '33%' }}>
                                    <span class="step-circle flex items-center justify-center bg-black text-white mx-auto">1</span>
                                </div>
                            </div>
                            <span class="step-circle flex items-center justify-center bg-white border-2 border-gray-300 mx-auto">2</span>
                            <div class="w-full bg-gray-300 rounded-full ml-2">
                                <span class="step-circle flex items-center justify-center bg-white border-2 border-gray-300 mx-auto">3</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-xs text-center font-semibold text-black mt-2">
                        <span>Cart</span>
                    </div>
                    <div class="text-xs text-center font-semibold text-gray-500 mt-8">
                        <span>Address</span>
                    </div>
                    <div class="text-xs text-center font-semibold text-gray-500 mt-8">
                        <span>Payment</span>
                    </div>
                </div>
            </div>
        </div>
    );
}