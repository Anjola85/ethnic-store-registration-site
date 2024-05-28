import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import CustomerSignUpWaitlist from "src/components/waitlist/CustomerSignUpWaitlist";
import DriverSignUpWaitlist from "src/components/waitlist/DriverSignUpWaitlist";
import { WaitlistProvider } from "src/contexts/WaitlistContext";
import Script from "next/script";
import config from "config";
import GoogleAnalytics from "src/components/google-analytics/GoogleAnalytics";
import CookieBanner from "src/components/cookies/CookieBanner";
import { keywords } from "./data/info_metadata";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Quiikmart | Bring Home Closer",
      template: "%s - Quiikmart | Bring Home Closer",
    },
    description:
      "Discover Quiikmart. Your ethnic stores are now closer to you!",
    icons: [
      {
        rel: "icon",
        type: "image/x-icon",
        // url: "https://www.quiikmart.com/favicon.ico",
        url: "https://www.quiikmart.com/logoQuiik.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        // url: "https://www.quiikmart.com/apple-touch-icon.png",
        url: "https://www.quiikmart.com/logoQuiik.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        // url: "https://www.quiikmart.com/favicon-32x32.png",
        url: "https://www.quiikmart.com/logoQuiik.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        // url: "https://www.quiikmart.com/favicon-32x32.png",
        url: "https://www.quiikmart.com/logoQuiik.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        // url: "https://www.quiikmart.com/favicon-16x16.png",
        url: "https://www.quiikmart.com/logoQuiik.png",
      },
      { rel: "manifest", url: "https://www.quiikmart.com/site.webmanifest" },
    ],
    metadataBase: new URL("https://www.quiikmart.com/"),
    openGraph: {
      title: "Quiikmart | Bring Home Closer",
      url: "https://www.quiikmart.com/",
      description:
        "Discover Quiikmart. Your ethnic stores are now closer to you!",
      images: [
        {
          url: "https://www.quiikmart.com/images/hero.png",
          alt: "Quiikmart | Bring Home Closer",
        },
      ],
      siteName: "Quiikmart",
      locale: "en_IE",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WaitlistProvider>
      <html lang="en">
        <GoogleAnalytics
          GOOGLE_ANALYTICS_MEASUREMENT_ID={
            config.GOOGLE_ANALYTICS_MEASUREMENT_ID || " "
          }
        />
        <Head>
          {/* Preconnect to Google Fonts */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          />
          <link rel="preload" href="/images/hero.png" as="image"></link>
          <link rel="preload" href="/images/hero_desktop.png" as="image"></link>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${config.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
          />
          <meta name="keywords" content={keywords} />
        </Head>
        <body className={inter.className}>
          <CustomerSignUpWaitlist />
          <DriverSignUpWaitlist />
          {children}
          <CookieBanner />
        </body>
      </html>
    </WaitlistProvider>
  );
}
