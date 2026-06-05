import type { Metadata } from "next";
import PrivacyPolicy from "../components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Helios",
  description: "Read the Privacy Policy for Helios.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
