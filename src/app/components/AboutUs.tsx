import { useT } from "../i18n";
import {
  Sparkles,
  HeartHandshake,
  Rocket,
  Target,
  Eye,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

const getValues = (t: (key: string) => string) => [
  {
    Icon: Sparkles,
    title: t("about.value1Title"),
    text: t("about.value1Text"),
  },
  {
    Icon: HeartHandshake,
    title: t("about.value2Title"),
    text: t("about.value2Text"),
  },
  {
    Icon: Rocket,
    title: t("about.value3Title"),
    text: t("about.value3Text"),
  },
];

const getMission = (t: (key: string) => string) => [
  {
    Icon: Users,
    title: t("about.mission1Title"),
    text: t("about.mission1Text"),
  },
  {
    Icon: BookOpen,
    title: t("about.mission2Title"),
    text: t("about.mission2Text"),
  },
  {
    Icon: Rocket,
    title: t("about.mission3Title"),
    text: t("about.mission3Text"),
  },
];

const getImpacts = (t: (key: string) => string) => [
  { value: "10,000+", label: t("about.impact1") },
  { value: "150,000+", label: t("about.impact2") },
  { value: "50+", label: t("about.impact3") },
  { value: "120+", label: t("about.impact4") },
];

const getTestimonials = (t: (key: string) => string) => [
  {
    name: t("about.test1Name"),
    role: t("about.test1Role"),
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&q=80",
    text: t("about.test1Text"),
  },
  {
    name: t("about.test2Name"),
    role: t("about.test2Role"),
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=80",
    text: t("about.test2Text"),
  },
  {
    name: t("about.test3Name"),
    role: t("about.test3Role"),
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&q=80",
    text: t("about.test3Text"),
  },
];

const getAwards = (t: (key: string) => string) => [
  t("about.award1"),
  t("about.award2"),
  t("about.award3"),
  t("about.award4"),
];

const partners = [
  "Stanford",
  "MIT OCW",
  "Khan Academy",
  "Coursera",
  "edX",
  "Google for Education",
  "Microsoft Learn",
  "UNESCO",
];

export function AboutUs({ onContact }: { onContact?: () => void }) {
  const { t } = useT();
  const values = getValues(t);
  const mission = getMission(t);
  const impacts = getImpacts(t);
  const testimonials = getTestimonials(t);
  const awards = getAwards(t);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.card }}>
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(180deg, ${COLORS.sky} 0%, ${COLORS.card} 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span
            className="inline-block px-3 py-1 rounded-full"
            style={{
              backgroundColor: COLORS.sky,
              color: COLORS.primary,
              fontSize: 13,
            }}
          >
            {t("about.tag")}
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
            {t("about.heroTitle")}
          </h1>
          <p
            className="mt-5 max-w-2xl mx-auto"
            style={{ color: COLORS.textMuted }}
          >
            {t("about.heroSub")}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
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
                <v.Icon className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div
                className="mt-4"
                style={{ color: COLORS.text, fontSize: "1.125rem", fontWeight: 700 }}
              >
                {v.title}
              </div>
              <p className="mt-2" style={{ color: COLORS.textMuted }}>
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16" style={{ backgroundColor: COLORS.softGray }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span style={{ color: COLORS.primary }}>{t("about.story")}</span>
            <h2
              className="mt-2"
              style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}
            >
              {t("about.storyTitle")}
            </h2>
            <div className="mt-4 space-y-4" style={{ color: COLORS.textMuted }}>
              <p>
                {t("about.storyP1")}
              </p>
              <p>
                {t("about.storyP2")}
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
              alt="Team collaborating"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80"
              alt="Students learning"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span style={{ color: COLORS.primary }}>{t("about.vision")}</span>
            <h2
              className="mt-2"
              style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}
            >
              {t("about.visionTitle")}
            </h2>
            <p className="mt-4" style={{ color: COLORS.textMuted }}>
              {t("about.visionText")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: COLORS.sky }}
              >
                <Eye className="w-5 h-5" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <div style={{ color: COLORS.text }}>{t("about.visionImpact")}</div>
                <div style={{ color: COLORS.textMuted, fontSize: 13 }}>
                  {t("about.visionImpactSub")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ backgroundColor: COLORS.softGray }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span style={{ color: COLORS.primary }}>{t("about.mission")}</span>
            <h2
              className="mt-2"
              style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}
            >
              {t("about.missionTitle")}
            </h2>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {mission.map((m) => (
              <div
                key={m.title}
                className="p-6 rounded-2xl text-center"
                style={{
                  backgroundColor: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <m.Icon className="w-7 h-7 text-white" />
                </div>
                <div
                  className="mt-4"
                  style={{ color: COLORS.text, fontSize: "1.125rem", fontWeight: 700 }}
                >
                  {m.title}
                </div>
                <p className="mt-2" style={{ color: COLORS.textMuted }}>
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span style={{ color: COLORS.primary }}>{t("about.impact")}</span>
            <h2
              className="mt-2"
              style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}
            >
              {t("about.impactTitle")}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {impacts.map((i) => (
              <div
                key={i.label}
                className="p-6 rounded-2xl text-center"
                style={{
                  backgroundColor: COLORS.sky,
                }}
              >
                <div
                  style={{
                    color: COLORS.primary,
                    fontSize: "1.875rem",
                    fontWeight: 700,
                  }}
                >
                  {i.value}
                </div>
                <div style={{ color: COLORS.textMuted }}>{i.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div style={{ color: COLORS.text }}>{t.name}</div>
                    <div style={{ color: COLORS.textMuted, fontSize: 13 }}>
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5"
                      style={{ color: "#F5A623", fill: "#F5A623" }}
                    />
                  ))}
                </div>
                <p className="mt-3" style={{ color: COLORS.textMuted }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16" style={{ backgroundColor: COLORS.softGray }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span style={{ color: COLORS.primary }}>{t("about.awards")}</span>
            <h2
              className="mt-2"
              style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}
            >
              {t("about.awardsTitle")}
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {awards.map((a) => (
              <div
                key={a}
                className="p-5 rounded-2xl flex items-start gap-3"
                style={{
                  backgroundColor: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: COLORS.sky }}
                >
                  <Award className="w-5 h-5" style={{ color: COLORS.primary }} />
                </div>
                <div style={{ color: COLORS.text }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span style={{ color: COLORS.primary }}>{t("about.partners")}</span>
            <h2
              className="mt-2"
              style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}
            >
              {t("about.partnersTitle")}
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {partners.map((p) => (
              <div
                key={p}
                className="h-20 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: COLORS.softGray,
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.textMuted,
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
            }}
          >
            <div className="text-white max-w-xl">
              <h3 style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                {t("about.contactCta")}
              </h3>
              <p className="mt-2 opacity-90">
                {t("about.contactCtaSub")}
              </p>
            </div>
            <button
              onClick={onContact}
              className="px-6 py-3 rounded-xl flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ backgroundColor: COLORS.card, color: COLORS.primary }}
            >
              {t("about.contactBtn")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
