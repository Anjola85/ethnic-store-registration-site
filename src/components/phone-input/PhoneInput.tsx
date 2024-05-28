"use client";

import MuiPhoneNumber from "material-ui-phone-number-2";
import React, { CSSProperties, useState } from "react";
import { CountriesMap } from "./mapping/countryMapping";
import { Phone } from "./phoneInput.interface";

interface PhoneInputProps {
  onValueChange: (value: Phone) => void;
  styles?: CSSProperties;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onValueChange, styles }) => {
  const [value, setValue] = useState<string>("");

  const backgroundColor =
    styles && styles.backgroundColor ? styles.backgroundColor : "rgba(225, 225, 225, 0.21)";
  const padding = styles && styles.padding ? styles.padding : "0.5em";
  const borderRadius = styles && styles.borderRadius ? styles.borderRadius : "0.6em";

  const map = new CountriesMap();

  function handleOnChange(value: string) {
    const newValue = value.replace("-", "").replace("(", "").replace(")", "").replaceAll(" ", "");

    setValue(newValue);

    const mobileObject = map.getMatchingIsoCode(newValue);

    const mobile: Phone = {
      countryCode: mobileObject?.countryCode || "",
      isoType: mobileObject?.isoCode || "",
      phoneNumber: mobileObject?.phoneNumber || "",
    };

    onValueChange(mobile);
  }

  return (
    <div
      style={{
        background: backgroundColor,
        borderRadius: borderRadius,
        width: "100%",
        flexGrow: 1,
        marginBottom: styles?.marginBottom || "0",
      }}
    >
      <MuiPhoneNumber
        defaultCountry={"ca"}
        // value={value}
        onChange={(value: any) => handleOnChange(value)}
        placeholder="Optional"
        style={{
          padding: padding,
          minWidth: "80%",
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
        }}
        sx={{
          "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:before": {
            display: "none",
          },
          "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:after": {
            display: "none",
          },
          "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
            fontSize: styles?.fontSize || "1.2em",
            backgroundColor: backgroundColor + " !important",
            padding: padding,
          },
          "& .css-1x51dt5-MuiInputBase-input-MuiInput-input:focus": {
            backgroundColor: backgroundColor + " !important",
          },
          "& .css-1x51dt5-MuiInputBase-input-MuiInput-input:-internal-autofill-selected": {
            backgroundColor: backgroundColor + " !important",
          },
          backgroundColor: backgroundColor,
          //   borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default PhoneInput;
