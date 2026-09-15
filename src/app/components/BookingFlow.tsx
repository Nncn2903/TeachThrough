import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, Button, Avatar, COLORS } from "./ui";
import { Check } from "lucide-react";

const subjectKeys = ["subj.math", "subj.science", "subj.english", "subj.programming", "subj.business", "subj.design"];
const durations = [30, 60, 90, 120];
const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

function days() {
  const base = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d;
  });
}

export function BookingFlow() {
  const { t } = useT();
  const { nav } = useSession();
  const [step, setStep] = useState(1);
  const [subject, setSubject] = useState<string>("subj.math");
  const [duration, setDuration] = useState(60);
  const [dayIdx, setDayIdx] = useState(0);
  const [time, setTime] = useState("10:00");
  const [notes, setNotes] = useState("");

  const rate = 25;
  const total = Math.round((rate * duration) / 60);
  const dayList = days();
  const steps = ["booking.step1", "booking.step2", "booking.step3", "booking.step4"];

  const fmtDay = (d: Date) => d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });

  return (
    <div className="space-y-6">
      <h1 style={{ color: COLORS.text, fontSize: "1.75rem", fontWeight: 700 }}>{t("booking.title")}</h1>

      {/* Stepper */}
      <div className="flex items-center">
        {steps.map((s, i) => {
          const n = i + 1;
          const active = n === step;
          const done = n < step;
          return (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: active || done ? COLORS.primary : COLORS.card, color: active || done ? "#fff" : COLORS.textMuted, border: `1px solid ${active || done ? COLORS.primary : COLORS.border}` }}>
                  {done ? <Check className="w-5 h-5" /> : n}
                </div>
                <span className="hidden sm:block" style={{ color: active ? COLORS.primary : COLORS.textMuted, fontSize: 14 }}>{t(s)}</span>
              </div>
              {i < steps.length - 1 && <div className="flex-1 h-0.5 mx-3" style={{ backgroundColor: done ? COLORS.primary : COLORS.border }} />}
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            {step === 1 && (
              <div>
                <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("booking.chooseSubject")}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {subjectKeys.map((s) => {
                    const on = subject === s;
                    return (
                      <button key={s} onClick={() => setSubject(s)} className="p-4 rounded-xl text-left" style={{ backgroundColor: on ? COLORS.sky : COLORS.card, border: `1.5px solid ${on ? COLORS.primary : COLORS.border}`, color: on ? COLORS.primary : COLORS.text }}>
                        {t(s)}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-6">
                  <span style={{ color: COLORS.text }}>{t("booking.lessonLength")}</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {durations.map((d) => {
                      const on = duration === d;
                      return (
                        <button key={d} onClick={() => setDuration(d)} className="px-4 py-2 rounded-lg" style={{ backgroundColor: on ? COLORS.primary : COLORS.card, color: on ? "#fff" : COLORS.text, border: `1px solid ${on ? COLORS.primary : COLORS.border}` }}>
                          {d} {t("booking.min")}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="mb-3" style={{ color: COLORS.text, fontWeight: 700 }}>{t("booking.selectDate")}</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {dayList.map((d, i) => {
                    const on = dayIdx === i;
                    return (
                      <button key={i} onClick={() => setDayIdx(i)} className="py-3 rounded-xl" style={{ backgroundColor: on ? COLORS.primary : COLORS.card, color: on ? "#fff" : COLORS.text, border: `1px solid ${on ? COLORS.primary : COLORS.border}`, fontSize: 14 }}>
                        {fmtDay(d)}
                      </button>
                    );
                  })}
                </div>
                <h2 className="mt-6 mb-3" style={{ color: COLORS.text, fontWeight: 700 }}>{t("booking.selectTime")}</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {times.map((tm) => {
                    const on = time === tm;
                    return (
                      <button key={tm} onClick={() => setTime(tm)} className="py-2.5 rounded-lg" style={{ backgroundColor: on ? COLORS.primary : COLORS.card, color: on ? "#fff" : COLORS.text, border: `1px solid ${on ? COLORS.primary : COLORS.border}` }}>
                        {tm}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="mb-3" style={{ color: COLORS.text, fontWeight: 700 }}>{t("booking.step3")}</h2>
                <label className="block">
                  <span style={{ color: COLORS.text }}>{t("booking.notes")}</span>
                  <textarea rows={6} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t("booking.notesPh")} className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none resize-none" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text }} />
                </label>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("booking.step4")}</h2>
                <div className="space-y-3">
                  {[
                    [t("booking.subject"), t(subject)],
                    [t("booking.datetime"), `${fmtDay(dayList[dayIdx])} · ${time}`],
                    [t("booking.duration"), `${duration} ${t("booking.min")}`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                      <span style={{ color: COLORS.textMuted }}>{k}</span>
                      <span style={{ color: COLORS.text }}>{v}</span>
                    </div>
                  ))}
                  {notes && <p style={{ color: COLORS.textMuted }}>{notes}</p>}
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={() => (step === 1 ? nav("find") : setStep(step - 1))}>{t("common.back")}</Button>
              {step < 4 ? (
                <Button onClick={() => setStep(step + 1)}>{t("common.continue")}</Button>
              ) : (
                <Button onClick={() => nav("checkout")}>{t("booking.confirmPay")}</Button>
              )}
            </div>
          </Card>
        </div>

        {/* Summary */}
        <Card>
          <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("booking.summary")}</h2>
          <div className="flex items-center gap-3 mb-4">
            <Avatar src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" alt="Sarah Johnson" size={48} />
            <div>
              <div style={{ color: COLORS.text }}>Sarah Johnson</div>
              <div style={{ color: COLORS.textMuted, fontSize: 13 }}>${rate}{t("common.hour")}</div>
            </div>
          </div>
          <div className="space-y-2" style={{ color: COLORS.textMuted }}>
            <div className="flex justify-between"><span>{t("booking.subject")}</span><span style={{ color: COLORS.text }}>{t(subject)}</span></div>
            <div className="flex justify-between"><span>{t("booking.duration")}</span><span style={{ color: COLORS.text }}>{duration} {t("booking.min")}</span></div>
            <div className="flex justify-between"><span>{t("booking.datetime")}</span><span style={{ color: COLORS.text }}>{time}</span></div>
          </div>
          <div className="mt-4 pt-4 flex justify-between items-center" style={{ borderTop: `1px solid ${COLORS.border}` }}>
            <span style={{ color: COLORS.text }}>{t("booking.total")}</span>
            <span style={{ color: COLORS.primary, fontSize: "1.5rem", fontWeight: 700 }}>${total}</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
