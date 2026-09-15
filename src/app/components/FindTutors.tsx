import { useState } from "react";
import { useT } from "../i18n";
import {
  Search,
  SlidersHorizontal,
  Star,
  Heart,
  ChevronDown,
  MapPin,
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

const allSubjectKeys = [
  "subj.all",
  "subj.math",
  "subj.science",
  "subj.english",
  "subj.programming",
  "subj.business",
  "subj.design",
  "subj.music",
  "subj.languages",
];

const availabilityKeys = ["avail.now", "avail.weekdays", "avail.weekends", "avail.evenings"];
const tutorTypeKeys = ["type.pro", "type.uni", "type.native"];

type Tutor = {
  name: string;
  rating: number;
  reviews: number;
  tagKeys: string[];
  descKey: string;
  price: number;
  image: string;
};

const tutors: Tutor[] = [
  {
    name: "Sarah Johnson",
    rating: 4.9,
    reviews: 128,
    tagKeys: ["subj.math", "subj.physics", "subj.calculus"],
    descKey: "tutor.s1.desc",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    name: "Michael Chen",
    rating: 4.8,
    reviews: 92,
    tagKeys: ["subj.programming", "subj.javascript", "subj.python"],
    descKey: "tutor.s2.desc",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Emily Williams",
    rating: 5.0,
    reviews: 156,
    tagKeys: ["subj.english", "subj.literature", "subj.writing"],
    descKey: "tutor.s3.desc",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    name: "David Brown",
    rating: 4.7,
    reviews: 74,
    tagKeys: ["subj.science", "subj.chemistry", "subj.biology"],
    descKey: "tutor.s4.desc",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
];

function Checkbox({ labelKey }: { labelKey: string }) {
  const { t } = useT();
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-2 cursor-pointer py-1">
      <span
        onClick={() => setChecked(!checked)}
        className="w-4 h-4 rounded flex items-center justify-center transition-colors"
        style={{
          backgroundColor: checked ? COLORS.primary : COLORS.card,
          border: `1.5px solid ${checked ? COLORS.primary : COLORS.border}`,
        }}
      >
        {checked && (
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none">
            <path
              d="M5 12l5 5L20 7"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span style={{ color: COLORS.text }}>{t(labelKey)}</span>
    </label>
  );
}

function TutorCard({ t, onViewProfile }: { t: Tutor; onViewProfile?: () => void }) {
  const { t: tr } = useT();
  const [liked, setLiked] = useState(false);
  return (
    <div
      className="p-5 rounded-2xl flex gap-5"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <ImageWithFallback
        src={t.image}
        alt={t.name}
        className="w-20 h-20 rounded-full object-cover flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: COLORS.text }}>{t.name}</span>
              <span
                className="px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "#E6F7EC",
                  color: "#1B9C5B",
                  fontSize: 12,
                }}
              >
                {tr("find.availableNow")}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Star
                className="w-4 h-4"
                style={{ color: "#F5A623", fill: "#F5A623" }}
              />
              <span style={{ color: COLORS.text }}>{t.rating}</span>
              <span style={{ color: COLORS.textMuted }}>
                ({t.reviews} {tr("find.reviews")})
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="transition-transform hover:scale-110"
              aria-label="favorite"
            >
              <Heart
                className="w-5 h-5"
                style={{
                  color: liked ? "#E5484D" : COLORS.textMuted,
                  fill: liked ? "#E5484D" : "transparent",
                }}
              />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {t.tagKeys.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md"
              style={{
                backgroundColor: COLORS.sky,
                color: COLORS.primary,
                fontSize: 12,
              }}
            >
              {tr(tag)}
            </span>
          ))}
        </div>

        <p className="mt-3" style={{ color: COLORS.textMuted }}>
          {tr(t.descKey)}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span style={{ color: COLORS.primary, fontSize: "1.25rem", fontWeight: 700 }}>
              ${t.price}
            </span>
            <span style={{ color: COLORS.textMuted }}>{tr("find.hour")}</span>
          </div>
          <button
            onClick={onViewProfile}
            className="px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.primary }}
          >
            {tr("find.viewProfile")}
          </button>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ label }: { label: string }) {
  return (
    <button
      className="flex items-center gap-2 px-3 py-2 rounded-lg"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.text,
      }}
    >
      {label}
      <ChevronDown className="w-4 h-4" style={{ color: COLORS.textMuted }} />
    </button>
  );
}

