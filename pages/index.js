import styles from '../styles/Index.module.scss';
import animation from '../styles/animations.module.scss';

// Next.js components
import Head from 'next/head'; // head tag management
import Image from 'next/image'; // image optimization
import Link from 'next/link'; // client-side navigation

// using next/image to optimize images
import topBarSvg from '../public/index/topbar.svg';
import norHomePng from '../public/index/nor-acasa.png';
import norMagazinPng from '../public/index/nor-magazin.png';
import norResursePng from '../public/index/nor-gratuit.png';
import norContactPng from '../public/index/nor-contact.png';
import soarePng from '../public/index/soare.png';
import cd1Png from '../public/index/CV1.png';
import cd2Png from '../public/index/cd2.png';
import pitiseniorPng from '../public/index/pitisenior.png';
import balonPng from '../public/index/ballon_text.webp';

const TopBar = ({ className }) => (
    <svg
        className={className}
        width="1280"
        height="130"
        viewBox="0 0 1280 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M0 84.0657L53.3333 78.4613C106.667 72.8569 213.333 61.6482 320 64.4503C426.667 67.2525 533.333 84.0657 640 100.879C746.667 117.692 853.333 134.505 960 128.901C1066.67 123.296 1173.33 95.2744 1226.67 81.2635L1280 67.2525V0H1226.67C1173.33 0 1066.67 0 960 0C853.333 0 746.667 0 640 0C533.333 0 426.667 0 320 0C213.333 0 106.667 0 53.3333 0H0V84.0657Z" fill="#536B5A" />
    </svg>
);


export default function Home() {
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
                    <div className={styles.header}>
                        <TopBar
                            className={`${styles.nonSelectable} ${styles.topBar}`}
                        />
                        <div className={`${styles.homeButtonContainer}`}>
                            <Image
                                src={pitiseniorPng}
                                alt="home"
                                className={`${styles.navButton} ${styles.pitiSeniorImage} `}
                            />
                            <Image
                                src={norHomePng}
                                alt="Home"
                                className={`${styles.navButton} ${styles.homeImage}`}
                            />
                        </div>
                        <Link href="/shop">
                            <Image
                                src={norMagazinPng}
                                alt="Magazin"
                                className={`${animation.scaleHoverEffect} ${styles.navButton} ${styles.shopImage}`}
                            />
                        </Link>
                        <Link href="/resources">
                            <Image
                                src={norResursePng}
                                alt="Resurse"
                                className={`${animation.scaleHoverEffect} ${styles.navButton} ${styles.resourcesImage}`}
                            />
                        </Link>
                        <Link href="/contact">
                            <Image
                                src={norContactPng}
                                alt="Contact"
                                className={`${animation.scaleHoverEffect} ${styles.navButton} ${styles.contactImage}`}
                            />
                        </Link>
                        <Image
                            src={soarePng}
                            alt="Soare"
                            className={`${styles.nonSelectable} ${animation.rotatingEffect} ${styles.navButton} ${styles.sunImage}`}
                        />
                    </div>
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
                    <div className={`${animation.floatingEffect} ${styles.balloonImage}`}>
                        <Image
                            src={balonPng}
                            alt="balloon"
                            className={`${animation.ballonScaleHoverEffect} ${styles.balloonImageSrc}`}
                        />
                    </div>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
