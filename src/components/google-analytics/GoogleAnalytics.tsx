"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "src/app/utils/gtagHelper";

type GAProps = {
    GOOGLE_ANALYTICS_MEASUREMENT_ID: string;
};

const GoogleAnalytics = ({GOOGLE_ANALYTICS_MEASUREMENT_ID} :GAProps ) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + searchParams.toString();

        pageview(GOOGLE_ANALYTICS_MEASUREMENT_ID, url);
    }, [pathname, searchParams, GOOGLE_ANALYTICS_MEASUREMENT_ID]);

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script
                strategy="afterInteractive"
                id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('consent', 'default', {
                            'analytics_storage': 'denied'
                        });

                        gtag('config','${GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    );
};

export default GoogleAnalytics;