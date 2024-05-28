import { Phone } from "src/components/phone-input/phoneInput.interface";

export interface BusinessDetails {
  name: string;
  address: string;
  email: string;
  businessType: string;
  countryEthnicity: string;
  mobile: Phone;
}
