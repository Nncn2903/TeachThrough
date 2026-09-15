import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, StatCard, Badge, SectionTitle, Button, COLORS } from "./ui";
import { Wallet, TrendingUp, Download } from "lucide-react";

type Txn = { id: string; desc: string; date: string; amount: number; status: "paid" | "pending" };

const txns: Txn[] = [
  { id: "TX-4821", desc: "Calculus lesson · Sarah Johnson", date: "Jul 1, 2026", amount: 25, status: "paid" },
  { id: "TX-4802", desc: "Python lesson · Michael Chen", date: "Jun 28, 2026", amount: 30, status: "paid" },
  { id: "TX-4790", desc: "English lesson · Emily Williams", date: "Jun 24, 2026", amount: 20, status: "paid" },
  { id: "TX-4771", desc: "Chemistry lesson · David Brown", date: "Jun 18, 2026", amount: 35, status: "pending" },
];

export function PaymentHistory() {
  const { t } = useT();
  const { role } = useSession();
  const isTutor = role === "tutor";

  return (
    <div className="space-y-6">
      <SectionTitle title={t("phist.title")} sub={isTutor ? t("phist.subTutor") : t("phist.subStudent")} />

      <div className="grid grid-cols-2 gap-4">
        <StatCard label={isTutor ? t("phist.totalEarned") : t("phist.totalSpent")} value={isTutor ? "$8,240" : "$1,180"} Icon={Wallet} tone={COLORS.success} />
        <StatCard label={t("phist.thisMonth")} value={isTutor ? "$2,600" : "$110"} Icon={TrendingUp} tone={COLORS.secondary} />
      </div>

      <Card padded={false}>
        {/* Desktop table */}
        <div className="hidden md:grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-6 py-3" style={{ borderBottom: `1px solid ${COLORS.border}`, color: COLORS.textMuted }}>
          <span>{t("phist.description")}</span>
          <span>{t("common.date")}</span>
          <span>{t("common.amount")}</span>
          <span>{t("common.status")}</span>
          <span>{t("phist.receipt")}</span>
        </div>
        {txns.map((x) => (
          <div key={x.id} className="px-6 py-4 md:grid md:grid-cols-[1fr_auto_auto_auto_auto] md:gap-4 md:items-center flex flex-col gap-2" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
            <div>
              <div style={{ color: COLORS.text }}>{x.desc}</div>
              <div className="md:hidden" style={{ color: COLORS.textMuted, fontSize: 13 }}>{x.date}</div>
            </div>
            <span className="hidden md:block" style={{ color: COLORS.textMuted }}>{x.date}</span>
            <span style={{ color: COLORS.text }}>${x.amount}</span>
            <Badge tone={x.status === "paid" ? "success" : "warn"}>{x.status === "paid" ? t("common.paid") : t("common.pending")}</Badge>
            <button className="flex items-center gap-1 text-left" style={{ color: COLORS.primary }}>
              <Download className="w-4 h-4" /> {t("phist.receipt")}
            </button>
          </div>
        ))}
      </Card>
    </div>
  );
}
