import type { Metadata } from "next";
import PrivacyPolicy from "../../components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | [App Name]",
  description: "Read the Privacy Policy for [App Name].",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
