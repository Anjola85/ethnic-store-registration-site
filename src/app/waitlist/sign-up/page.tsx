"use client";

import React, { useState } from "react";
import styles from "./WaitlistSignup.module.css";
import Collage from "src/components/collage/Collage";
import LoadingButton from "src/components/async-button/LoadingButton";
import { useRouter } from "next/navigation";
import Navbar from "src/components/navbar/navbar";
import Image from "next/image";
import Head from "next/head";
import { customerResigtration } from "src/app/api/registration-api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import config from "config";
import Link from "next/link";
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import Button from "src/components/button/button";
import useAnalytics from "src/app/custom-hooks/useAnalytics";
import PhoneInput from "src/components/phone-input/PhoneInput";
import { Phone } from "src/components/phone-input/phoneInput.interface";

const WaitlistSignUpPage = () => {
  useAnalytics();

  const router = useRouter();

  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+1",
    isoType: "CA",
    email: "",
    zipCode: "",
    country: "",
    promotions: false,
  };

  const [formData, setFormData] = useState<any>(initialState);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    zipCode: "",
    country: "",
    // promotions: false,
  });

  const [isWaitlistComplete, setIsWaitlistComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear error on change
    setErrors({
      ...errors,
      [e.target.id]: "",
    });
  };

  function handlePhoneInputChange(value: Phone) {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      ["phoneNumber"]: value.phoneNumber,
      ["countryCode"]: value.countryCode,
      ["isoType"]: value.isoType,
    }));

    if (errors["phoneNumber"]) {
      setErrors({ ...errors, ["phoneNumber"]: "" });
    }
  }

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName ? "" : "Oh no, we need your first name",
      lastName: formData.lastName ? "" : "Oh no, we need your last name",
      phoneNumber: "",
      email:
        formData.email === ""
          ? "Oh no, we need your email"
          : /\S+@\S+\.\S+/.test(formData.email)
          ? ""
          : `Please include an "@" in the email address. '${formData.email}' is missing an @`,
      zipCode: formData.zipCode ? "" : "Oh no, we need your zip code",
      country: formData.country ? "" : "Oh no, we need your country",
      // promotions: false,
    };
    setErrors(newErrors);

    // Check if any error messages exist
    return !Object.values(newErrors).some((error) => error);
  };

  const formValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleFormSubmit();

      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        countryCode: "+1",
        isoType: "CA",
        email: "",
        zipCode: "",
        country: "",
        promotions: false,
      });
    }
  };

  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonLoadingMessage, setButtonLoadingMessage] = useState<React.ReactNode>(
    <div>Yayy! &#129395;</div>
  );
  const handleFormSubmit = async () => {
    let resp: any;

    setButtonLoading(true);

    try {
      let resp: any;

      setButtonLoading(true);

      resp = await customerResigtration(formData);

      if (resp === undefined) {
        alert("Something went wrong. Please try again later");
        setButtonLoadingMessage(<div>Join waitlist</div>);
        return;
      }

      if (resp.status === false) {
        alert("You are already on our waitlist. Thank you!");
        setButtonLoadingMessage(<div>Join waitlist</div>);
        return;
      }

      // setIsWaitlistComplete(true);
    } catch (error) {
      // TODO: dsiplay an error message box
      // console.error("An error occurred joining the waitlist: ", error);
      // alert("An error occurred joining the waitlist");
      return;
    } finally {
      setButtonLoading(false);

      if (resp?.status === false) return;

      setButtonLoadingMessage(<div>Yayy! &#129395;</div>);

      setTimeout(() => {
        setIsWaitlistComplete(true);
      }, 3000);

      // setIsWaitlistComplete(true);
    }
  };

  const goTohomepage = () => {
    router.push("/");
  };

  const handleSelectCountry = (value: any) => {
    setFormData({
      ...formData,
      country: value?.label,
    });
    // Clear error on change
    setErrors({
      ...errors,
      country: "",
    });
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(217, 217, 217, 1)",
      padding: "0.1em 0",
      marginBottom: "0.3em",
      fontSize: "1.1rem",
      fontWeight: 500,
      color: "rgba(0, 0, 0, 1)",
      boxShadow: "none", // Removes the border on focus
      borderRadius: "0",
    }),
    input: (provided: any) => ({
      ...provided,
      padding: "0",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "rgba(217, 217, 217, 1)",
      fontSize: "1.1rem",
    }),
    // Add other parts you want to style (e.g., menu, option, etc.)
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "white" : "black", // Black text color for options
      backgroundColor: state.isSelected ? "blue" : "white", // You can change 'blue' to any color you like for the selected option
    }),
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Join us on Quiikmart</title>
        <meta property="og:title" content="Join us on Quiikmart" />
        <meta property="og:description" content="Join us on Quiikmart" />
        <meta property="og:url" content="https://www.quiikmart.com/waitlist/sign-up" />
      </Head>
      <Navbar
        buttonlink={"/waitlist/sign-up"}
        wantSecondaryColor
        theme={{ primaryColor: "#004449", secondaryColor: "#fff" }}
      />
      {isWaitlistComplete ? (
        <div className={styles.waitlist_container}>
          <h2>Yayy! We're glad to have you here &#x1F389;</h2>
          <div className={styles.waitlist_top_image}>
            <Image src={"/svgs/rocket.svg"} alt="waitlist image" width={246} height={246} />
          </div>
          <Button
            className={styles.all_done_btn}
            backgroundColor="rgba(0, 68, 73, 1)"
            color="#fff"
            onClick={goTohomepage}
          >
            Homepage
          </Button>

          <div className={styles.waitlist_bottom_container}>
            <div className={styles.waitlist_bottom_image}>
              <Image
                src={"/svgs/social-media-1.svg"}
                alt="waitlist share image"
                width={129}
                height={129}
              />
            </div>
            <div className={styles.waitlist_bottom_text}>
              <h3>Tell your friends about Quiikmart?</h3>
              <div className={styles.waitlist_social_links}>
                <Link href="https://twitter.com/quiikmart">
                  <AiOutlineTwitter className={styles.social_icon} />
                </Link>
                <Link href="https://www.facebook.com/quiik.mart/">
                  <AiFillFacebook className={styles.social_icon} />
                </Link>
                <Link href="https://www.instagram.com/quiikmart">
                  <AiOutlineInstagram className={styles.social_icon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.text_container}>
          <h2>
            Join The Waitlist. <br /> Start Shopping & Saving When we go Live &#128640;
          </h2>
          <p>Sign up now and start shopping from your favorite local ethnic stores</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* First name Input */}
            <label htmlFor="firstName" className={styles.title_label}>
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`${styles.input} ${errors.firstName && styles.error_input}`}
              placeholder="Ex Tina"
            />
            {errors.firstName && (
              <label htmlFor="firstName" className={`${styles.error_label} ${styles.show}`}>
                {errors.firstName}
              </label>
            )}
            {/* Last name input */}
            <label htmlFor="lastName" className={styles.title_label}>
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`${styles.input} ${errors.lastName && styles.error_input}`}
              placeholder="Ex Turner"
            />
            {errors.lastName && (
              <label htmlFor="lastName" className={`${styles.error_label} ${styles.show}`}>
                {errors.lastName}
              </label>
            )}
            {/* Country */}
            <label htmlFor="country" className={styles.title_label}>
              Country of origin
            </label>
            <GooglePlacesAutocomplete
              apiKey={config.GOOGLE_API_KEY}
              selectProps={{
                isClearable: true,
                onChange: handleSelectCountry,
                styles: customStyles,
                placeholder: "Ex: Jamaica",
              }}
              autocompletionRequest={{
                types: ["(regions)"],
              }}
            />
            {errors.country && (
              <label htmlFor="country" className={`${styles.error_label} ${styles.show}`}>
                {errors.country}
              </label>
            )}
            {/* Phone number */}
            <label htmlFor="phoneNumber" className={styles.title_label}>
              Phone number
            </label>

            <PhoneInput
              onValueChange={handlePhoneInputChange}
              styles={{
                backgroundColor: "#FFFEF0",
                padding: "0em",
                fontSize: "1.3em",
                marginBottom: "1em",
              }}
            />
            {errors.phoneNumber && (
              <label htmlFor="phoneNumber" className={`${styles.error_label} ${styles.show}`}>
                {errors.phoneNumber}
              </label>
            )}
            {/* Email */}
            <label htmlFor="email" className={styles.title_label}>
              Email
            </label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email && styles.error_input}`}
              placeholder="Ex example@gmail.com"
            />
            {errors.email && (
              <label htmlFor="email" className={`${styles.error_label} ${styles.show}`}>
                {errors.email}
              </label>
            )}
            {/* Zipcode */}
            <label htmlFor="zipCode" className={styles.title_label}>
              Zipcode
            </label>
            <input
              type="text"
              id="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={`${styles.input} ${errors.zipCode && styles.error_input}`}
              placeholder="Ex: m3j 0k9"
            />
            {errors.zipCode && (
              <label htmlFor="zipCode" className={`${styles.error_label} ${styles.show}`}>
                {errors.zipCode}
              </label>
            )}

            <LoadingButton
              isLoading={buttonLoading}
              className={`${styles.btn} ${formValid() ? styles.valid : styles.invalid}`}
              onClick={handleSubmit}
              doneMessage={buttonLoadingMessage}
            >
              Join waitlist
            </LoadingButton>
          </form>

          <h3>
            Bringing home closer to you with a{" "}
            <span className={styles.highlight}>single click </span>
          </h3>

          <div className={styles.image_container}>
            <Image src={"/svgs/save_and_shop.svg"} alt="waitlist image" width={255} height={255} />
          </div>

          {/* <Collage /> */}

          {/* <h3>Popular Stores Close to You</h3> */}
        </div>
      )}
    </div>
  );
};

export default WaitlistSignUpPage;
