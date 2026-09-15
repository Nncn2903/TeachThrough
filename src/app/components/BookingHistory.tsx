import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, Button, Badge, Avatar, SectionTitle, EmptyState, COLORS } from "./ui";
import { CalendarX, Video } from "lucide-react";

type Status = "upcoming" | "completed" | "cancelled";
type Booking = {
  id: string;
  person: string;
  subject: string;
  date: string;
  time: string;
  status: Status;
  price: number;
  img?: string;
};

const bookings: Booking[] = [
  { id: "b1", person: "Sarah Johnson", subject: "Calculus — Derivatives", date: "Jul 3, 2026", time: "4:00 PM", status: "upcoming", price: 25, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
  { id: "b2", person: "Michael Chen", subject: "Python Fundamentals", date: "Jul 5, 2026", time: "6:30 PM", status: "upcoming", price: 30, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  { id: "b3", person: "Emily Williams", subject: "English Conversation", date: "Jun 28, 2026", time: "2:00 PM", status: "completed", price: 20, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
  { id: "b4", person: "David Brown", subject: "Chemistry Basics", date: "Jun 20, 2026", time: "11:00 AM", status: "completed", price: 35, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { id: "b5", person: "Sarah Johnson", subject: "Algebra Review", date: "Jun 15, 2026", time: "5:00 PM", status: "cancelled", price: 25, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
];

const tabs: { key: Status | "all"; tKey: string }[] = [
  { key: "all", tKey: "bhist.all" },
  { key: "upcoming", tKey: "common.upcoming" },
  { key: "completed", tKey: "common.completed" },
  { key: "cancelled", tKey: "common.cancelled" },
];

export function BookingHistory() {
  const { t } = useT();
  const { role, nav } = useSession();
  const [tab, setTab] = useState<Status | "all">("all");

  const list = tab === "all" ? bookings : bookings.filter((b) => b.status === tab);
  const toneFor = (s: Status) => (s === "upcoming" ? "success" : s === "completed" ? "sky" : "danger") as const;
  const labelFor = (s: Status) => (s === "upcoming" ? t("common.upcoming") : s === "completed" ? t("common.completed") : t("common.cancelled"));

  return (
    <div className="space-y-6">
      <SectionTitle title={t("bhist.title")} sub={t("bhist.sub")} />

      <div className="flex flex-wrap gap-2">
        {tabs.map((tb) => {
          const on = tab === tb.key;
          return (
            <button key={tb.key} onClick={() => setTab(tb.key)} className="px-4 py-2 rounded-lg" style={{ backgroundColor: on ? COLORS.primary : COLORS.card, color: on ? "#fff" : COLORS.text, border: `1px solid ${on ? COLORS.primary : COLORS.border}` }}>
              {t(tb.tKey)}
            </button>
          );
        })}
      </div>

      {list.length === 0 ? (
        <EmptyState Icon={CalendarX} title={t("bhist.empty")} sub={t("bhist.emptySub")} />
      ) : (
        <div className="space-y-3">
          {list.map((b) => (
            <Card key={b.id} padded={false}>
              <div className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <Avatar src={b.img} alt={b.person} size={52} />
                <div className="flex-1 min-w-0">
                  <div style={{ color: COLORS.text }}>{b.subject}</div>
                  <div style={{ color: COLORS.textMuted, fontSize: 14 }}>
                    {role === "tutor" ? b.person : b.person} · {b.date} · {b.time}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge tone={toneFor(b.status)}>{labelFor(b.status)}</Badge>
                  <span style={{ color: COLORS.text }}>${b.price}</span>
                  {b.status === "upcoming" ? (
                    <Button onClick={() => nav("messages")} className="!py-1.5 text-sm">
                      <span className="flex items-center gap-1.5"><Video className="w-4 h-4" />{t("common.join")}</span>
                    </Button>
                  ) : b.status === "completed" && role === "student" ? (
                    <Button variant="soft" onClick={() => nav("reviews")} className="!py-1.5 text-sm">{t("rev.writeTitle")}</Button>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
