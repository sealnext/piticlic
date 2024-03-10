"use client";

import styles from '../styles/Auth.module.scss';
import { useState, useEffect } from 'react';

export default function login() {
    const [email, setEmail] = useState('');
    const [resetMessage, setResetMessage] = useState('');

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setResetMessage('Dacă emailul este înregistrat, vei primi un mesaj de resetare a parolei.');
        } else {
            setResetMessage('Te rugăm să introduci o adresă de email validă.');
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div>
                    <h2 className={styles.title_reset}>Reseteaza-ti parola</h2>
                    <p className={styles.text_reset}>Introdu adresa ta de email mai jos pentru a reseta parola</p>
                </div>
                <p className={styles.text}>Email</p>
                <input
                    className={styles.input}
                    type="text"
                    value={email}
                    placeholder='mail@exemplu.com'
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <button
                    className={styles.loginButton}
                    onClick={handleSubmit}
                >
                    Resetează parola
                </button>
                {resetMessage && <p className={`${styles.resetMessage} ${styles.middle}`}>{resetMessage}</p>}
                <hr className={styles.hr} />
                <div className={`${styles.flex} ${styles.middle}`}>
                    <a href='/login' className={styles.backToLoginButton}>Înapoi la login</a>
                </div>
            </div>
        </div>
    );
}