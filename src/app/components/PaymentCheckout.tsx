import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, Button, Field, COLORS } from "./ui";
import { CreditCard, Lock, CheckCircle2, ShieldCheck } from "lucide-react";

export function PaymentCheckout() {
  const { t } = useT();
  const { nav } = useSession();
  const [done, setDone] = useState(false);

  const subtotal = 25;
  const fee = 2;
  const total = subtotal + fee;

  if (done) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="text-center">
          <div className="py-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.successBg }}>
              <CheckCircle2 className="w-9 h-9" style={{ color: COLORS.success }} />
            </div>
            <h1 className="mt-4" style={{ color: COLORS.text, fontSize: "1.5rem", fontWeight: 700 }}>{t("pay.success")}</h1>
            <p className="mt-2" style={{ color: COLORS.textMuted }}>{t("pay.successSub")}</p>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => nav("student-dashboard")}>{t("nav.dashboard")}</Button>
              <Button onClick={() => nav("booking-history")}>{t("pay.viewBookings")}</Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 style={{ color: COLORS.text, fontSize: "1.75rem", fontWeight: 700 }}>{t("pay.title")}</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h2 className="mb-4 flex items-center gap-2" style={{ color: COLORS.text, fontWeight: 700 }}>
              <CreditCard className="w-5 h-5" style={{ color: COLORS.primary }} /> {t("pay.method")}
            </h2>
            <div className="p-3 rounded-xl mb-4 flex items-center gap-2" style={{ backgroundColor: COLORS.sky, color: COLORS.primary }}>
              <input type="radio" checked readOnly className="accent-[#0B6BCB]" /> {t("pay.card")}
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <Field label={t("pay.nameOnCard")} placeholder="Alex Morgan" />
              <Field label={t("pay.cardNumber")} placeholder="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-4">
                <Field label={t("pay.expiry")} placeholder="MM / YY" />
                <Field label={t("pay.cvc")} placeholder="123" />
              </div>
              <div className="flex items-center gap-2" style={{ color: COLORS.textMuted, fontSize: 13 }}>
                <Lock className="w-4 h-4" /> {t("pay.secure")}
              </div>
              <Button type="submit" full>{t("pay.payNow")} · ${total}</Button>
            </form>
          </Card>
        </div>

        <Card>
          <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("pay.orderSummary")}</h2>
          <div className="space-y-2" style={{ color: COLORS.textMuted }}>
            <div className="flex justify-between"><span>Calculus · 60 {t("booking.min")}</span><span style={{ color: COLORS.text }}>${subtotal}</span></div>
            <div className="flex justify-between"><span>{t("pay.serviceFee")}</span><span style={{ color: COLORS.text }}>${fee}</span></div>
          </div>
          <div className="mt-4 pt-4 flex justify-between items-center" style={{ borderTop: `1px solid ${COLORS.border}` }}>
            <span style={{ color: COLORS.text }}>{t("booking.total")}</span>
            <span style={{ color: COLORS.primary, fontSize: "1.5rem", fontWeight: 700 }}>${total}</span>
          </div>
          <div className="mt-4 flex items-center gap-2 p-3 rounded-xl" style={{ backgroundColor: COLORS.softGray, color: COLORS.textMuted, fontSize: 13 }}>
            <ShieldCheck className="w-4 h-4" style={{ color: COLORS.success }} /> {t("pay.secure")}
          </div>
        </Card>
      </div>
    </div>
  );
}
