import { Metadata } from "next";
import ContactUsPage from "./components/ContactUsPage"

export const metadata: Metadata = {
  title: "Contact Us",
};

const Page = () => {
  return <ContactUsPage />;
}

export default Page;
