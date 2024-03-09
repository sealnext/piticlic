"use client";

import styles from '../styles/Auth.module.scss';
import { useState, useEffect } from 'react';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [timer, setTimer] = useState(null);

    const validateInputOnType = () => {
        let newErrors = { ...errors };

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Emailul nu este valid.";
        } else {
            delete newErrors.email;
        }

        setErrors(newErrors);
    };

    const validateOnSubmit = () => {
        let newErrors = {};

        if (!email) {
            newErrors.email = "Emailul este necesar.";
        }

        if (!password) {
            newErrors.password = "Parola este necesară.";
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


    useEffect(() => {
        const newTimer = setTimeout(() => {
            validateInputOnType();
        }, 1400);

        setTimer(newTimer);

        return () => clearTimeout(newTimer);
    }, [email, password]);


    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.title}>Logheaza-te</h2>
                <p className={styles.text}>Email</p>
                <input
                    className={styles.input}
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors(prevErrors => ({ ...prevErrors, email: '' }));
                        clearTimeout(timer);
                    }}
                />
                {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
                <div className={styles.flex}>
                    <p className={styles.text}>Parola</p>
                    <a className={`${styles.text} ${styles.link}`}>Ai uitat parola?</a>
                </div>
                <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors(prevErrors => ({ ...prevErrors, password: '' }));
                        clearTimeout(timer);
                    }}
                />
                {errors.password && <div className={styles.errorMessage}>{errors.password}</div>}
                <button
                    className={styles.loginButton}
                    onClick={handleSubmit}
                    disabled={Object.keys(errors).length > 0}
                >
                    Logheazǎ-te
                </button>
                <hr className={styles.hr} />
                <div className={styles.flex}>
                    <h3 className={styles.subTitle}>Nu ai cont?</h3>
                    <a href='/register' className={styles.signUpButton}>Înregistreazǎ-te</a>
                </div>
            </div>
        </div>
    );
}