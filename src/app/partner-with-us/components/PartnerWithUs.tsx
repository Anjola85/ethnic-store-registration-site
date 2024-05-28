import styles from "../styles/page.module.css";
import HeroSection from "../components/HeroSection";
import EthnicSection from "../components/EthnicSection";
import PartnershipSection from "../components/PartnershipSection";
import CommunitySection from "../components/CommunitySection";
import PrivacySection from "../components/PrivacySection";
import GetInTouchSection from "src/components/get-in-touch/GetInTouchSection";
import Footer from "src/components/footer/footer";
import Head from "next/head";

export default function PartnerWithUs() {
  return (
    <div className={styles.stores_page}>
      <Head>
        <title>Register Your Store on Quiikmart</title>
        <meta property="og:title" content="Register Your Store on Quiikmart" />
        <meta property="og:description" content="Register Your Store on Quiikmart" />
        <meta property="og:url" content="https://www.quiikmart.com/partner-with-us" />
      </Head>
      <div className={styles.container}>
        <HeroSection />
        <EthnicSection />
        <PartnershipSection />
        <CommunitySection />
        <GetInTouchSection />
        <PrivacySection />
      </div>
      <Footer backgroundColor="#004449" color="#FFF" />
    </div>
  );
}
