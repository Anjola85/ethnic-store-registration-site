import { Metadata } from "next";
import AboutUs from "./components/AboutUs";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUsPage = () => {
  return <AboutUs />;
}

export default AboutUsPage;
