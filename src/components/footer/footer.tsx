"use client";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTiktok, BiLogoLinkedin } from "react-icons/bi";
import { CanadaFlag } from "../../../public/svgs";
import "./footer.css";
import Button from "../button/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWaitlist } from "src/contexts/WaitlistContext";

interface FooterProps {
  backgroundColor?: string;
  color?: string;
}

const Footer = ({ backgroundColor, color }: FooterProps) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

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

  const isMobile = windowWidth && windowWidth <= 768;

  const router = useRouter();

  const { toggleCustomerWaitlist, toggleDriverWaitlist } = useWaitlist();

  function handleSignUp() {
    if (isMobile) {
      router.push("/waitlist/sign-up");
      return;
    }
    toggleCustomerWaitlist();
  }

  function handleBecomeQuiikster() {
    if (isMobile) {
      router.push("/waitlist/become-a-quiikster");
      return;
    }
    toggleDriverWaitlist();
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__links">
          <div className="footer__links__item">
            <Link href="/">
              <Image
                src={"/svgs/quiikmart-white-logo.svg"}
                alt="quiikmart logo"
                width={50}
                height={50}
              />
            </Link>
            <h4>
              Made with <span style={{ color: "red" }}>&#x2764;</span> in Toronto
            </h4>
            <p>
              &copy; Copyright 2023 Quiikmart Inc <br /> All rights reserved.
            </p>
          </div>
          <div className="footer__links__item links">
            <Link href="/about-us" className="links_title">
              Company
            </Link>
            <Link href="/about-us" className="links_item">
              About
            </Link>
            <Link href="/partner-with-us" className="links_item">
              Business
            </Link>
            <div className="links_item">Community</div>
            <div className="links_item" onClick={handleBecomeQuiikster}>
              Jobs
            </div>
            <Link href="/contact-us" className="links_item">
              FAQ
            </Link>
          </div>

          <div className="footer__links__item links">
            <Link href="/about-us" className="links_title">
              Legal
            </Link>
            <Link href="/partner-with-us" className="links_item">
              Register
            </Link>
            <Link href="/" className="links_item">
              Terms of Services
            </Link>
            <Link href="/privacy-policy" className="links_item">
              Privacy Policy
            </Link>
            <Link href="/" className="links_item">
              Cookie Policy
            </Link>
            <Link href="/" className="links_item">
              Change Cookie Settings
            </Link>
            <Link href="/contact-us" className="links_item">
              Contact us
            </Link>
          </div>

          {/* <div className="footer__links__item" /> */}

          <div className="footer__links__item social">
            <Link href="https://www.instagram.com/quiikmart" className=" social__link">
              Follow us
            </Link>

            <aside className="footer__links__item__social">
              <Link href="https://www.facebook.com/quiik.mart/">
                <AiFillFacebook className="social-icon" />
              </Link>
              <Link href="https://twitter.com/quiikmart">
                <AiOutlineTwitter className="social-icon" />
              </Link>
              <Link href="https://www.instagram.com/quiikmart">
                <AiOutlineInstagram className="social-icon" />
              </Link>
              <Link href="https://www.tiktok.com/@quiikmart">
                <BiLogoTiktok className="social-icon" />
              </Link>
              <Link href="https://www.linkedin.com/company/quiikmart">
                <BiLogoLinkedin className="social-icon" />
              </Link>
            </aside>
            <div className="footer__links__item mobile_view">
              <Link href="/">
                <Image
                  src={"/svgs/quiikmart-white-logo.svg"}
                  alt="quiikmart logo"
                  width={45}
                  height={45}
                />
              </Link>
              <h4>
                Made with <span style={{ color: "red" }}>&#x2764;</span> in Toronto
              </h4>
              <p>
                &copy; Copyright 2023 Quiikmart Inc <br /> All rights reserved.
              </p>
            </div>
          </div>
        </section>
        <section className="bottom_links">
          {/* <Link href="/">Terms of Service</Link>
                    <Link href="/">Privacy Policy</Link> */}
        </section>

        <div className="button__border" style={{ border: `1px solid ${color}` }}>
          <Button className="footer__btn" backgroundColor={backgroundColor} color={color}>
            <div className="footer__btn__txt">English</div>
          </Button>
        </div>
      </div>
      <nav className="footer__footer">
        <span className="country">
          {/* <CanadaFlag /> */}
          Canada
        </span>
        <span className="company">2023 Quiikmart Inc</span>
      </nav>
    </footer>
  );
};

export default Footer;
