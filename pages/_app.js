// `pages/_app.js`
import '../styles/global.css';
import { noteworthy, odor_Mean_Chey } from '../util/_fonts';

export default function App({ Component, pageProps }) {
    return (
        <main className={`${noteworthy.variable} ${odor_Mean_Chey.variable}`}>
            <Component {...pageProps} />
        </main>);
}