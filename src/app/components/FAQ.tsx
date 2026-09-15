import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Button, COLORS } from "./ui";
import { Search, ChevronDown, LifeBuoy } from "lucide-react";

type QA = { cat: string; q: string; a: string };

const faqs: QA[] = [
  { cat: "faq.catGeneral", q: "What is TeachThrough?", a: "TeachThrough is an online marketplace connecting students with expert tutors across dozens of subjects, for lessons online or in person." },
  { cat: "faq.catGeneral", q: "How do I find the right tutor?", a: "Use Find Tutors or Advanced Search to filter by subject, price, availability, and ratings. You can also try our AI recommendation tool." },
  { cat: "faq.catBooking", q: "How do I book a lesson?", a: "Open a tutor's profile, choose a subject and duration, pick an available time slot, and confirm. You'll get an instant confirmation." },
  { cat: "faq.catBooking", q: "Can I reschedule or cancel?", a: "Yes. Free rescheduling and cancellation are available up to 12 hours before your lesson from your Bookings page." },
  { cat: "faq.catPayments", q: "What payment methods are supported?", a: "We accept all major credit and debit cards, PayPal, and local bank transfers in most countries." },
  { cat: "faq.catPayments", q: "When are tutors paid?", a: "Tutors receive payouts weekly for all completed lessons, minus the platform service fee." },
  { cat: "faq.catTutors", q: "How do I become a tutor?", a: "Click 'Teach on Platform', complete your profile, and pass verification. Most applications are reviewed within 2–3 business days." },
  { cat: "faq.catTutors", q: "How does verification work?", a: "You'll upload a government ID and education credentials. A verified badge builds trust and boosts your ranking in search." },
];

const cats = ["faq.catGeneral", "faq.catBooking", "faq.catPayments", "faq.catTutors"];

export function FAQ() {
  const { t } = useT();
  const { nav } = useSession();
  const [cat, setCat] = useState("faq.catGeneral");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const list = faqs
    .map((f, i) => ({ ...f, i }))
    .filter((f) => (query ? f.q.toLowerCase().includes(query.toLowerCase()) : f.cat === cat));

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}>{t("faq.title")}</h1>
          <p className="mt-2" style={{ color: COLORS.textMuted }}>{t("faq.sub")}</p>
        </div>

        <div className="mt-6 flex items-center gap-2 px-4 py-3 rounded-xl" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
          <Search className="w-5 h-5" style={{ color: COLORS.textMuted }} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("faq.searchPh")} className="flex-1 bg-transparent outline-none" style={{ color: COLORS.text }} />
        </div>

        {!query && (
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {cats.map((c) => {
              const on = cat === c;
              return <button key={c} onClick={() => setCat(c)} className="px-4 py-2 rounded-lg" style={{ backgroundColor: on ? COLORS.primary : COLORS.card, color: on ? "#fff" : COLORS.text, border: `1px solid ${on ? COLORS.primary : COLORS.border}` }}>{t(c)}</button>;
            })}
          </div>
        )}

        <div className="mt-6 space-y-3">
          {list.map((f) => {
            const isOpen = open === f.i;
            return (
              <div key={f.i} className="rounded-xl overflow-hidden" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                <button onClick={() => setOpen(isOpen ? null : f.i)} className="w-full flex items-center justify-between gap-4 p-4 text-left">
                  <span style={{ color: COLORS.text }}>{f.q}</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform" style={{ color: COLORS.textMuted, transform: isOpen ? "rotate(180deg)" : "none" }} />
                </button>
                {isOpen && <div className="px-4 pb-4" style={{ color: COLORS.textMuted }}>{f.a}</div>}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`, color: "#fff" }}>
          <LifeBuoy className="w-8 h-8 mx-auto" />
          <h2 className="mt-2" style={{ fontWeight: 700 }}>{t("faq.stillTitle")}</h2>
          <p className="opacity-90 mt-1">{t("faq.stillSub")}</p>
          <div className="mt-4 flex justify-center">
            <button onClick={() => nav("contact")} className="px-5 py-2.5 rounded-lg" style={{ backgroundColor: "#fff", color: COLORS.primary }}>{t("contact.tag")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
