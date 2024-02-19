import React, { useState } from 'react';

import styles from '../styles/Index.module.scss';
import animation from '../styles/animations.module.scss';

import Head from 'next/head'; // head tag management
import Image from 'next/image'; // image optimization
import Link from 'next/link'; // client-side navigation

import cd1Png from '../public/index/CV1.png';
import cd2Png from '../public/index/cd2.png';
import balonPng from '../public/index/ballon_text.webp';

import Header from '../components/Header';

export default function Home() {
    const [isMenuChecked, setIsMenuChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsMenuChecked(!isMenuChecked);
    };

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
                            DESCOPERA NOILE noastre
                            <br />
                            JOCURI EDUCATIVE
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
            </main >

            <footer></footer>
        </div >
    );
}
