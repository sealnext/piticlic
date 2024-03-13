"use client";

import Image from 'next/image';
import styles from '../styles/Auth.module.scss';

export default function fof() {
    return (
        <div className={styles.background}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className={styles.authContainer}>
                <p style={{ textAlign: 'center' }} className={styles.title}>Ups! Această pagină încă învață să-și găsească drumul înapoi acasă</p>
            </div>
        </div >
    );
}