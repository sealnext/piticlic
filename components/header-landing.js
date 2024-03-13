// Header.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Index.module.scss';
import animation from '../styles/animations.module.scss';

import norHomePng from '../public/index/nor-acasa.png';
import norMagazinPng from '../public/index/nor-magazin.png';
import norResursePng from '../public/index/nor-gratuit.webp';
import norContactPng from '../public/index/nor-contact.png';
import soarePng from '../public/index/soare.png';
import pitiseniorPng from '../public/index/pitisenior.png';

import { useEffect } from 'react';

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

const Header = ({ isMenuChecked, handleCheckboxChange }) => {
    useEffect(() => {
        if (isMenuChecked) {
            document.body.classList.add('noScroll');
        } else {
            document.body.classList.remove('noScroll');
        }

        // Curățare la demontarea componentei
        return () => {
            document.body.classList.remove('noScroll');
        };
    }, [isMenuChecked]); // Dependențele pentru useEffect

    const navBarClass = isMenuChecked ? styles.activeMenu : styles.inactiveMenu;

    return (
        <div className={styles.header}>
            <div className={`${styles.menuButton}`}>
                <button onClick={handleCheckboxChange} id={`${styles.menu_label}`}>
                    <div className={`${styles.menu_span}`}></div>
                    <div className={`${styles.menu_span}`}></div>
                    <div className={`${styles.menu_span}`}></div>
                </button>
            </div>
            <TopBar
                className={`${styles.nonSelectable} ${styles.topBar}`}
            />
            <div className={`${styles.navBar} ${navBarClass}`}>
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
            </div>
            <Image
                src={soarePng}
                alt="Soare"
                className={`${styles.nonSelectable} ${animation.rotatingEffect} ${styles.navButton} ${styles.sunImage}`}
            />
        </div>
    );
};

export default Header;
