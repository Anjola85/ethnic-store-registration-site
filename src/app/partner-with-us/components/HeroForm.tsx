"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormErrors } from "../interfaces/BusinessFormErrors.interface";
import Dropdown from "./Dropdown";
import Image from "next/image";
import useDelay from "src/app/custom-hooks/useDelay";
import { businessRegistration } from "src/app/api/registration-api";
import { BusinessDetails } from "../interfaces/BusinessDetails.interface";
import PhoneInput from "src/components/phone-input/PhoneInput";

const HeroForm = () => {
  const router = useRouter();
  const delayFunction = useDelay(3000); // 3-second delay

  const initialState = {
    name: "",
    address: "",
    email: "",
    businessType: "",
    countryEthnicity: "",
    mobile: {
      phoneNumber: "",
      countryCode: "+1",
      isoType: "CA",
    },
  };

  const [formData, setFormData] = useState<BusinessDetails>(initialState);

  const [formErrors, setFormErrors] = useState<any>({
    name: "",
    address: "",
    email: "",
    businessType: "",
    countryEthnicity: "",
    mobile: "",
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  function validateForm(data: any) {
    const errors: any = {};

    if (data.name === "") {
      errors.name = "Oops, we need your business name";
    }
    if (data.address === "") {
      errors.address = "Oh no, we need your address";
    }
    if (data.email === "") {
      errors.email = "We need a valid email address";
    }
    if (
      data.mobile.phoneNumber === "" ||
      data.mobile.phoneNumber.length + data.mobile.countryCode.length < 12
    ) {
      errors.mobile = "Your valid phone number is required";
    }
    if (data.businessType === "") {
      errors.businessType = "Please select your business type";
    }
    if (data.countryEthnicity === "") {
      errors.countryEthnicity = "Please select your country of origin";
    }
    return errors;
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  }

  function handlePhoneInputChange(value: any) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["mobile"]: value,
    }));

    if (formErrors["mobile"]) {
      setFormErrors({ ...formErrors, ["mobile"]: "" });
    }
  }

  function handleSelectChange(option: string) {
    setFormData((prevFormData) => ({ ...prevFormData, businessType: option }));
    if (formErrors.businessType) {
      setFormErrors({ ...formErrors, businessType: "" });
    }
  }

  useEffect(() => {
    // When formSubmitted is set to true, wait for the delay then redirect
    if (formSubmitted) {
      delayFunction(() => {
        router.push("/");
      });
    }
  }, [formSubmitted, delayFunction, router]);

  async function submit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      // make api call
      formData.mobile.phoneNumber = formData.mobile.phoneNumber.slice(1);

      try {
        const resp = await businessRegistration(formData);

        if (resp === undefined) {
          alert(
            "Something went wrong Submitting the form. Please try again later"
          );
          return;
        }

        if (resp.status === false) {
          alert("You are already on our waitlist. Thank you!");
          return;
        }
        setFormSubmitted(true);
      } catch (error) {
        // alert("Something went wrong. Please try again later");
        return;
      }
    } else {
      setFormErrors(errors);
    }
  }

  const Submission = (
    <div
      className={styles.form_container}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Image
        src="/svgs/submission.svg"
        alt="man holding mail"
        width={150}
        height={150}
      />
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Avenir Next",
          fontWeight: "700",
          fontSize: 18,
          width: "75%",
          marginBottom: "1em",
        }}
      >
        Thank you for your interest in Quiikmart!
      </h3>
      <p
        style={{
          textAlign: "center",
          color: "#3F3D56",
          width: "75%",
          marginBottom: "2em",
        }}
      >
        We will be in touch shortly. Look out for an email from us within 24
        hours
      </p>
      <p style={{ fontSize: 9, fontStyle: "italic", color: "#601124" }}>
        Redirecting to homepage in 3s....
      </p>
    </div>
  );

  if (formSubmitted) {
    return Submission;
  }

  return (
    <div className={styles.form_container}>
      <h3>Delivery Solution tailored to your business</h3>
      <p className={styles.form_container_subheading}>
        Tap into new revenue streams with Quiikmart - on our custom app and your
        own website
      </p>

      <form className={styles.hero_form}>
        {/* Business name */}
        <input
          type="text"
          placeholder="Business Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={{ border: formErrors.name ? "1px solid #FF3D00" : "" }}
        />
        {formErrors.name && (
          <p className={styles.form_error}>{formErrors.name}</p>
        )}
        {/* Business Address */}
        <input
          type="text"
          placeholder="Business Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          style={{ border: formErrors.address ? "1px solid #FF3D00" : "" }}
        />
        {formErrors.address && (
          <p className={styles.form_error}>{formErrors.address}</p>
        )}
        {/* Business ethnic type */}
        <input
          type="text"
          placeholder="Ex: Chinese/Asia or Jamaican/Caribbean"
          name="countryEthnicity"
          value={formData.countryEthnicity}
          onChange={handleInputChange}
          style={{
            border: formErrors.countryEthnicity ? "1px solid #FF3D00" : "",
          }}
        />
        {formErrors.countryEthnicity && (
          <p className={styles.form_error}>{formErrors.countryEthnicity}</p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: formErrors.phoneNumber ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: "0.8em",
            width: "100%",
          }}
        >
          {/* Email address input */}
          <div style={{ width: "100%" }}>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ border: formErrors.email ? "1px solid #FF3D00" : "" }}
            />
            {formErrors.email && (
              <p className={styles.form_error} style={{ marginTop: "0.8em" }}>
                {formErrors.email}
              </p>
            )}
          </div>
          <div style={{ width: "100%" }}>
            <PhoneInput
              onValueChange={handlePhoneInputChange}
              styles={{ backgroundColor: "rgba(196, 196, 196, 0.21)" }}
            />
            {formErrors.phoneNumber && (
              <p className={styles.form_error} style={{ marginTop: "0.8em" }}>
                {formErrors.phoneNumber}
              </p>
            )}
          </div>
        </div>

        <Dropdown onChange={handleSelectChange} />

        {formErrors.businessType && (
          <p className={styles.form_error}>{formErrors.businessType}</p>
        )}

        <button type="submit" onClick={submit} className={styles.hero_form_btn}>
          Get Started
        </button>
      </form>

      <p>
        Learn more about{" "}
        <Link href="/about-us">
          <u> Quiikmart here.</u>
        </Link>
      </p>
      <p>
        Have questions?{" "}
        <Link href="/how-it-works">
          <u>{"We've"} answers</u>
        </Link>
      </p>
    </div>
  );
};

export default HeroForm;
