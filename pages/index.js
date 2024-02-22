import React, { useState, useRef, useEffect } from 'react';

import styles from '../styles/Index.module.scss';
import animation from '../styles/animations.module.scss';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import cd1Png from '../public/index/CV1.png';
import cd2Png from '../public/index/cd2.png';
import balonPng from '../public/index/ballon_text.webp';
import avionPng from '../public/index/avion.webp';
import promoPng from '../public/index/promo.png';
import containerPng from '../public/index/container.webp';

import Header from '../components/Header';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { horizontalLoop } from '../util/_horizontalLoop';

export default function Home() {
    const [isMenuChecked, setIsMenuChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsMenuChecked(!isMenuChecked);
    };

    const wrapperRef = useRef(null);
    const airplaneRef = useRef(null);
    const boxesRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const loop = horizontalLoop(boxesRef.current, {
            repeat: -1,
            speed: 1,
            snap: 1
        });

        // gsap animation for the airplane make it move from left to right of the screen
        gsap.to(airplaneRef.current, {
            x: '200vw',
            y: '30vh',
            duration: 13,
            ease: 'none',
            repeat: -1
        });

        loop.play();

        return () => {
            loop.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const items = [
        'Digital Manuals',
        'Fun Mathematics',
        'Educational Software',
        'Financial Education',
        'Interactive Alphabet',
        'Digital Manuals',
        'Fun Mathematics',
        'Educational Software',
        'Financial Education',
        'Interactive Alphabet'
    ];

    return (
        <div>
            <Head>
                <meta
                    name="title"
                    content="Home - educational games and educational software for PCs, tablets, mobile"
                />
                <title>Piticlic.ro - home</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="PitiClic offers educational games and educational software for PC, tablets, phones. Games and interactive applications for children of all ages."
                />
                <meta
                    name="keywords"
                    content="educational games, educational software, educational games for PC, educational games for tablets, educational games for mobile, educational software for PC, educational software for tablets, educational software for mobile"
                />
                <link href="http://www.piticlic.ro/en/" rel="canonical" />
                <link
                    href="http://www.piticlic.ro/ro/"
                    rel="alternate"
                    hrefLang="ro-RO"
                />
            </Head>

            <main>
                <div className={styles.heroBackground}>
                    <Header
                        isMenuChecked={isMenuChecked}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                    <div className={styles.heroContent}>
                        <h2>Eliminăm Plictiseala din Educație™</h2>
                        <h1>
                            DESCOPERA JOCURILE
                            <br />
                            NOASTRE EDUCATIVE
                        </h1>
                        <div className={styles.cdContainer}>
                            <Image
                                src={cd1Png}
                                alt="cd1"
                                className={styles.cdImage}
                            />
                            <Image
                                src={cd2Png}
                                alt="cd2"
                                className={styles.cdImage}
                            />
                        </div>
                    </div>
                    <Link href="/shop" className={`${animation.floatingEffect} ${styles.balloonImage}`}>
                        <Image
                            src={balonPng}
                            alt="balloon"
                            className={`${animation.ballonScaleHoverEffect} ${styles.balloonImageSrc}`}
                        />
                    </Link>
                </div>
                <div className={styles.textMarquee}>
                    <div className={styles.wrapper} ref={wrapperRef}>
                        {items.map((item, index) => (
                            <div className={styles.box} key={index} ref={el => boxesRef.current[index] = el}>
                                <div className={styles.test}>{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.avionAxis}>
                    <div ref={airplaneRef} className={styles.airplaneComponent}>
                        <Image
                            className={styles.promoImage}
                            src={promoPng}
                        />
                        <Image
                            className={styles.avionImage}
                            src={avionPng}
                        />
                    </div>
                    <div className={styles.emptySpace} />
                </div>
                <div className={styles.waterImage}>
                    <div className={animation.floatInWaterEffect}>
                        <Image
                            src={containerPng}
                        />
                    </div>
                </div>
                <div className={styles.footerImage}>

                </div>
            </main >

            <footer></footer>
        </div >
    );
};