export function FindTutors({ onViewProfile, onAdvanced }: { onViewProfile?: () => void; onAdvanced?: () => void }) {
  const { t } = useT();
  const [priceMax, setPriceMax] = useState(50);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page title */}
        <h1 style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}>
          {t("find.title")}
        </h1>
        <p style={{ color: COLORS.textMuted }} className="mt-1">
          {t("find.sub")}
        </p>

        {/* Top filter bar */}
        <div
          className="mt-6 p-3 rounded-xl flex flex-wrap items-center gap-3"
          style={{
            backgroundColor: COLORS.card,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <div className="flex items-center gap-2 flex-1 min-w-[220px] px-2">
            <Search className="w-4 h-4" style={{ color: COLORS.textMuted }} />
            <input
              placeholder={t("find.searchPlaceholder")}
              className="flex-1 outline-none bg-transparent py-2"
              style={{ color: COLORS.text }}
            />
          </div>
          <Dropdown label={t("find.allSubjects")} />
          <Dropdown label={t("find.price")} />
          <Dropdown label={t("find.rating")} />
          <button
            onClick={onAdvanced}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white"
            style={{ backgroundColor: COLORS.primary }}
          >
            <SlidersHorizontal className="w-4 h-4" />
            {t("find.filters")}
          </button>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3">
            <div
              className="p-5 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div style={{ color: COLORS.text }}>{t("find.subjects")}</div>
              <div className="mt-3 space-y-1">
                {allSubjectKeys.map((s) => (
                  <Checkbox key={s} labelKey={s} />
                ))}
              </div>

              <div
                className="my-5 h-px"
                style={{ backgroundColor: COLORS.border }}
              />

              <div style={{ color: COLORS.text }}>{t("find.priceRange")}</div>
              <div
                className="flex items-center justify-between mt-2"
                style={{ color: COLORS.textMuted }}
              >
                <span>$5</span>
                <span>${priceMax}+</span>
              </div>
              <input
                type="range"
                min={5}
                max={100}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full mt-2 accent-[#0B6BCB]"
              />

              <div
                className="my-5 h-px"
                style={{ backgroundColor: COLORS.border }}
              />

              <div style={{ color: COLORS.text }}>{t("find.availability")}</div>
              <div className="mt-3 space-y-1">
                {availabilityKeys.map((a) => (
                  <Checkbox key={a} labelKey={a} />
                ))}
              </div>

              <div
                className="my-5 h-px"
                style={{ backgroundColor: COLORS.border }}
              />

              <div style={{ color: COLORS.text }}>{t("find.tutorType")}</div>
              <div className="mt-3 space-y-1">
                {tutorTypeKeys.map((k) => (
                  <Checkbox key={k} labelKey={k} />
                ))}
              </div>
            </div>
          </aside>

          {/* Results */}
          <main className="col-span-12 md:col-span-9">
            <div className="flex items-center justify-between mb-4">
              <div style={{ color: COLORS.textMuted }}>
                <span style={{ color: COLORS.text }}>156</span> {t("find.found")}
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: COLORS.textMuted }}>{t("find.sortBy")}</span>
                <Dropdown label={t("find.relevance")} />
              </div>
            </div>

            <div className="space-y-4">
              {tutors.map((t) => (
                <TutorCard key={t.name} t={t} onViewProfile={onViewProfile} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {["‹", "1", "2", "3", "4", "5", "›"].map((p, i) => {
                const active = p === "1";
                return (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: active ? COLORS.primary : COLORS.card,
                      color: active ? "#fff" : COLORS.text,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
