import { encryptData } from "./crypto";
import { BusinessPayload } from "./payload/BusinessPayload";
import { CustomerPayload } from "./payload/CustomerPayload";
import axios from "axios";
import { ShopperPayload } from "./payload/ShopperPayload";
import config from "config";

type payload = {
  status: boolean;
  message: string;
  data?: any;
};

export const customerResigtration = async (formData: any): Promise<payload> => {
  try {
    const customerPayload: CustomerPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: {
        phoneNumber: formData.phoneNumber,
        countryCode: formData.countryCode,
        isoType: formData.isoType,
      },
      email: formData.email,
      zipCode: formData.zipCode,
      country: formData.country,
      promotions: formData.promotions,
    };

    // const encryptedPayload = await encryptData(customerPayload);

    // const reqBody = { payload: encryptedPayload };
    const URL = `${config.BASE_URL}/waitlist/join-customer`;

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      cryptoreq: "false",
      cryptoresp: "false",
    };

    const resp = await axios.post(URL, customerPayload, { headers });

    return {
      status: resp.data.status || true,
      message: resp.data.message,
    };
  } catch (error: any) {
    if (error.name === "AxiosError") {
      if (error.response && error.response.status === 409) {
        return {
          status: error.response.data.status || false,
          message: error.response.data.message || "conflict",
        };
      } else {
        // Handle other Axios errors
        return {
          status: error.response.data.status || false,
          message: error.response.data.message || "",
        };
      }
    } else {
      // Handle non-Axios errors - Generic errors
      return {
        status: error.response.data.status || false,
        message: error.response.data.message || "",
      };
    }
  }
};

export const businessRegistration = async (formData: any): Promise<payload> => {
  try {
    const businessPayload: BusinessPayload = {
      name: formData.name,
      mobile: {
        phoneNumber: formData.mobile.phoneNumber,
        countryCode: formData.mobile.countryCode,
        isoType: formData.mobile.isoType,
      },
      email: formData.email,
      address: formData.address,
      countryEthnicity: formData.countryEthnicity,
      businessType: formData.businessType,
    };

    // encrypt payload
    // const encryptedPayload = await encryptData(businessPayload);

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      cryptoreq: "false",
      cryptoresp: "false",
    };

    const URL = `${config.BASE_URL}/waitlist/join-business`;
    const resp = await axios.post(URL, businessPayload, { headers });

    return {
      status: resp.data.status || true,
      message: resp.data.message,
    };
  } catch (error: any) {
    if (error.name === "AxiosError") {
      if (error.response && error.response.status === 409) {
        return {
          status: error.response.data.status || false,
          message: error.response.data.message || "conflict",
        };
      } else {
        // Handle other Axios errors
        return {
          status: error.response.data.status || false,
          message: error.response.data.message || "",
        };
      }
    } else {
      // Handle non-Axios errors - Generic errors
      return {
        status: error.response.data.status || false,
        message: error.response.data.message || "",
      };
    }
  }
};

export const shopperRegistration = async (formData: any): Promise<payload> => {
  try {
    const shopperPayload: ShopperPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: {
        phoneNumber: formData.phoneNumber,
        countryCode: formData.countryCode,
        isoType: formData.isoType,
      },
      email: formData.email,
      zipCode: formData.zipCode,
      age: formData.age,
      country: formData.country,
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      cryptoreq: "false",
      cryptoresp: "false",
    };

    // encrypt payload
    // const encryptedPayload = await encryptData(shopperPayload);

    const URL = `${config.BASE_URL}/waitlist/join-shopper`;
    const resp = await axios.post(URL, shopperPayload, { headers });
    return {
      status: resp.data.status || true,
      message: resp.data.message,
    };
  } catch (error: any) {
    if (error.name === "AxiosError") {
      if (error.response && error.response.status === 409) {
        return {
          status: error.response.data.status || false,
          message: error.response.data.message || "conflict",
        };
      } else {
        // Handle other Axios errors
        return {
          status: error.response.data.status || false,
          message: error.response.data.message || "",
        };
      }
    } else {
      // Handle non-Axios errors - Generic errors
      return {
        status: error.response.data.status || false,
        message: error.response.data.message || "",
      };
    }
  }
};
