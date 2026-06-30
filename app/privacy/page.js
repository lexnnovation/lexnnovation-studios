import Legal from "@/components/Legal";
import { site } from "@/lib/site";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <Legal title="Privacy Policy" updated="June 30, 2026">
      <h2>1. Introduction</h2>
      <p>
        {site.name} ("we", "our", "us") operates this website and the WhatsApp AI Receptionist
        service. This Privacy Policy explains what information we collect, how we use it, and the
        choices you have. By using our website or messaging our WhatsApp business number, you agree
        to this policy.
      </p>

      <h2>2. Information we collect</h2>
      <p>When you message our WhatsApp business number, we may collect:</p>
      <ul>
        <li>Your phone number and WhatsApp profile name</li>
        <li>The content of messages you send to us</li>
        <li>Timestamps and conversation history (to keep context)</li>
        <li>Details you provide when we qualify your enquiry (such as your interest or request)</li>
      </ul>
      <p>When you use this website or contact us, we may collect your name, email address, and any message you choose to send.</p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to your enquiries and provide our services</li>
        <li>To share relevant business information with you</li>
        <li>To capture and follow up on leads when you express interest</li>
        <li>To improve the quality and reliability of our service</li>
      </ul>

      <h2>4. Data storage and security</h2>
      <p>
        Your data is stored securely using industry-standard practices, including encryption in
        transit and database row-level security (via Supabase). We do not sell or rent your
        personal information, and we do not share it with third parties for their own marketing.
      </p>

      <h2>5. Third-party services</h2>
      <p>We rely on trusted providers to operate:</p>
      <ul>
        <li>Meta (WhatsApp Business API) — to send and receive messages</li>
        <li>OpenAI — to generate AI-powered responses</li>
        <li>Supabase — for secure data storage</li>
        <li>Vercel — for website hosting</li>
      </ul>
      <p>Your use of WhatsApp is also governed by Meta's own privacy policy.</p>

      <h2>6. Data retention</h2>
      <p>
        We retain conversation and lead data for as long as necessary to provide our services and
        for legitimate business purposes. You may request deletion at any time — see our{" "}
        <a href="/data-deletion">Data Deletion</a> page.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data. To do so,
        contact us at <ObfuscatedEmail />.
      </p>

      <h2>8. Children's privacy</h2>
      <p>Our services are intended for businesses and adults. We do not knowingly collect data from children.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this policy from time to time. Material changes will be reflected by the "Last updated" date above.</p>

      <h2>10. Contact us</h2>
      <p>
        {site.name}, {site.location}. Email: <ObfuscatedEmail />.
      </p>
    </Legal>
  );
}
