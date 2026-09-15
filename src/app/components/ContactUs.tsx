import { useT } from "../i18n";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const COLORS = {
  primary: "#0B6BCB",
  secondary: "#3AA7F2",
  sky: "#EAF6FF",
  text: "#183B56",
  textMuted: "#5A7184",
  border: "#D9E6F2",
  card: "#FFFFFF",
  softGray: "#F7FBFF",
};

const getChannels = (t: (key: string) => string) => [
  {
    Icon: Mail,
    title: t("contact.ch1Title"),
    value: t("contact.ch1Value"),
    sub: t("contact.ch1Sub"),
  },
  {
    Icon: Phone,
    title: t("contact.ch2Title"),
    value: t("contact.ch2Value"),
    sub: t("contact.ch2Sub"),
  },
  {
    Icon: MapPin,
    title: t("contact.ch3Title"),
    value: t("contact.ch3Value"),
    sub: t("contact.ch3Sub"),
  },
  {
    Icon: Clock,
    title: t("contact.ch4Title"),
    value: t("contact.ch4Value"),
    sub: t("contact.ch4Sub"),
  },
];

const socials = [Facebook, Twitter, Instagram, Linkedin];

const getFaqs = (t: (key: string) => string) => [
  {
    q: t("contact.faq1Q"),
    a: t("contact.faq1A"),
  },
  {
    q: t("contact.faq2Q"),
    a: t("contact.faq2A"),
  },
  {
    q: t("contact.faq3Q"),
    a: t("contact.faq3A"),
  },
];

export function ContactUs() {
  const { t } = useT();
  const channels = getChannels(t);
  const faqs = getFaqs(t);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.card }}>
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(180deg, ${COLORS.sky} 0%, ${COLORS.card} 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="inline-block px-3 py-1 rounded-full"
            style={{
              backgroundColor: COLORS.sky,
              color: COLORS.primary,
              fontSize: 13,
            }}
          >
            {t("contact.tag")}
          </span>
          <h1
            className="mt-4"
            style={{
              color: COLORS.text,
              fontSize: "2.75rem",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            {t("contact.title")}
          </h1>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: COLORS.textMuted }}
          >
            {t("contact.sub")}
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {channels.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: COLORS.sky }}
              >
                <c.Icon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div className="mt-4" style={{ color: COLORS.text }}>
                {c.title}
              </div>
              <div className="mt-1" style={{ color: COLORS.primary }}>
                {c.value}
              </div>
              <div style={{ color: COLORS.textMuted, fontSize: 13 }}>
                {c.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Side */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-6">
          {/* Form */}
          <div className="md:col-span-3">
            <div
              className="p-6 md:p-8 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <h2
                style={{
                  color: COLORS.text,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                {t("contact.send")}
              </h2>
              <p className="mt-1" style={{ color: COLORS.textMuted }}>
                {t("contact.formSub")}
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span style={{ color: COLORS.text }}>{t("contact.firstName")}</span>
                    <input
                      placeholder={t("contact.ph1")}
                      className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none"
                      style={{
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />
                  </label>
                  <label className="block">
                    <span style={{ color: COLORS.text }}>{t("contact.lastName")}</span>
                    <input
                      placeholder={t("contact.ph2")}
                      className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none"
                      style={{
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />
                  </label>
                </div>
                <label className="block">
                  <span style={{ color: COLORS.text }}>{t("auth.email")}</span>
                  <input
                    type="email"
                    placeholder={t("contact.emailPh")}
                    className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none"
                    style={{
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.text,
                    }}
                  />
                </label>
                <label className="block">
                  <span style={{ color: COLORS.text }}>{t("contact.subject")}</span>
                  <select
                    defaultValue=""
                    className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none"
                    style={{
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.text,
                      backgroundColor: COLORS.card,
                    }}
                  >
                    <option value="" disabled>
                      {t("contact.chooseTopicPh")}
                    </option>
                    <option>{t("contact.opt1")}</option>
                    <option>{t("contact.opt2")}</option>
                    <option>{t("contact.opt3")}</option>
                    <option>{t("contact.opt4")}</option>
                  </select>
                </label>
                <label className="block">
                  <span style={{ color: COLORS.text }}>{t("contact.message")}</span>
                  <textarea
                    rows={5}
                    placeholder={t("contact.msgPh")}
                    className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none resize-none"
                    style={{
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.text,
                    }}
                  />
                </label>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg text-white flex items-center gap-2 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Send className="w-4 h-4" />
                  {t("contact.sendBtn")}
                </button>
              </form>
            </div>
          </div>

          {/* Side: Map placeholder + Socials */}
          <aside className="md:col-span-2 space-y-4">
            <div
              className="rounded-2xl overflow-hidden h-64 flex items-center justify-center"
              style={{
                backgroundColor: COLORS.sky,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div className="text-center">
                <MapPin
                  className="w-10 h-10 mx-auto"
                  style={{ color: COLORS.primary }}
                />
                <div className="mt-2" style={{ color: COLORS.text }}>
                  {t("contact.hq")}
                </div>
                <div style={{ color: COLORS.textMuted, fontSize: 13 }}>
                  {t("contact.hqAddr")}
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div style={{ color: COLORS.text }}>{t("contact.follow")}</div>
              <p
                className="mt-1"
                style={{ color: COLORS.textMuted, fontSize: 13 }}
              >
                {t("contact.followSub")}
              </p>
              <div className="mt-4 flex items-center gap-2">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: COLORS.sky,
                      color: COLORS.primary,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
              }}
            >
              <div className="text-white" style={{ fontWeight: 700 }}>
                {t("contact.urgentTitle")}
              </div>
              <p className="mt-1 text-white opacity-90">
                {t("contact.urgentSub")}
              </p>
              <button
                className="mt-4 px-4 py-2 rounded-lg"
                style={{ backgroundColor: COLORS.card, color: COLORS.primary }}
              >
                {t("contact.helpBtn")}
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20" style={{ backgroundColor: COLORS.softGray }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <span style={{ color: COLORS.primary }}>FAQ</span>
            <h2
              className="mt-2"
              style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}
            >
              {t("contact.faq")}
            </h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group p-5 rounded-2xl"
                style={{
                  backgroundColor: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <summary
                  className="cursor-pointer list-none flex items-center justify-between"
                  style={{ color: COLORS.text }}
                >
                  {f.q}
                  <span
                    className="ml-2 transition-transform group-open:rotate-45"
                    style={{ color: COLORS.primary }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3" style={{ color: COLORS.textMuted }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
