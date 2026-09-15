import { useState } from "react";
import { Search, ChevronDown, SlidersHorizontal, Star, Eye, MessageSquare } from "lucide-react";
import { useT } from "../i18n";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Course banner + avatar assets from the imported Figma design (read-only imports folder)
import imgCourse1 from "../../imports/Subject/cde33d4953b9bf38882d59f8f5f5a72fa624d387.png";
import imgCourse2 from "../../imports/Subject/19f394a42d92172c3393d4aca5e110db71ed8664.png";
import imgCourse3 from "../../imports/Subject/69a01d4ac4561d2c0d5c00ab37055edcc15c5dc3.png";
import imgCourse4 from "../../imports/Subject/c296ac4129e445ec690b98f425a3a3294c0f67da.png";
import imgCourse5 from "../../imports/Subject/219f56d7259c5de4a6f41357d6e4d78425194b4f.png";
import imgCourse6 from "../../imports/Subject/cf0f7d7571b8e628214c8ed5a5517f715c80f82d.png";
import imgCourse7 from "../../imports/Subject/0ab09cc8e7669727ba8e7ccd652e77d208dcc1e8.png";
import imgCourse8 from "../../imports/Subject/48a948a1251c0d13b30739e9bba8e5cf82982667.png";
import imgCourse9 from "../../imports/Subject/02d304320e54862925cab8bf2437765c0042a766.png";
import imgUserAvatar from "../../imports/Subject/8815c5b2bf647314a854331a32451ee553207ae4.png";

const COLORS = {
  primary: "#0B6BCB",
  secondary: "#3AA7F2",
  sky: "#EAF6FF",
  text: "#183B56",
  textMuted: "#5A7184",
  border: "#D9E6F2",
  card: "#FFFFFF",
  softGray: "#F7FBFF",
  cardBorder: "#E5E5E5",
  title: "#000000",
  tutor: "#0C2B66",
  taughtBy: "#2D2E2E",
  star: "#F5A623",
  stat: "#999A9A",
};

const PRIDI = "'Pridi', 'Noto Sans Thai', serif";

type Course = {
  id: number;
  title: string;
  tutor: string;
  image: string;
  rating: string;
  views: number;
  comments: number;
};

const courses: Course[] = [
  { id: 1, title: "เรียนพิเศษภาษาอังกฤษ ฉบับเร่งรัด-เตรียมสอบ (ทุกระดับชั้น)", tutor: "KruGift", image: imgCourse1, rating: "4.9", views: 200, comments: 128 },
  { id: 2, title: "เรียนภาษาจีนพื้นฐานเพื่อการสื่อสาร", tutor: "ครูเหมย", image: imgCourse2, rating: "4.9", views: 200, comments: 128 },
  { id: 3, title: "ติวสอบคณิตศาสตร์ทุกระดับชั้น (ประถม - มหาวิทยาลัย)", tutor: "ครูต้น", image: imgCourse3, rating: "4.9", views: 200, comments: 128 },
  { id: 4, title: "The Secret Code of Ratio รหัสลับสู่ขุมทรัพย์อัจฉริยะ", tutor: "ครูกิ๊ฟ", image: imgCourse4, rating: "4.9", views: 200, comments: 128 },
  { id: 5, title: "ติวเข้มฟิสิกส์ ม.ปลาย พร้อมสอบ TCAS", tutor: "ครูเจมส์", image: imgCourse5, rating: "4.9", views: 200, comments: 128 },
  { id: 6, title: "เคมีพิชิตเกรด A เข้าใจง่ายใน 30 วัน", tutor: "ครูแป้ง", image: imgCourse6, rating: "4.9", views: 200, comments: 128 },
  { id: 7, title: "ภาษาอังกฤษเพื่อการสื่อสารและสัมภาษณ์งาน", tutor: "Teacher Amy", image: imgCourse7, rating: "4.9", views: 200, comments: 128 },
  { id: 8, title: "IELTS Academic Preparation Band 7+", tutor: "Teacher Michael", image: imgCourse8, rating: "4.9", views: 200, comments: 128 },
  { id: 9, title: "ชีววิทยา สรุปครบทุกบท พร้อมเทคนิคจำ", tutor: "ครูเฟิร์น", image: imgCourse9, rating: "4.9", views: 200, comments: 128 },
];

function FilterButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-black/[0.02]"
      style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text }}
    >
      <span>{label}</span>
      <ChevronDown className="w-4 h-4" style={{ color: COLORS.textMuted }} />
    </button>
  );
}

function CourseCard({ course }: { course: Course }) {
  const { t } = useT();
  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden p-4 transition-shadow hover:shadow-md"
      style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.cardBorder}` }}
    >
      {/* Course banner */}
      <div className="rounded-md overflow-hidden">
        <ImageWithFallback
          src={course.image}
          alt={course.title}
          className="w-full aspect-[16/10] object-cover"
        />
      </div>

      {/* Stats */}
      <div className="flex items-center gap-2 mt-3">
        <Star className="w-4 h-4" style={{ color: COLORS.star, fill: COLORS.star }} />
        <span style={{ color: COLORS.text }}>{course.rating}</span>
        <div className="flex items-center gap-3 ml-auto" style={{ color: COLORS.stat, fontFamily: PRIDI }}>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {course.views}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            {course.comments}
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-2 min-h-[2.75rem]">
        <p style={{ fontFamily: PRIDI, color: COLORS.title, lineHeight: "1.5" }}>
          {course.title}
        </p>
      </div>

      {/* Tutor */}
      <div
        className="mt-auto pt-3 flex items-center gap-2"
        style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}
      >
        <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0">
          <ImageWithFallback src={imgUserAvatar} alt={course.tutor} className="w-full h-full object-cover" />
        </div>
        <div className="leading-tight" style={{ fontFamily: PRIDI }}>
          <div style={{ color: COLORS.taughtBy, fontSize: 13 }}>{t("subjects.taughtBy")}</div>
          <div style={{ color: COLORS.tutor, fontSize: 13 }}>{course.tutor}</div>
        </div>
      </div>
    </div>
  );
}

export function Subjects() {
  const { t } = useT();
  const [query, setQuery] = useState("");

  return (
    <div style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 style={{ color: COLORS.text, fontSize: "1.875rem", fontWeight: 700 }}>
          {t("subjects.title")}
        </h1>
        <p className="mt-1" style={{ color: COLORS.textMuted }}>
          {t("subjects.sub")}
        </p>

        {/* Search + filters */}
        <div
          className="mt-6 rounded-xl p-3 flex flex-col md:flex-row md:items-center gap-3"
          style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}
        >
          <div className="flex items-center gap-2 flex-1 px-2">
            <Search className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.textMuted }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("subjects.searchPh")}
              className="w-full bg-transparent outline-none py-1.5"
              style={{ color: COLORS.text }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <FilterButton label={t("subjects.allSubjects")} />
            <FilterButton label={t("subjects.price")} />
            <FilterButton label={t("subjects.rating")} />
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: COLORS.primary }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>{t("subjects.filters")}</span>
            </button>
          </div>
        </div>

        {/* Result count + sort */}
        <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
          <div style={{ color: COLORS.text }}>
            <span>156</span>
            <span style={{ color: COLORS.textMuted }}> {t("subjects.found")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: COLORS.textMuted }}>{t("subjects.sortBy")}</span>
            <FilterButton label={t("subjects.relevance")} />
          </div>
        </div>

        {/* Course grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
