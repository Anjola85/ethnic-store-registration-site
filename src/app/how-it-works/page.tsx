import { Metadata } from "next";
import HowItWorks from "./components/HowItWorks"

export const metadata: Metadata = {
  title: "How It Works",
};

const HowItWorksPage = () => {
  return <HowItWorks />;
}

export default HowItWorksPage;
