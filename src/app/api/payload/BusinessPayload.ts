import { MobileDto } from "./CustomerPayload";

export interface BusinessPayload {
  name: string;
  mobile: MobileDto;
  email: string;
  address: string;
  countryEthnicity: string;
  businessType: string;
}
