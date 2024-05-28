export interface CustomerPayload {
  firstName: string;
  lastName: string;
  mobile: MobileDto;
  email: string;
  zipCode: string;
  country: string;
  promotions: boolean;
}

export interface MobileDto {
  phoneNumber: string;

  countryCode: string;

  isoType: string;
}
