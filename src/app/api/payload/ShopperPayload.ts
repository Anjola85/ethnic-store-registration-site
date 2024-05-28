import { MobileDto } from "./CustomerPayload";

export interface ShopperPayload {
  firstName: string;
  lastName: string;
  mobile: MobileDto;
  email: string;
  zipCode: string;
  age: string;
  country: string;
}
