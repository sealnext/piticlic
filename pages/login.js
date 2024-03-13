"use client";

import styles from '../styles/Auth.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';

export default function Login() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        console.log('Status:', status);
        if (status === 'authenticated') {
            router.push('/shop');
        }
    }, [status, router]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearTimeout(timer);

        if (validateOnSubmit()) {
            console.log("tests passed. Logging in...");
            try {
                console.log('Email:', email);
                const result = await signIn('credentials', {
                    email,
                    password,
                    redirect: false,
                });
                console.log('Result:', result);
                if (result.ok) {
                    router.replace('/shop');
                } else {
                    setErrors({ server: 'Email sau parolă invalidă.' });
                }
            } catch (error) {
                console.error('Eroare la autentificare:', error);
                setErrors({ server: 'A apărut o eroare la autentificare.' });
            }
        }
    };

    useEffect(() => {
        const newTimer = setTimeout(() => {
            validateInputOnType();
        }, 1400);

        setTimer(newTimer);

        return () => clearTimeout(newTimer);
    }, [email, password]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    } else return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.title}>Logheaza-te</h2>
                <p className={styles.text}>Email</p>
                <input
                    className={styles.input}
                    type="text"
                    placeholder='mail@exemplu.com'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors(prevErrors => ({ ...prevErrors, email: '', server: '' }));
                        clearTimeout(timer);
                    }}
                />
                {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
                <div className={styles.flex}>
                    <p className={styles.text}>Parola</p>
                    <a href='/resetpassword' className={`${styles.text} ${styles.link}`}>Ai uitat parola?</a>
                </div>
                <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors(prevErrors => ({ ...prevErrors, password: '', server: '' }));
                        clearTimeout(timer);
                    }}
                />
                {errors.password && <div className={styles.errorMessage}>{errors.password}</div>}
                {errors.server && <div className={styles.errorMessage}>{errors.server}</div>}
                <button
                    className={styles.loginButton}
                    onClick={handleSubmit}
                >
                    Logheazǎ-te
                </button>
                <hr className={styles.hr} />
                <div className={styles.flex}>
                    <h3 className={styles.subTitle}>Nu ai cont?</h3>
                    <a href='/register' className={styles.signUpButton}>Înregistreazǎ-te</a>
                </div>
            </div>
        </div >
    );
}