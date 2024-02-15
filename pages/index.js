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
            <Image
              src={topBarSvg}
              alt="Follow us on Twitter"
              className={`${styles.nonSelectable} ${styles.topBar}`}
            />
            <Link href="/">
              <Image
                src={norHomePng}
                alt="Home"
                className={`${animation.scaleHoverEffect} ${styles.navButton} ${styles.homeImage}`}
              />
            </Link>
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
              className={`${animation.rotatingEffect} ${styles.navButton} ${styles.sunImage}`}
            />
          </div>
          <div className={styles.heroContent}>
            <h2>We Remove the Boredom from Education™</h2>
            <h1>
              Discover and purchase
              <br />
              educational games
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
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
