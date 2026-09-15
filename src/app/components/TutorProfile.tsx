import { useState } from "react";
import { useT } from "../i18n";
import {
  ArrowLeft,
  Star,
  MapPin,
  Languages as LanguagesIcon,
  MessageCircle,
  Calendar,
  Briefcase,
  GraduationCap,
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

const tabs = ["Overview", "Subjects", "Schedule", "Reviews", "Availability"];

const subjectsList = [
  "Math",
  "Physics",
  "Calculus",
  "Algebra",
  "Geometry",
  "Statistics",
];

const experience = [
  {
    Icon: Briefcase,
    title: "Senior Math Tutor",
    sub: "MathPros Academy",
    date: "2020 – Present",
  },
  {
    Icon: GraduationCap,
    title: "Ph.D. in Mathematics",
    sub: "Stanford University",
    date: "2014 – 2019",
  },
];

const reviews = [
  {
    name: "John K.",
    date: "2 weeks ago",
    rating: 5,
    text:
      "Sarah is an amazing tutor! She helped me understand calculus concepts I had been struggling with for months. Highly recommend.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&q=80",
  },
  {
    name: "Lisa M.",
    date: "1 month ago",
    rating: 5,
    text:
      "Patient and knowledgeable. Highly appreciated her clear explanations and supportive teaching style.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80",
  },
];

export function TutorProfile({ onBack, onBook, onMessage }: { onBack: () => void; onBook?: () => void; onMessage?: () => void }) {
  const { t } = useT();
  const [tab, setTab] = useState("Overview");

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 transition-opacity hover:opacity-80"
          style={{ color: COLORS.primary }}
        >
          <ArrowLeft className="w-4 h-4" />
          {t("profile.back")}
        </button>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-4">
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div className="flex flex-col items-center text-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&q=80"
                  alt="Sarah Johnson"
                  className="w-28 h-28 rounded-full object-cover border-4"
                />
                <div className="mt-4" style={{ color: COLORS.text, fontSize: "1.25rem", fontWeight: 700 }}>
                  Sarah Johnson
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4" style={{ color: "#F5A623", fill: "#F5A623" }} />
                  <span style={{ color: COLORS.text }}>4.9</span>
                  <span style={{ color: COLORS.textMuted }}>(128 reviews)</span>
                </div>
                <span
                  className="mt-3 px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "#E6F7EC",
                    color: "#1B9C5B",
                    fontSize: 12,
                  }}
                >
                  Available Now
                </span>
              </div>

              <div
                className="my-5 h-px"
                style={{ backgroundColor: COLORS.border }}
              />

              <div style={{ color: COLORS.text }}>{t("profile.about")}</div>
              <p className="mt-2" style={{ color: COLORS.textMuted }}>
                PhD in Math, a passionate tutor with 8+ years of experience
                helping students from middle school to college level. I focus on
                building strong fundamentals and confidence.
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-2" style={{ color: COLORS.textMuted }}>
                  <MapPin className="w-4 h-4" />
                  <span>New York, USA</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: COLORS.textMuted }}>
                  <LanguagesIcon className="w-4 h-4" />
                  <span>English, Spanish</span>
                </div>
              </div>

              <div
                className="my-5 h-px"
                style={{ backgroundColor: COLORS.border }}
              />

              <div style={{ color: COLORS.text }}>{t("profile.contactSarah")}</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span style={{ color: COLORS.primary, fontSize: "1.5rem", fontWeight: 700 }}>
                  $25
                </span>
                <span style={{ color: COLORS.textMuted }}>/hour</span>
              </div>

              <div className="mt-4 space-y-2">
                <button
                  onClick={onMessage}
                  className="w-full py-2.5 rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: COLORS.sky,
                    color: COLORS.primary,
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("profile.message")}
                </button>
                <button
                  onClick={onBook}
                  className="w-full py-2.5 rounded-lg text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Calendar className="w-4 h-4" />
                  {t("profile.book")}
                </button>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 md:col-span-8">
            {/* Tabs */}
            <div
              className="rounded-2xl p-2 flex items-center gap-1 overflow-x-auto"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              {tabs.map((t) => {
                const active = t === tab;
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    style={{
                      backgroundColor: active ? COLORS.primary : "transparent",
                      color: active ? "#fff" : COLORS.textMuted,
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Subjects I Teach */}
            <div
              className="mt-6 p-6 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div style={{ color: COLORS.text }}>{t("profile.subjectsTeach")}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {subjectsList.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg"
                    style={{
                      backgroundColor: COLORS.sky,
                      color: COLORS.primary,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience & Education */}
            <div
              className="mt-6 p-6 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div style={{ color: COLORS.text }}>{t("profile.experience")}</div>
              <div className="mt-4 space-y-4">
                {experience.map((e) => (
                  <div key={e.title} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: COLORS.sky }}
                    >
                      <e.Icon className="w-5 h-5" style={{ color: COLORS.primary }} />
                    </div>
                    <div>
                      <div style={{ color: COLORS.text }}>{e.title}</div>
                      <div style={{ color: COLORS.textMuted }}>{e.sub}</div>
                      <div style={{ color: COLORS.textMuted, fontSize: 12 }}>
                        {e.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Style */}
            <div
              className="mt-6 p-6 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div style={{ color: COLORS.text }}>{t("profile.teachingStyle")}</div>
              <p className="mt-2" style={{ color: COLORS.textMuted }}>
                I believe every student learns differently. My approach is
                personalized, interactive, and focused on real-world
                applications. I use visual aids, examples, and live exercises so
                concepts stick in a way that&apos;s easy to recall.
              </p>
            </div>

            {/* Reviews */}
            <div
              className="mt-6 p-6 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div style={{ color: COLORS.text }}>{t("profile.reviews")}</div>
              <div className="mt-4 space-y-5">
                {reviews.map((r) => (
                  <div key={r.name} className="flex items-start gap-3">
                    <ImageWithFallback
                      src={r.image}
                      alt={r.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div style={{ color: COLORS.text }}>{r.name}</div>
                        <div style={{ color: COLORS.textMuted, fontSize: 12 }}>
                          {r.date}
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5"
                            style={{ color: "#F5A623", fill: "#F5A623" }}
                          />
                        ))}
                      </div>
                      <p className="mt-1" style={{ color: COLORS.textMuted }}>
                        {r.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
