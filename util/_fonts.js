// next/font for optimizing fonts
import localFont from 'next/font/local'
import { Odor_Mean_Chey } from 'next/font/google'

export const odor_Mean_Chey = Odor_Mean_Chey({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--odor-font',
})

export const noteworthy = localFont({
    src: '../public/fonts/Noteworthy-Lt.woff',
    display: 'swap',
    subsets: ['latin'],
    variable: '--noteworthy-font',
})