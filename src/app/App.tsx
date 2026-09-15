import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { FindTutors } from "./components/FindTutors";
import { TutorProfile } from "./components/TutorProfile";
import { AuthPage } from "./components/AuthPage";
import { TutorRegistration } from "./components/TutorRegistration";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Subjects } from "./components/Subjects";
import { StudentDashboard } from "./components/StudentDashboard";
import { TutorDashboard } from "./components/TutorDashboard";
import { AdminDashboard } from "./components/AdminDashboard";
import { BookingFlow } from "./components/BookingFlow";
import { BookingHistory } from "./components/BookingHistory";
import { PaymentCheckout } from "./components/PaymentCheckout";
import { PaymentHistory } from "./components/PaymentHistory";
import { Messaging } from "./components/Messaging";
import { Notifications } from "./components/Notifications";
import { SavedTutors } from "./components/SavedTutors";
import { AccountSettings } from "./components/AccountSettings";
import { AvailabilityCalendar } from "./components/AvailabilityCalendar";
import { Reviews } from "./components/Reviews";
import { TutorVerification } from "./components/TutorVerification";
import { AdvancedSearch } from "./components/AdvancedSearch";
import { AIRecommendation } from "./components/AIRecommendation";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { LegalPage } from "./components/LegalPage";
import { AppShell, Avatar, COLORS } from "./components/ui";
import { I18nProvider, useT } from "./i18n";
import { SessionProvider, useSession, Page, dashboardForRole } from "./session";
import {
  GraduationCap,
  Search,
  MapPin,
  ChevronDown,
  Calculator,
  FlaskConical,
  Languages,
  Code2,
  Briefcase,
  Palette,
  Music,
  Globe2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const navLinks: { key: Page; tKey: string }[] = [
  { key: "home", tKey: "nav.home" },
  { key: "find", tKey: "nav.find" },
  { key: "subjects", tKey: "nav.subjects" },
  { key: "ai-reco", tKey: "ai.title" },
  { key: "blog", tKey: "nav.blog" },
  { key: "about", tKey: "nav.about" },
];

const appPages = new Set<Page>([
  "student-dashboard", "tutor-dashboard", "admin-dashboard", "booking", "booking-history",
  "messages", "saved", "payment-history", "notifications", "settings", "calendar",
  "reviews", "verification", "checkout",
]);

function LangToggle() {
  const { lang, setLang } = useT();
  return (
    <div className="flex items-center rounded-lg overflow-hidden" style={{ border: `1px solid ${COLORS.border}` }}>
      {(["en", "th"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="px-2.5 py-1 transition-colors"
          style={{ backgroundColor: lang === l ? COLORS.primary : COLORS.card, color: lang === l ? "#fff" : COLORS.textMuted, fontSize: 13 }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

const subjects = [
  { name: "Math", count: "120+ tutors", Icon: Calculator, tone: "#0B6BCB" },
  { name: "Science", count: "98+ tutors", Icon: FlaskConical, tone: "#3AA7F2" },
  { name: "English", count: "140+ tutors", Icon: Languages, tone: "#0B6BCB" },
  { name: "Programming", count: "76+ tutors", Icon: Code2, tone: "#3AA7F2" },
  { name: "Business", count: "54+ tutors", Icon: Briefcase, tone: "#0B6BCB" },
  { name: "Design", count: "42+ tutors", Icon: Palette, tone: "#3AA7F2" },
  { name: "Music", count: "30+ tutors", Icon: Music, tone: "#0B6BCB" },
  { name: "Languages", count: "88+ tutors", Icon: Globe2, tone: "#3AA7F2" },
];

export default function App() {
  return (
    <I18nProvider>
      <SessionProvider>
        <AppInner />
      </SessionProvider>
    </I18nProvider>
  );
}

function AppInner() {
  const { page, role, nav } = useSession();

  // Auth screens (no chrome)
  if (page === "signin" || page === "signup") {
    return <AuthPage initialMode={page === "signup" ? "signup" : "signin"} />;
  }

  // Authenticated app pages (sidebar shell); redirect to sign-in if not logged in
  if (appPages.has(page)) {
    if (!role) return <AuthPage initialMode="signin" />;
    return <AppShell>{renderAppPage(page)}</AppShell>;
  }

  // Marketing / public pages (top nav + footer)
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: COLORS.card, color: COLORS.text }}>
      <MarketingHeader />
      {renderMarketingPage(page, nav)}
      <MarketingFooter />
    </div>
  );
}

function renderAppPage(page: Page) {
  switch (page) {
    case "student-dashboard": return <StudentDashboard />;
    case "tutor-dashboard": return <TutorDashboard />;
    case "admin-dashboard": return <AdminDashboard />;
    case "booking": return <BookingFlow />;
    case "booking-history": return <BookingHistory />;
    case "messages": return <Messaging />;
    case "saved": return <SavedTutors />;
    case "payment-history": return <PaymentHistory />;
    case "checkout": return <PaymentCheckout />;
    case "notifications": return <Notifications />;
    case "settings": return <AccountSettings />;
    case "calendar": return <AvailabilityCalendar />;
    case "reviews": return <Reviews />;
    case "verification": return <TutorVerification />;
    default: return null;
  }
}

function renderMarketingPage(page: Page, nav: (p: Page) => void) {
  switch (page) {
    case "find": return <FindTutors onViewProfile={() => nav("profile")} onAdvanced={() => nav("advanced-search")} />;
    case "profile": return <TutorProfile onBack={() => nav("find")} onBook={() => nav("booking")} onMessage={() => nav("messages")} />;
    case "subjects": return <Subjects />;
    case "advanced-search": return <AdvancedSearch />;
    case "ai-reco": return <AIRecommendation />;
    case "about": return <AboutUs onContact={() => nav("contact")} />;
    case "contact": return <ContactUs />;
    case "faq": return <FAQ />;
    case "blog": return <Blog />;
    case "terms": return <LegalPage variant="terms" />;
    case "privacy": return <LegalPage variant="privacy" />;
    case "apply": return <TutorRegistration onClose={() => nav("home")} />;
    default: return <Home />;
  }
}

function MarketingHeader() {
  const { t } = useT();
  const { page, role, name, nav, logout } = useSession();
  return (
    <header className="w-full border-b sticky top-0 z-30" style={{ borderColor: COLORS.border, backgroundColor: COLORS.card }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <button onClick={() => nav("home")} className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.primary }}>
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span style={{ color: COLORS.text }}>TeachThrough</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ key, tKey }) => {
            const active = page === key;
            return (
              <button
                key={key}
                onClick={() => nav(key)}
                className="transition-colors hover:opacity-80 flex items-center gap-1"
                style={{ color: active ? COLORS.primary : COLORS.textMuted }}
              >
                {key === "ai-reco" && <Sparkles className="w-4 h-4" />}
                {t(tKey)}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          <LangToggle />
          {role ? (
            <>
              <button
                onClick={() => nav(dashboardForRole(role))}
                className="hidden sm:block px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: COLORS.primary }}
              >
                {t("nav.dashboard")}
              </button>
              <button onClick={() => nav("settings")} className="flex items-center gap-2">
                <Avatar alt={name} size={34} />
              </button>
              <button onClick={logout} className="hidden md:block px-2" style={{ color: COLORS.textMuted }}>
                {t("nav.logout")}
              </button>
            </>
          ) : (
            <>
              <button onClick={() => nav("signin")} className="px-4 py-2 rounded-lg" style={{ color: COLORS.text }}>
                {t("nav.login")}
              </button>
              <button onClick={() => nav("signup")} className="px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90" style={{ backgroundColor: COLORS.primary }}>
                {t("nav.signup")}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function MarketingFooter() {
  const { t } = useT();
  const { nav } = useSession();
  const links: { key: Page; tKey: string }[] = [
    { key: "about", tKey: "nav.about" },
    { key: "faq", tKey: "nav.faq" },
    { key: "blog", tKey: "nav.blog" },
    { key: "contact", tKey: "footer.contact" },
    { key: "terms", tKey: "footer.terms" },
    { key: "privacy", tKey: "footer.privacy" },
  ];
  return (
    <footer className="border-t py-8" style={{ borderColor: COLORS.border, backgroundColor: COLORS.card }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ color: COLORS.textMuted }}>
        <button onClick={() => nav("home")} className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.primary }}>
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span style={{ color: COLORS.text }}>TeachThrough</span>
        </button>
        <div className="hidden md:block">{t("footer.rights")}</div>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {links.map((l) => (
            <button key={l.key} onClick={() => nav(l.key)} className="hover:opacity-80">{t(l.tKey)}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Home() {
  const { t } = useT();
  const { nav } = useSession();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${COLORS.sky} 0%, ${COLORS.card} 100%)` }}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="leading-tight" style={{ color: COLORS.text, fontSize: "3rem", fontWeight: 700 }}>{t("home.heroTitle")}</h1>
            <p className="mt-4 max-w-md" style={{ color: COLORS.textMuted }}>{t("home.heroSub")}</p>

            <div className="mt-8 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-2 items-stretch px-[0px] p-[8px]" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
              <div className="flex items-center gap-2 px-3 flex-1">
                <Search className="w-5 h-5" style={{ color: COLORS.textMuted }} />
                <select className="bg-transparent outline-none flex-1 py-2" style={{ color: COLORS.text }} defaultValue="">
                  <option value="" disabled>{t("home.subject")}</option>
                  {subjects.map((s) => <option key={s.name}>{s.name}</option>)}
                </select>
                <ChevronDown className="w-4 h-4" style={{ color: COLORS.textMuted }} />
              </div>
              <div className="hidden sm:block w-px" style={{ backgroundColor: COLORS.border }} />
              <div className="flex items-center gap-2 px-3 flex-1">
                <MapPin className="w-5 h-5" style={{ color: COLORS.textMuted }} />
                <select className="bg-transparent outline-none flex-1 py-2" style={{ color: COLORS.text }} defaultValue="">
                  <option value="" disabled>{t("home.location")}</option>
                  <option>Online</option><option>Bangkok</option><option>Chiang Mai</option><option>Phuket</option>
                </select>
                <ChevronDown className="w-4 h-4" style={{ color: COLORS.textMuted }} />
              </div>
              <button onClick={() => nav("find")} className="px-6 py-3 rounded-xl text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90" style={{ backgroundColor: COLORS.primary }}>
                <Search className="w-4 h-4" />{t("home.search")}
              </button>
            </div>

            <button onClick={() => nav("ai-reco")} className="mt-4 flex items-center gap-2" style={{ color: COLORS.primary }}>
              <Sparkles className="w-4 h-4" /> {t("ai.title")} <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-6 flex items-center gap-6">
              <div><div style={{ color: COLORS.text }}>10,000+</div><div style={{ color: COLORS.textMuted }}>{t("home.expertTutors")}</div></div>
              <div className="w-px h-10" style={{ backgroundColor: COLORS.border }} />
              <div><div style={{ color: COLORS.text }}>50+</div><div style={{ color: COLORS.textMuted }}>{t("home.subjectsLabel")}</div></div>
              <div className="w-px h-10" style={{ backgroundColor: COLORS.border }} />
              <div><div style={{ color: COLORS.text }}>4.9★</div><div style={{ color: COLORS.textMuted }}>{t("home.rating")}</div></div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-[420px] h-[420px] rounded-full" style={{ backgroundColor: COLORS.secondary, opacity: 0.18 }} />
            <div className="absolute w-[340px] h-[340px] rounded-full" style={{ backgroundColor: COLORS.primary, opacity: 0.12 }} />
            <div className="absolute top-6 left-2 px-3 py-2 rounded-xl shadow-md flex items-center gap-2" style={{ backgroundColor: COLORS.card }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.sky }}>
                <Calculator className="w-4 h-4" style={{ color: COLORS.primary }} />
              </div>
              <div className="leading-tight"><div style={{ color: COLORS.text }}>Math</div><div style={{ color: COLORS.textMuted, fontSize: 12 }}>{t("home.liveNow")}</div></div>
            </div>
            <div className="absolute bottom-10 right-0 px-3 py-2 rounded-xl shadow-md flex items-center gap-2" style={{ backgroundColor: COLORS.card }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.sky }}>
                <Languages className="w-4 h-4" style={{ color: COLORS.primary }} />
              </div>
              <div className="leading-tight"><div style={{ color: COLORS.text }}>English</div><div style={{ color: COLORS.textMuted, fontSize: 12 }}>{t("home.ratingTag")}</div></div>
            </div>
            <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4" style={{ borderColor: COLORS.card }}>
              <ImageWithFallback src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Smiling tutor with laptop" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="py-16" style={{ backgroundColor: COLORS.softGray }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 style={{ color: COLORS.text, fontSize: "1.875rem", fontWeight: 700 }}>{t("home.popularSubjects")}</h2>
              <p style={{ color: COLORS.textMuted }} className="mt-1">{t("home.popularSub")}</p>
            </div>
            <button onClick={() => nav("subjects")} className="flex items-center gap-1 transition-opacity hover:opacity-80" style={{ color: COLORS.primary }}>
              {t("home.viewAll")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {subjects.map((s) => (
              <button key={s.name} onClick={() => nav("find")} className="group p-5 rounded-2xl transition-all hover:shadow-md text-left" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: COLORS.sky }}>
                  <s.Icon className="w-6 h-6" style={{ color: s.tone }} />
                </div>
                <div style={{ color: COLORS.text }}>{s.name}</div>
                <div style={{ color: COLORS.textMuted }}>{s.count}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)` }}>
            <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
            <div className="relative max-w-xl text-white">
              <h3 style={{ fontSize: "1.75rem", fontWeight: 700 }}>{t("home.ctaTitle")}</h3>
              <p className="mt-2 opacity-90">{t("home.ctaSub")}</p>
            </div>
            <button onClick={() => nav("apply")} className="relative px-6 py-3 rounded-xl flex items-center gap-2 transition-opacity hover:opacity-90" style={{ backgroundColor: COLORS.card, color: COLORS.primary }}>
              {t("home.applyNow")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
