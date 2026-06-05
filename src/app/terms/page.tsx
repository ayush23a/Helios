import type { Metadata } from "next";
import TermsNCondition from "../components/TermsNCondition";

export const metadata: Metadata = {
  title: "Terms and Conditions | Helios",
  description: "Read the Terms and Conditions for Helios.",
};

export default function TermsAndConditionsPage() {
  return <TermsNCondition />;
}
