import type { Metadata } from "next";
import TermsNCondition from "../../components/TermsNCondition";

export const metadata: Metadata = {
  title: "Terms and Conditions | [App Name]",
  description: "Read the Terms and Conditions for [App Name].",
};

export default function TermsAndConditionsPage() {
  return <TermsNCondition />;
}
