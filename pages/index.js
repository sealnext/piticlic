import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Image from 'next/image';

// using next/image to optimize images
import topBarSvg from "../public/index/topbar.svg";
import norHomePng from "../public/index/nor-acasa.png";
import norMagazinPng from "../public/index/nor-magazin.png";
import norResursePng from "../public/index/nor-gratuit.png";
import norContactPng from "../public/index/nor-contact.png";

export default function Home() {
    return (
        <div>
            <Head>
                <meta name="title" content="Home - educational games and educational software for PCs, tablets, mobile" />
                <title>Piticlic.ro - home</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="PitiClic offers educational games and educational software for PC, tablets, phones. Games and interactive applications for children of all ages." />
                <meta name="keywords" content="educational games, educational software, educational games for PC, educational games for tablets, educational games for mobile, educational software for PC, educational software for tablets, educational software for mobile" />
                <link href="http://www.piticlic.ro/en/" rel="canonical" />
                <link href="http://www.piticlic.ro/ro/" rel="alternate" hreflang="ro-RO" />
            </Head>

            <main>
                <div className={styles.heroBackground}>
                    <div className={styles.header}>
                        <Image
                            src={topBarSvg}
                            alt="Follow us on Twitter"
                            objectFit="contain"
                            objectPosition="top"
                            style={{
                                width: "100%",
                                height: "fit-content"
                            }}
                        />
                        <Image
                            src={norHomePng}
                            alt="Home"
                            className={styles.scaleHoverEffect}
                            style={{
                                position: 'absolute',
                                width: '14%',
                                top: '27%',
                                left: '5%',
                                zIndex: 2
                            }}
                        />
                        <Image
                            src={norMagazinPng}
                            className={styles.scaleHoverEffect}
                            alt="Magazin"
                            style={{
                                position: 'absolute',
                                width: '14%',
                                top: '26%',
                                left: '19.7%',
                                zIndex: 2
                            }}
                        />
                        <Image
                            src={norResursePng}
                            alt="Resurse"
                            className={styles.scaleHoverEffect}
                            style={{
                                position: 'absolute',
                                width: '22%',
                                top: '39%',
                                left: '36%',
                                zIndex: 2
                            }}
                        />
                        <Image
                            src={norContactPng}
                            className={styles.scaleHoverEffect}
                            alt="Contact"
                            style={{
                                position: 'absolute',
                                width: '14%',
                                top: '73%',
                                left: '62%',
                                zIndex: 2
                            }}
                        />
                    </div>
                </div>
            </main>

            <footer>
            </footer>
        </div>
    );
}
