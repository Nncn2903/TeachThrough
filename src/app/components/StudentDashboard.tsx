import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, StatCard, Button, Badge, Avatar, SectionTitle, COLORS } from "./ui";
import { CalendarClock, Clock, Users, Star, Video, ArrowRight } from "lucide-react";

const upcoming = {
  tutor: "Sarah Johnson",
  subject: "Calculus — Derivatives",
  when: "Today, 4:00 PM",
  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
};

const recommended = [
  { name: "Michael Chen", subj: "Programming", price: 30, rating: 4.8, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  { name: "Emily Williams", subj: "English", price: 20, rating: 5.0, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
  { name: "David Brown", subj: "Chemistry", price: 35, rating: 4.7, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
];

const inProgress = [
  { subj: "Spanish Conversation", tutor: "Emily Williams", pct: 65 },
  { subj: "Python Fundamentals", tutor: "Michael Chen", pct: 40 },
];

export function StudentDashboard() {
  const { t } = useT();
  const { name, nav } = useSession();
  const first = name.split(" ")[0];

  return (
    <div className="space-y-6">
      <SectionTitle title={`${t("sdash.title")}, ${first} 👋`} sub={t("sdash.sub")} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label={t("sdash.upcomingLessons")} value="3" Icon={CalendarClock} />
        <StatCard label={t("sdash.hoursLearned")} value="48" Icon={Clock} tone={COLORS.secondary} />
        <StatCard label={t("sdash.activeTutors")} value="4" Icon={Users} />
        <StatCard label={t("sdash.avgRating")} value="4.9" Icon={Star} tone={COLORS.star} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Next lesson */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ color: COLORS.text, fontWeight: 700 }}>{t("sdash.nextLesson")}</h2>
              <Badge tone="success">{t("common.upcoming")}</Badge>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Avatar src={upcoming.img} alt={upcoming.tutor} size={56} />
              <div className="flex-1">
                <div style={{ color: COLORS.text }}>{upcoming.subject}</div>
                <div style={{ color: COLORS.textMuted }}>{upcoming.tutor} · {upcoming.when}</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => nav("messages")}>{t("common.message")}</Button>
                <Button onClick={() => nav("booking")}>
                  <span className="flex items-center gap-2"><Video className="w-4 h-4" />{t("common.join")}</span>
                </Button>
              </div>
            </div>
          </Card>

          {/* Continue learning */}
          <Card>
            <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("sdash.continueLearning")}</h2>
            <div className="space-y-4">
              {inProgress.map((c) => (
                <div key={c.subj}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span style={{ color: COLORS.text }}>{c.subj}</span>
                    <span style={{ color: COLORS.textMuted }}>{c.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: COLORS.sky }}>
                    <div className="h-full rounded-full" style={{ width: `${c.pct}%`, backgroundColor: COLORS.primary }} />
                  </div>
                  <div className="mt-1" style={{ color: COLORS.textMuted, fontSize: 13 }}>{c.tutor}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recommended */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 style={{ color: COLORS.text, fontWeight: 700 }}>{t("sdash.recommended")}</h2>
            <button onClick={() => nav("find")} style={{ color: COLORS.primary }} className="flex items-center gap-1">
              {t("common.viewAll")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {recommended.map((r) => (
              <div key={r.name} className="flex items-center gap-3">
                <Avatar src={r.img} alt={r.name} size={44} />
                <div className="flex-1 min-w-0">
                  <div style={{ color: COLORS.text }}>{r.name}</div>
                  <div className="flex items-center gap-1" style={{ color: COLORS.textMuted, fontSize: 13 }}>
                    <Star className="w-3 h-3" style={{ color: COLORS.star, fill: COLORS.star }} /> {r.rating} · {r.subj}
                  </div>
                </div>
                <button onClick={() => nav("profile")} className="px-3 py-1.5 rounded-lg" style={{ backgroundColor: COLORS.sky, color: COLORS.primary, fontSize: 13 }}>
                  ${r.price}
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
