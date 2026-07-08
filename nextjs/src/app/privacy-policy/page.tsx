import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Brandexa Growth",
  description: "Privacy Policy for Brandexa Growth.",
};

const policySections = [
  {
    title: "1. Information We Collect",
    body: [
      {
        heading: "Personal Information",
        text: "When you contact us, request a quote, or use our services, we may collect:",
        items: [
          "Full Name",
          "Email Address",
          "Phone Number",
          "Company Name",
          "Project Requirements",
          "Any other information you voluntarily provide",
        ],
      },
      {
        heading: "Automatically Collected Information",
        text: "When you browse our website, we may automatically collect:",
        items: [
          "IP Address",
          "Browser Type",
          "Device Information",
          "Operating System",
          "Pages Visited",
          "Date and Time of Visit",
          "Referring Website",
          "Cookies and similar technologies",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    intro: "We use your information to:",
    items: [
      "Respond to inquiries and support requests",
      "Provide digital marketing and web development services",
      "Prepare quotations and proposals",
      "Improve our website and user experience",
      "Analyze website traffic and performance",
      "Send service updates and important communications",
      "Prevent fraud and enhance website security",
      "Comply with legal obligations",
    ],
  },
  {
    title: "3. Cookies",
    intro: "Our website may use cookies to:",
    items: [
      "Improve website functionality",
      "Remember user preferences",
      "Analyze visitor behavior",
      "Measure website performance",
      "Support marketing and advertising campaigns",
    ],
    outro:
      "You can disable cookies through your browser settings, although some website features may not function properly.",
  },
  {
    title: "4. Third-Party Services",
    intro: "We may use trusted third-party service providers such as:",
    items: [
      "Website hosting providers",
      "Analytics services, such as Google Analytics",
      "Email communication platforms",
      "Customer relationship management (CRM) systems",
      "Advertising platforms",
      "Payment service providers, if applicable",
    ],
    outro: "These providers only receive the information necessary to perform their services.",
  },
  {
    title: "5. Data Sharing",
    paragraphs: ["We do not sell, rent, or trade your personal information."],
    intro: "We may share information only when:",
    items: [
      "Required by law",
      "Necessary to provide requested services",
      "Protecting our legal rights",
      "Working with trusted service providers under confidentiality obligations",
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We implement reasonable administrative, technical, and organizational measures to protect your information against unauthorized access, loss, misuse, or disclosure.",
      "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "7. Data Retention",
    intro: "We retain personal information only for as long as necessary to:",
    items: [
      "Deliver our services",
      "Maintain business records",
      "Comply with legal and regulatory requirements",
      "Resolve disputes and enforce agreements",
    ],
  },
  {
    title: "8. Your Rights",
    intro: "Depending on applicable laws, you may have the right to:",
    items: [
      "Access your personal information",
      "Correct inaccurate information",
      "Request deletion of your data",
      "Restrict or object to certain processing",
      "Withdraw consent where applicable",
      "Request a copy of your personal data",
    ],
    outro: "To exercise these rights, please contact us using the details below.",
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "10. External Links",
    paragraphs: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.",
      "We encourage you to review their privacy policies before providing any personal information.",
    ],
  },
  {
    title: "11. International Data Transfers",
    paragraphs: [
      "If you access our website from outside the country where our servers are located, your information may be transferred and processed in another jurisdiction where data protection laws may differ.",
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time.",
      "Any changes will be posted on this page with a revised Effective Date. Continued use of the website after updates constitutes acceptance of the revised policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-policy-page">
      <section className="privacy-policy-hero">
        <div className="privacy-policy-shell">
          <p className="privacy-policy-kicker">Effective Date: July 8, 2026</p>
          <h1>
            Privacy <span>Policy</span>
          </h1>
          <nav aria-label="Breadcrumb" className="privacy-policy-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">*</span>
            <span>Privacy Policy</span>
          </nav>
        </div>
      </section>

      <section className="privacy-policy-content">
        <div className="privacy-policy-shell">
          <div className="privacy-policy-card">
            <p>
              At <strong>Brandexa Growth</strong>, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our
              services.
            </p>
            <p>By accessing or using our website, you agree to the terms of this Privacy Policy.</p>

            {policySections.map((section) => (
              <section className="privacy-policy-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.intro ? <p>{section.intro}</p> : null}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.body?.map((block) => (
                  <div className="privacy-policy-subsection" key={block.heading}>
                    <h3>{block.heading}</h3>
                    <p>{block.text}</p>
                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {section.outro ? <p>{section.outro}</p> : null}
              </section>
            ))}

            <section className="privacy-policy-section privacy-policy-contact">
              <h2>13. Contact Us</h2>
              <p>If you have any questions regarding this Privacy Policy or our data practices, please contact us.</p>
              <address>
                <strong>Brandexa Growth</strong>
                <span>
                  Email: <a href="mailto:hello@brandexagrowth.com">hello@brandexagrowth.com</a>
                </span>
                <span>
                  Website: <a href="https://www.brandexagrowth.com/">https://www.brandexagrowth.com</a>
                </span>
                <span>Phone: +91 93306 48291</span>
                <span>Business Address: Available upon request</span>
              </address>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
