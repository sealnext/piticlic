// `pages/_app.js`
import '../styles/global.css';
import { noteworthy, odor_Mean_Chey } from '../util/_fonts';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <main className={`${noteworthy.variable} ${odor_Mean_Chey.variable}`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}