import { useT } from "../i18n";
import { COLORS } from "./ui";

type Section = { id: string; heading: string; body: string[] };

const termsSections: Section[] = [
  { id: "acceptance", heading: "1. Acceptance of Terms", body: ["By accessing or using TeachThrough, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, please do not use the platform."] },
  { id: "accounts", heading: "2. Accounts", body: ["You must provide accurate information when creating an account and are responsible for maintaining the security of your credentials.", "You must be at least 16 years old, or have parental consent, to use TeachThrough."] },
  { id: "bookings", heading: "3. Bookings & Lessons", body: ["Lessons are contracts between students and tutors. TeachThrough facilitates scheduling and payment but is not a party to the lesson itself.", "Free cancellation is available up to 12 hours before a scheduled lesson."] },
  { id: "payments", heading: "4. Payments & Fees", body: ["Students are charged at the time of booking. Tutors receive payouts weekly, less the platform service fee disclosed at checkout."] },
  { id: "conduct", heading: "5. Acceptable Use", body: ["You agree not to harass other users, share fraudulent content, or attempt to bypass the platform for payments. Violations may result in suspension."] },
  { id: "liability", heading: "6. Limitation of Liability", body: ["TeachThrough is provided “as is”. To the maximum extent permitted by law, we are not liable for indirect or consequential damages arising from use of the platform."] },
];

const privacySections: Section[] = [
  { id: "collect", heading: "1. Information We Collect", body: ["We collect information you provide directly (name, email, payment details) and data generated through use (bookings, messages, device information)."] },
  { id: "use", heading: "2. How We Use Information", body: ["We use your data to operate the marketplace, match students with tutors, process payments, and improve our services.", "We never sell your personal information to third parties."] },
  { id: "sharing", heading: "3. Sharing", body: ["Limited information is shared between students and tutors to facilitate lessons. Payment processing is handled by PCI-compliant providers."] },
  { id: "cookies", heading: "4. Cookies", body: ["We use cookies and similar technologies to keep you signed in, remember preferences, and analyze traffic. You can control cookies in your browser settings."] },
  { id: "rights", heading: "5. Your Rights", body: ["You may access, correct, export, or delete your personal data at any time from Account Settings, or by contacting our support team."] },
  { id: "security", heading: "6. Security", body: ["All data is encrypted in transit and at rest. We continuously monitor our systems to protect your information."] },
];

export function LegalPage({ variant }: { variant: "terms" | "privacy" }) {
  const { t } = useT();
  const isTerms = variant === "terms";
  const sections = isTerms ? termsSections : privacySections;
  const title = isTerms ? t("legal.tosTitle") : t("legal.privacyTitle");

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}>{title}</h1>
        <p className="mt-1" style={{ color: COLORS.textMuted }}>{t("legal.lastUpdated")}: Jul 1, 2026</p>

        <div className="mt-8 grid md:grid-cols-[220px_1fr] gap-8">
          {/* TOC */}
          <aside className="hidden md:block">
            <div className="sticky top-24">
              <div className="mb-2" style={{ color: COLORS.textMuted, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("legal.tocTitle")}</div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block py-1" style={{ color: COLORS.primary, fontSize: 14 }}>{s.heading}</a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="p-6 md:p-8 rounded-2xl space-y-8" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 style={{ color: COLORS.text, fontWeight: 700 }}>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-2" style={{ color: COLORS.textMuted, lineHeight: 1.7 }}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
