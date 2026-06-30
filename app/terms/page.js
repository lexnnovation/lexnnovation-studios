import Legal from "@/components/Legal";
import { site } from "@/lib/site";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export const metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${site.name}'s website and services.`,
};

export default function TermsPage() {
  return (
    <Legal title="Terms of Service" updated="June 30, 2026">
      <h2>1. Acceptance of terms</h2>
      <p>
        These Terms of Service ("Terms") govern your use of the {site.name} website and the
        WhatsApp AI Receptionist service (together, the "Services"). By accessing or using the
        Services, you agree to these Terms. If you do not agree, please do not use the Services.
      </p>

      <h2>2. The Services</h2>
      <p>
        {site.name} provides software and AI services, including the WhatsApp AI Receptionist — an
        AI assistant that chats with customers, answers enquiries, qualifies them, and captures
        leads. We may add, change, or discontinue features at any time.
      </p>

      <h3>2.1 Account suspension and Meta compliance</h3>
      <p>
        We reserve the right to instantly terminate or suspend access to Reciva if a business tenant
        violates the Meta WhatsApp Commerce Policy, uses the tool to distribute automated spam, or
        breaches local regulatory messaging frameworks.
      </p>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>Do not use the Services for unlawful, harmful, or abusive purposes</li>
        <li>Do not attempt to disrupt, reverse-engineer, or gain unauthorized access to the Services</li>
        <li>Do not submit content that infringes the rights of others</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        The Services, including all software, content, and branding, are owned by {site.name} and
        protected by applicable laws. You may not copy, modify, or redistribute them without our
        permission.
      </p>

      <h2>5. Third-party services</h2>
      <p>
        The Services rely on third parties (including Meta/WhatsApp, OpenAI, Supabase, and Vercel).
        Your use of those services may be subject to their own terms.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        The Services are provided "as is" without warranties of any kind. We do not guarantee that
        the Services will be uninterrupted, error-free, or fit for a particular purpose.
      </p>

      <h3>6.1 Conversational AI accuracy</h3>
      <p>
        Reciva is powered by advanced Large Language Models (LLMs). You acknowledge that AI responses
        are generative and contextual. {site.name} provides no warranties regarding absolute textual
        accuracy and shall not be held liable for system hallucinations, incorrect price generation,
        or automated booking discrepancies. The business tenant retains final oversight over all
        automated workflows.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {site.name} shall not be liable for any indirect,
        incidental, or consequential damages arising from your use of the Services.
      </p>

      <h2>8. Governing law</h2>
      <p>These Terms are governed by the laws of the Republic of Ghana.</p>

      <h2>9. Changes to these terms</h2>
      <p>We may update these Terms from time to time. Continued use of the Services means you accept the updated Terms.</p>

      <h2>10. Contact us</h2>
      <p>
        Questions about these Terms? Email <ObfuscatedEmail />.
      </p>
    </Legal>
  );
}
