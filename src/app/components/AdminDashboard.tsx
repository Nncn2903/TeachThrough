import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, StatCard, Badge, Avatar, SectionTitle, Button, COLORS } from "./ui";
import { Users, GraduationCap, DollarSign, ShieldAlert } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, CartesianGrid } from "recharts";

const growth = [
  { m: "Jan", v: 320 }, { m: "Feb", v: 480 }, { m: "Mar", v: 610 },
  { m: "Apr", v: 720 }, { m: "May", v: 910 }, { m: "Jun", v: 1150 },
];

const signups = [
  { name: "Nina Alvarez", role: "Student", when: "2h ago" },
  { name: "Omar Haddad", role: "Tutor", when: "5h ago" },
  { name: "Grace Lin", role: "Student", when: "1d ago" },
  { name: "Tom Becker", role: "Tutor", when: "1d ago" },
];

const reports = [
  { subject: "Payment dispute · #4821", tone: "warn" as const },
  { subject: "Reported review · #4820", tone: "danger" as const },
  { subject: "Profile flagged · #4817", tone: "warn" as const },
];

export function AdminDashboard() {
  const { t } = useT();
  const { nav } = useSession();

  return (
    <div className="space-y-6">
      <SectionTitle title={t("adash.title")} sub={t("adash.sub")} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label={t("adash.totalUsers")} value="12,480" Icon={Users} />
        <StatCard label={t("adash.totalTutors")} value="1,320" Icon={GraduationCap} tone={COLORS.secondary} />
        <StatCard label={t("adash.revenue")} value="$284K" Icon={DollarSign} tone={COLORS.success} />
        <StatCard label={t("adash.pendingV")} value="18" Icon={ShieldAlert} tone={COLORS.star} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("adash.growth")}</h2>
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <BarChart data={growth} margin={{ left: 0, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} vertical={false} />
                <XAxis dataKey="m" stroke={COLORS.textMuted} tickLine={false} axisLine={false} />
                <Tooltip formatter={(v: number) => [`${v}`, "New users"]} />
                <Bar dataKey="v" fill={COLORS.primary} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 style={{ color: COLORS.text, fontWeight: 700 }}>{t("adash.reports")}</h2>
            <Badge tone="danger">{reports.length}</Badge>
          </div>
          <div className="space-y-3">
            {reports.map((r) => (
              <div key={r.subject} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: COLORS.softGray }}>
                <span style={{ color: COLORS.text, fontSize: 14 }}>{r.subject}</span>
                <Badge tone={r.tone}>{t("common.pending")}</Badge>
              </div>
            ))}
            <Button variant="soft" full onClick={() => nav("verification")}>{t("side.verifications")}</Button>
          </div>
        </Card>
      </div>

      <Card padded={false}>
        <div className="p-5 md:p-6 flex items-center justify-between">
          <h2 style={{ color: COLORS.text, fontWeight: 700 }}>{t("adash.recentSignups")}</h2>
          <button onClick={() => nav("find")} style={{ color: COLORS.primary }}>{t("common.viewAll")}</button>
        </div>
        <div style={{ borderTop: `1px solid ${COLORS.border}` }}>
          {signups.map((s) => (
            <div key={s.name} className="flex items-center gap-3 px-5 md:px-6 py-3" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
              <Avatar alt={s.name} size={40} />
              <div className="flex-1">
                <div style={{ color: COLORS.text }}>{s.name}</div>
                <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{s.when}</div>
              </div>
              <Badge tone={s.role === "Tutor" ? "sky" : "muted"}>{s.role}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
