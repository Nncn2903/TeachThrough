import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, Badge, SectionTitle, Button, COLORS } from "./ui";
import { CalendarClock, MessageSquare, CreditCard, Star, ShieldCheck, Bell } from "lucide-react";

type Notif = { id: number; icon: React.ElementType; tone: string; title: string; time: string; unread: boolean };

const initial: Notif[] = [
  { id: 1, icon: CalendarClock, tone: COLORS.primary, title: "Your Calculus lesson with Sarah starts in 1 hour.", time: "1h ago", unread: true },
  { id: 2, icon: MessageSquare, tone: COLORS.secondary, title: "Michael Chen sent you a new message.", time: "3h ago", unread: true },
  { id: 3, icon: CreditCard, tone: COLORS.success, title: "Payment of $25 was successful.", time: "1d ago", unread: false },
  { id: 4, icon: Star, tone: COLORS.star, title: "Emily Williams left you a 5-star review.", time: "2d ago", unread: false },
  { id: 5, icon: ShieldCheck, tone: COLORS.success, title: "Your identity verification was approved.", time: "3d ago", unread: false },
];

export function Notifications() {
  const { t } = useT();
  const { nav } = useSession();
  const [items, setItems] = useState(initial);
  const unreadCount = items.filter((i) => i.unread).length;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <SectionTitle title={t("notif.title")} />
        {unreadCount > 0 && <Button variant="soft" onClick={() => setItems((p) => p.map((i) => ({ ...i, unread: false })))}>{t("common.markAllRead")}</Button>}
      </div>

      <div className="space-y-3">
        {items.map((n) => (
          <Card key={n.id} padded={false}>
            <button onClick={() => { setItems((p) => p.map((i) => i.id === n.id ? { ...i, unread: false } : i)); nav("booking-history"); }} className="w-full text-left p-4 flex items-center gap-4" style={{ backgroundColor: n.unread ? COLORS.sky : COLORS.card, borderRadius: 16 }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLORS.softGray }}>
                <n.icon className="w-5 h-5" style={{ color: n.tone }} />
              </div>
              <div className="flex-1 min-w-0">
                <div style={{ color: COLORS.text }}>{n.title}</div>
                <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{n.time}</div>
              </div>
              {n.unread && <Badge tone="sky">{t("notif.new")}</Badge>}
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
