import type { Metadata } from "next";
import DeleteAccount from "../components/DeleteAccount";

export const metadata: Metadata = {
  title: "Request Account Deletion | Helios",
  description: "Request deletion of your Helios account and associated data.",
};

export default function DeleteAccountPage() {
  return <DeleteAccount />;
}
