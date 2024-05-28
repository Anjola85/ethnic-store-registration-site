"use client";

import Navbar from "src/components/navbar/navbar";
import styles from "../styles/aboutUs.module.css";
import Button from "src/components/button/button";
import Image from "next/image";
import Footer from "../../../components/footer/footer";
import dynamic from "next/dynamic";
import { useWaitlist } from "src/contexts/WaitlistContext";
import GetInTouchSection from "src/components/get-in-touch/GetInTouchSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAnalytics from "../../custom-hooks/useAnalytics";

const AboutUs = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const { toggleCustomerWaitlist: toggleWaitlist } = useWaitlist();

  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  const isBrowser = () => typeof windowWidth !== "undefined";
  const isMobileOrTablet = isBrowser() && isMobile();
  const DynamicComponentWithNoSSR = dynamic(
    () => import("../../../components/navbar/navbar"),
    {
      ssr: false,
    }
  );
  const goToWaitlist = () => {
    const tabletWidth = 768; // Tablets and smaller devices

    if (windowWidth && windowWidth <= tabletWidth) {
      router.push("/waitlist/sign-up");
      return;
    }
    toggleWaitlist();
  };

  useAnalytics();

  return (
    <div className={styles.page}>
      <section className={styles.hero_section}>
        <Navbar buttontext={"Sign Up"} buttonlink={"/waitlist/sign-up"} theme={{ secondaryColor: "#004449", primaryColor: "#fff" }} />
        <div className={styles.hero_container}>
          <div className={styles.hero_image_container}>
            <div className={styles.hero_left_images}>
              <div className={styles.hero_image_1}>
                <Image
                  src={"/images/about-us-hero-1.jpg"}
                  alt="hero_1"
                  width={462}
                  height={635}
                />
              </div>

              <div className={styles.flag_group}>
                <Image
                  src={"/svgs/vietnam-long-flag.svg"}
                  alt="ghana_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/grenada-long-flag.svg"}
                  alt="grenada_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/south-korea-long-flag.svg"}
                  alt="south_korea_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/kenya-long-flag.svg"}
                  alt="kenya_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/india-long-flag.svg"}
                  alt="india_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/south-africa-long-flag.svg"}
                  alt="south_africa_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
              </div>
            </div>
            <div className={styles.hero_right_images}>
              <div className={styles.flag_group}>
                <Image
                  src={"/svgs/ghana-flag-long.svg"}
                  alt="ghana_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/nigeria-flag-long.svg"}
                  alt="nigeria_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/congo-flag-long.svg"}
                  alt="congo_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/haiti-flag-long.svg"}
                  alt="haiti_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/jamaica-flag-long.svg"}
                  alt="jamaica_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
                <Image
                  src={"/svgs/china-flag-long.svg"}
                  alt="china_flag"
                  width={25}
                  height={20}
                  className={styles.flag}
                />
              </div>
              <div className={styles.hero_image_2}>
                <Image
                  src={"/images/about-us-hero-2.png"}
                  alt="hero_2"
                  width={448}
                  height={610}
                />
              </div>
            </div>
          </div>
          <aside className={styles.hero_text}>
            <h1>
              Our <span className={styles.color}>mission</span> is to bridge the
              gap between ethnic stores and customers like{" "}
              <span className={styles.color}>you</span>
            </h1>
            <Button
              className={styles.hero_btn}
              backgroundColor="#D5F457"
              color="#000"
              onClick={() => goToWaitlist()}
            >
              <div className={styles.hero_btn_txt}>Join waitlist</div>
            </Button>
          </aside>
        </div>
      </section>
      <section className={styles.body_section}>
        <div className={styles.top_body_section}>
          <div className={styles.top_body_section_left}>
            <h2>Where Tradition Meets Convenience.</h2>
            <p className={styles.body_section_subtext}>
              Quiikmart offers a{" "}
              <u>
                carefully curated selection of products from niche ethnic
                stores.
              </u>{" "}
              From exotic spices and seasonings to beloved snacks and sweets,
              we've scoured the globe to bring you an unparalleled variety of
              items. No more compromises on the authenticity of your dishes;
              we've got you covered.
            </p>
            <Button
              className={styles.body_btn}
              backgroundColor="#004449"
              color="#fff"
              onClick={() => goToWaitlist()}
            >
              <div className={styles.body_btn_txt}>Join waitlist</div>
            </Button>
          </div>
          <div className={styles.body_img_container}>
            <Image
              src={"/images/about-us-hero-1.jpg"}
              alt="convenience_1"
              width={462}
              height={635}
            />
          </div>
        </div>
        <div className={styles.our_story}>
          <p className={styles.fancy_text}>Our Story</p>
        </div>
        <div className={styles.body_section_article_container}>
          <div className={styles.body_section_top_image}>
            <Image
              src={"/svgs/girl-on-phone.svg"}
              alt="logo"
              width={245}
              height={243}
            />
          </div>

          <article className={styles.body_section_article}>
            <h4>Lack of Representation</h4>
            <div className={styles.body_title_bubble}>the problem</div>
            <p className={styles.body_section_passage}>
              It all started when we realized that many{" "}
              <u>unique and authentic products</u> from niche ethnic stores
              often went unnoticed by the broader market. We wanted to change
              that. With a shared love for diverse cuisines and a deep
              appreciation for cultural traditions,{" "}
              <u>
                we embarked on a mission to connect these hidden gems with eager
                taste buds.
              </u>
            </p>
          </article>
        </div>

        <div className={styles.body_section_article_container}>
          <article
            className={`${styles.body_section_article} ${styles.body_section_orientation_right}`}
          >
            <h4>How We Are Tackling it</h4>
            <div className={styles.body_title_bubble}>opportunity</div>
            <p className={styles.body_section_passage}>
              Our journey has taken us on a global adventure, from{" "}
              <u>bustling markets to family-owned shops</u> tucked away in
              corners of the world. We've forged partnerships with local
              businesses, learned about the intricacies of various cuisines, and
              cultivated a <u>deep respect for cultural diversity.</u>
            </p>
          </article>
          <div className={styles.body_section_top_image}>
            <Image
              src={"/svgs/grow_store.svg"}
              alt="logo"
              width={245}
              height={243}
            />
          </div>
        </div>

        <p className={styles.fancy_text}>Read more about us...</p>
      </section>
      <section className={styles.footer_section}>
        <article className={styles.footer_text}>
          <h3>
            Access all your ethnic products and have them delivered{" "}
            <span className={styles.highlight}>under an hour</span>
          </h3>

          <p>
            Our platform connects you to all your favorite ethnic stores. Shop
            for your niche products and get to cooking we know how much that
            spice matters to you
          </p>
        </article>
        <div className={styles.footer_image}>
          <Image
            src={"/svgs/phone_in_about_us.svg"}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </section>
      <GetInTouchSection />
      <Footer color="#004449" backgroundColor="#FFFEF0" />
    </div>
  );
};

export default AboutUs;
