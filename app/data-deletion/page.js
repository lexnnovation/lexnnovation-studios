import Legal from "@/components/Legal";
import { site } from "@/lib/site";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export const metadata = {
  title: "Data Deletion",
  description: `How to request deletion of your data from ${site.name}.`,
};

export default function DataDeletionPage() {
  return (
    <Legal title="Data Deletion Instructions" updated="June 30, 2026">
      <p>
        You have the right to request deletion of the personal data {site.name} holds about you,
        including your WhatsApp conversation history and any lead details we captured.
      </p>

      <h2>How to request deletion</h2>
      <p>
        Email <ObfuscatedEmail subject="Data Deletion Request" /> with the subject "Data Deletion
        Request".
      </p>
      <p>
        Please send your request from, or include, the phone number or email associated with your
        data so we can verify and locate it.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your phone number and WhatsApp profile information</li>
        <li>Your message and conversation history with us</li>
        <li>Any lead record we created from your enquiry</li>
      </ul>

      <h2>Timeframe</h2>
      <p>
        We will confirm your request and delete the data within 30 days, except where we are
        required to retain certain information by law.
      </p>

      <h2>Contact</h2>
      <p>
        {site.name}, {site.location}. Email: <ObfuscatedEmail />.
      </p>
    </Legal>
  );
}
