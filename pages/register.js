"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/Auth.module.scss';

export default function register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [timer, setTimer] = useState(null);

    const validateInputOnType = () => {
        let newErrors = {};

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Emailul nu este valid.";
        }

        if (password && password.length < 6) {
            newErrors.password = "Parola trebuie să aibă cel puțin 6 caractere.";
        }

        if (confirmPassword && confirmPassword.length < 6) {
            newErrors.confirmPassword = "Parola trebuie să aibă cel puțin 6 caractere.";
        }

        if (password && confirmPassword && password !== confirmPassword) {
            newErrors.confirmPassword = "Parolele nu se potrivesc.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        const newTimer = setTimeout(() => {
            validateInputOnType();
        }, 1000); // Întârziere de 1 secundă

        setTimer(newTimer);

        return () => clearTimeout(newTimer);
    }, [email, password, confirmPassword]);

    const validateOnSubmit = () => {
        let newErrors = {};

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Emailul nu este valid.";
        }

        if (!password || password.length < 6) {
            newErrors.password = "Parola trebuie să aibă cel puțin 6 caractere.";
        }

        if (!confirmPassword || confirmPassword.length < 6) {
            newErrors.confirmPassword = "Parola trebuie să aibă cel puțin 6 caractere.";
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Parolele nu se potrivesc.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        clearTimeout(timer);
        if (validateOnSubmit()) {
            // Logică de trimitere formular
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.title}>Inregistreaza-te</h2>

                <p className={styles.text}>Email</p>
                <input
                    className={styles.input}
                    type="text"
                    placeholder='mail@exemplu.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}

                <p className={styles.text}>Parola</p>
                <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className={styles.errorMessage}>{errors.password}</div>}

                <p className={styles.text}>Rescrie parola</p>
                <input
                    className={styles.input}
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <div className={styles.errorMessage}>{errors.confirmPassword}</div>}

                <button
                    className={styles.loginButton}
                    onClick={handleSubmit}
                    disabled={Object.keys(errors).length > 0}
                >
                    Înregistrează-te
                </button>

                <hr className={styles.hr} />
                <div className={styles.flex}>
                    <h3 className={styles.subTitle}>Ai deja cont?</h3>
                    <a href='/login' className={styles.signUpButton}>Loghează-te</a>
                </div>
            </div>
        </div>
    );
}
