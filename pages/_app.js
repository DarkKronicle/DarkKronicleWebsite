import "/dist/output.css";
import '../styles/globals.css';
import Script from 'next/script';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></Script>
        </>
    );
}

export default MyApp
