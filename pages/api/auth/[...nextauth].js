import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email/Password',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const response = await axios.post('http://localhost:5055/api/Auth/Login', {
                        email: credentials.email,
                        password: credentials.password,
                    });

                    if (response.status === 200) {
                        const { jwtToken, refreshToken } = response.data;

                        // Returnează datele utilizatorului autentificat
                        return {
                            jwtToken,
                            refreshToken,
                        };
                    } else {
                        throw new Error('Invalid email or password');
                    }
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        throw new Error('Unauthorized');
                    } else {
                        throw new Error('Invalid email or password');
                    }
                }
            },
        }),
    ],
    jwt: {
        secret: 'process.env.JWT_SECRET',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.jwtToken = user.jwtToken;
                token.refreshToken = user.refreshToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.jwtToken = token.jwtToken;
            session.refreshToken = token.refreshToken;
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
});