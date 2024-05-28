"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CustomerSignUpWaitlist.module.css";
import Button from "../button/button";
import { AiOutlineClose } from "react-icons/ai";
import { useWaitlist } from "src/contexts/WaitlistContext";
import LoadingButton from "../async-button/LoadingButton";
import { useRouter } from "next/navigation";
import { CustomerPayload } from "src/app/api/payload/CustomerPayload";
import { customerResigtration } from "src/app/api/registration-api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import config from "config";
import { Phone } from "../phone-input/phoneInput.interface";
import PhoneInput from "../phone-input/PhoneInput";

interface Props {
  onClose?: () => void;
  onToggle?: () => void;
}
const SignUpWaitlist = ({ onClose, onToggle }: Props) => {
  const router = useRouter();
  const [isWaitlistComplete, setIsWaitlistComplete] = useState(false);

  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+1", // TODO: should be displayed on for,
    isoType: "CA", // TODO: should be displayed on for,
    email: "",
    zipCode: "",
    country: "",
    promotions: false,
  };

  const [formData, setFormData] = useState<any>(initialState);

  // const [formData, setFormData] = useState({
  //   full_name: "",
  //   mobile: "",
  //   email: "",
  //   zipCode: "",
  //   country: "",
  //   promotions: false,
  // });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    zipCode: "",
    country: "",
    // promotions: false,
  });

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

  const handleSubmit = () => {
    if (validateForm()) {
      // pass to API
      handleFormSubmit();

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        countryCode: "+1", // TODO: should be displayed on for,
        isoType: "CA", // TODO: should be displayed on for,
        email: "",
        zipCode: "",
        country: "",
        promotions: false,
      });
    }
  };

  const formValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  const { isCustomerWaitlistVisible, toggleCustomerWaitlist } = useWaitlist();

  const goTohomepage = () => {
    toggleCustomerWaitlist();
    router.push("/");
  };

  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonLoadingMessage, setButtonLoadingMessage] = useState<React.ReactNode>(
    <div>Yayy! &#129395;</div>
  );

  const handleFormSubmit = async () => {
    let resp: any;

    setButtonLoading(true);

    setIsWaitlistComplete(true);

    try {
      setButtonLoading(true);

      resp = await customerResigtration(formData);

      if (resp === undefined) {
        alert("Something went wrong. Please try again later");
        setButtonLoadingMessage(<div>Join Now</div>);
        return;
      }

      if (resp.status === false) {
        alert("You are already on our waitlist. Thank you!");
        setButtonLoadingMessage(<div>Join Now</div>);
        return;
      }

      // setIsWaitlistComplete(true);
    } catch (error) {
      // TODO: dsiplay an error message box
      console.error("An error occurred: ", error);
      alert("An error occurred joining the waitlist");
    } finally {
      setButtonLoading(false);

      if (resp?.status === false) return;

      setButtonLoadingMessage(<div>Yayy! &#129395;</div>);

      setTimeout(() => {
        setIsWaitlistComplete(true);
      }, 3000);
    }
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
    <>
      {isCustomerWaitlistVisible && (
        <div
          className={`${styles.global_overlay} ${styles.active}`}
          onClick={toggleCustomerWaitlist}
        ></div>
      )}
      <div className={`${styles.waitlist_container} ${isCustomerWaitlistVisible && styles.show}`}>
        {!isWaitlistComplete ? (
          <div className={`${styles.container} ${isCustomerWaitlistVisible && styles.show}`}>
            <div className={styles.image_container}>
              <div className={styles.image}>
                <Image
                  src={"/images/about-us-hero-1.jpg"}
                  alt="waitlist"
                  width={410}
                  height={500}
                />
              </div>
            </div>
            <div className={styles.text_container}>
              <AiOutlineClose
                className={styles.close_icon}
                onClick={() => {
                  toggleCustomerWaitlist();
                }}
              />

              <div className={styles.logo}>
                <Image src={"/svgs/quiikmart-logo.svg"} alt="logo" width={29} height={28} />
              </div>
              <h2>
                Join The Waitlist. <br /> Start Shopping & Saving When we go Live &#128640;
              </h2>
              <p>Sign up now and start shopping from your favorite local ethnic stores</p>
              <form className={styles.form} onSubmit={handleSubmit}>
                {/* Firstname Input */}
                <label htmlFor="firstName" className={styles.title_label}>
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.firstName && styles.error_input}`}
                  placeholder="Ex: John"
                />
                {errors.firstName && (
                  <label htmlFor="lastName" className={`${styles.error_label} ${styles.show}`}>
                    {errors.firstName}
                  </label>
                )}

                {/* Lastname Input */}
                <label htmlFor="lastName" className={styles.title_label}>
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.lastName && styles.error_input}`}
                  placeholder="Ex: Doe"
                />
                {errors.lastName && (
                  <label htmlFor="lastName" className={`${styles.error_label} ${styles.show}`}>
                    {errors.lastName}
                  </label>
                )}

                {/* Country Input */}
                <label htmlFor="country" className={styles.title_label}>
                  Country of Origin
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

                {/* Phone number field */}
                <label htmlFor="phoneNumber" className={styles.title_label}>
                  Phone number
                </label>
                <PhoneInput
                  onValueChange={handlePhoneInputChange}
                  styles={{
                    backgroundColor: "#FFFEF0",
                    padding: "0.2em",
                    fontSize: "1.3em",
                    marginBottom: "1em",
                  }}
                />

                {errors.phoneNumber && (
                  <label htmlFor="phoneNumber" className={`${styles.error_label} ${styles.show}`}>
                    {errors.phoneNumber}
                  </label>
                )}

                {/* Email Input */}
                <label htmlFor="email" className={styles.title_label}>
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email && styles.error_input}`}
                  placeholder="Ex: example@gmail.com"
                />
                {errors.email && (
                  <label htmlFor="email" className={`${styles.error_label} ${styles.show}`}>
                    {errors.email}
                  </label>
                )}

                {/* ZipCode Input */}
                <label htmlFor="zipCode" className={styles.title_label}>
                  Zipcode
                </label>
                <input
                  type="text"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.zipCode && styles.error_input}`}
                  placeholder="Ex: M3J 0K9"
                />
                {errors.zipCode && (
                  <label htmlFor="zipCode" className={`${styles.error_label} ${styles.show}`}>
                    {errors.zipCode}
                  </label>
                )}

                {/* Checkbox */}
                <div className={styles.checkbox_container}>
                  <input type="checkbox" id="checkbox" className={styles.checkbox} />
                  <label htmlFor="checkbox" className={styles.checkbox_label}>
                    I want to hear more about Quiikmart's products, journey and news
                  </label>
                </div>

                {/* Button */}
                <LoadingButton
                  isLoading={buttonLoading}
                  className={`${styles.btn} ${formValid() ? styles.valid : styles.invalid}`}
                  onClick={handleSubmit}
                  doneMessage={buttonLoadingMessage}
                >
                  Join Now
                </LoadingButton>
              </form>
            </div>
          </div>
        ) : (
          <div
            className={`${styles.all_done_container} ${isCustomerWaitlistVisible && styles.show}`}
          >
            <div className={styles.all_done}>
              <Button
                className={styles.all_done_btn}
                backgroundColor="rgba(0, 68, 73, 1)"
                color="#fff"
                onClick={goTohomepage}
              >
                <div className={styles.all_done_btn_txt}>Homepage</div>
              </Button>
              <div className={styles.all_done_image}>
                <Image src={"/svgs/quiikmart-logo.svg"} alt="logo" width={29} height={28} />
              </div>
              <h2>Yayy! We're glad to have you here &#x1F389;</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpWaitlist;
