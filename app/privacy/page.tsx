import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Orangutany collects, uses, and protects your information. Covers cookies, analytics, and third-party advertising.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-xs text-muted-foreground">
        Last updated: March 21, 2026
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/85">
        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Who We Are
          </h2>
          <p>
            Orangutany is operated by Nomadic Shepherd Limited, a Canadian
            corporation based in Markham, Ontario. Our guide site
            (guide.orangutany.com) provides educational mushroom identification
            content. Our main app (orangutany.com) offers AI-powered mushroom
            identification.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Information We Collect
          </h2>
          <p className="mb-3">
            <span className="font-semibold text-primary">Guide site</span>{" "}
            (guide.orangutany.com): We do not require accounts or collect
            personal information directly. We may collect anonymous usage data
            through cookies and analytics tools to understand how visitors use
            the site.
          </p>
          <p>
            <span className="font-semibold text-primary">Main app</span>{" "}
            (orangutany.com): If you create an account, we collect your email
            address and, optionally, your name. Photos you upload for
            identification are processed by our AI service and may be stored to
            improve the service. Payment information is processed securely by
            Stripe; we never store your card details.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Cookies
          </h2>
          <p>
            We use cookies for essential site functionality (such as session
            management on the main app) and for analytics purposes. Third-party
            advertising partners, including Google AdSense, may use cookies to
            serve ads based on your prior visits to this site or other websites.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Third-Party Advertising
          </h2>
          <p className="mb-3">
            We use Google AdSense to display advertisements on our guide site.
            Google and its advertising partners may use cookies and similar
            technologies to serve ads based on your browsing activity.
          </p>
          <p>
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Ads Settings
            </a>{" "}
            or{" "}
            <a
              href="https://optout.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              aboutads.info
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>To provide and improve our mushroom identification services</li>
            <li>To display relevant educational content</li>
            <li>To process payments for premium features</li>
            <li>To send transactional emails (password resets, welcome emails)</li>
            <li>To understand site usage through analytics</li>
            <li>To display advertisements via Google AdSense</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Data Sharing
          </h2>
          <p>
            We do not sell your personal information. We share data only with
            service providers that help us operate (Stripe for payments, Resend
            for email, Google for analytics and advertising). Each provider has
            its own privacy policy governing how it handles data.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Data Retention
          </h2>
          <p>
            Account data is retained as long as your account is active. You can
            request deletion of your account and associated data by contacting
            us. Analytics data is retained in aggregate form and cannot be tied
            back to individual users.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Your Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, or delete your personal data. To exercise these rights,
            contact us at{" "}
            <a
              href="mailto:varun@orangutany.com"
              className="text-primary hover:underline"
            >
              varun@orangutany.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. Changes will be posted
            on this page with an updated date. Continued use of the site after
            changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Contact
          </h2>
          <p>
            Questions about this policy? Email{" "}
            <a
              href="mailto:varun@orangutany.com"
              className="text-primary hover:underline"
            >
              varun@orangutany.com
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
