"use client";

import Link from 'next/link'
import styles from './CookieBanner.module.css';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const CookieBanner = () => {
    const [cookieConsent, setCookieConsent] = useState(false);
    const [askedForConsent, setAskedForConsent] = useState(true);

    useEffect(() => {
        const consent = Cookie.get('cookie_consent') === 'true';
        setCookieConsent(consent);

        const newValue = cookieConsent ? 'granted' : 'denied';

        window?.gtag('consent', 'update', {
            'analytics_storage': newValue
        });

    }, [cookieConsent]);

    useEffect(() => {
        const asked = Cookie.get('cookie_permission') === 'true';
        setAskedForConsent(asked);
    }, []);

    const handleCookieConsent = (value :boolean) => {
        // set cookie consent state and cookie
        setCookieConsent(value);
        Cookie.set('cookie_consent', String(value), { expires: 3 }); // expires in 3 days

        // set asked for consent state and cookie to prevent banner from showing again
        setAskedForConsent(true);
        Cookie.set('cookie_permission', String(true), { expires: 3 }); // expires in 3 days
    }

    if (askedForConsent) {
        return null;
    }

    return (
        <div className={styles.container} style={askedForConsent ? {display: 'none'} : {display: 'flex'}}>

            <div className={styles.textCenter}>
                {/* <Link href="/info/cookies">
                    <p>We use <span className={styles.cookiesLink}>cookies</span> on our site.</p>
                </Link> */}
                <p>By clicking “Allow all cookies”, you agree to the storing of cookies 
                    on your device to enhance site navigation, analyze site usage, and 
                    assist in our marketing efforts.
                </p>
            </div>

            <div className={styles.buttonGroup}>
                <button className={styles.buttonDecline} onClick={() => handleCookieConsent(true)}>Decline</button>
                <button className={styles.buttonAllow} onClick={() => handleCookieConsent(true)}>Allow all Cookies</button>
            </div>
        </div>
    )
}

export default CookieBanner;
