import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, StatCard, Button, Badge, Avatar, SectionTitle, COLORS } from "./ui";
import { DollarSign, BookOpen, Users, Star } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid } from "recharts";

const earningsData = [
  { m: "Jan", v: 1200 }, { m: "Feb", v: 1600 }, { m: "Mar", v: 1400 },
  { m: "Apr", v: 2100 }, { m: "May", v: 1900 }, { m: "Jun", v: 2600 },
];

const schedule = [
  { time: "10:00", student: "Alex Morgan", subj: "Calculus", status: "confirmed" },
  { time: "13:30", student: "Priya Patel", subj: "Algebra", status: "confirmed" },
  { time: "16:00", student: "Liam Nguyen", subj: "Physics", status: "pending" },
];

const requests = [
  { student: "Sofia Rossi", subj: "Calculus · 60 min", when: "Fri, 3:00 PM" },
  { student: "Kenji Sato", subj: "Statistics · 90 min", when: "Sat, 11:00 AM" },
];

export function TutorDashboard() {
  const { t } = useT();
  const { name, nav } = useSession();
  const first = name.split(" ")[0];

  return (
    <div className="space-y-6">
      <SectionTitle title={`${t("tdash.title")} · ${first}`} sub={t("tdash.sub")} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label={t("tdash.earnings")} value="$2,600" Icon={DollarSign} tone={COLORS.success} />
        <StatCard label={t("tdash.lessons")} value="128" Icon={BookOpen} />
        <StatCard label={t("tdash.students")} value="24" Icon={Users} tone={COLORS.secondary} />
        <StatCard label={t("tdash.rating")} value="4.9" Icon={Star} tone={COLORS.star} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Earnings chart */}
        <Card className="lg:col-span-2">
          <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("tdash.earningsTrend")}</h2>
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <AreaChart data={earningsData} margin={{ left: 0, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="earn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} vertical={false} />
                <XAxis dataKey="m" stroke={COLORS.textMuted} tickLine={false} axisLine={false} />
                <Tooltip formatter={(v: number) => [`$${v}`, "Earnings"]} />
                <Area type="monotone" dataKey="v" stroke={COLORS.primary} strokeWidth={2} fill="url(#earn)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Booking requests */}
        <Card>
          <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("tdash.requests")}</h2>
          <div className="space-y-4">
            {requests.map((r) => (
              <div key={r.student} className="pb-4 last:pb-0" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                <div className="flex items-center gap-3">
                  <Avatar alt={r.student} size={40} />
                  <div className="min-w-0">
                    <div style={{ color: COLORS.text }}>{r.student}</div>
                    <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{r.subj}</div>
                  </div>
                </div>
                <div className="mt-1" style={{ color: COLORS.textMuted, fontSize: 13 }}>{r.when}</div>
                <div className="flex gap-2 mt-3">
                  <Button onClick={() => nav("booking-history")} className="!py-1.5 text-sm">{t("tdash.accept")}</Button>
                  <Button variant="outline" className="!py-1.5 text-sm">{t("tdash.decline")}</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Today's schedule */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 style={{ color: COLORS.text, fontWeight: 700 }}>{t("tdash.schedule")}</h2>
          <Button variant="soft" onClick={() => nav("calendar")}>{t("side.availability")}</Button>
        </div>
        <div className="space-y-3">
          {schedule.map((s) => (
            <div key={s.time} className="flex items-center gap-4 p-3 rounded-xl" style={{ backgroundColor: COLORS.softGray }}>
              <div style={{ color: COLORS.primary, fontWeight: 700, minWidth: 56 }}>{s.time}</div>
              <div className="flex-1">
                <div style={{ color: COLORS.text }}>{s.subj}</div>
                <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{s.student}</div>
              </div>
              <Badge tone={s.status === "confirmed" ? "success" : "warn"}>
                {s.status === "confirmed" ? t("common.approved") : t("common.pending")}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
