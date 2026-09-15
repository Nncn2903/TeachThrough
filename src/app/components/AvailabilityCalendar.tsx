import { useState } from "react";
import { useT } from "../i18n";
import { Button, SectionTitle, COLORS } from "./ui";
import { Info } from "lucide-react";

const dayKeys = ["reg.day.mon", "reg.day.tue", "reg.day.wed", "reg.day.thu", "reg.day.fri", "reg.day.sat", "reg.day.sun"];
const dayFullKeys = ["reg.day.mon.full", "reg.day.tue.full", "reg.day.wed.full", "reg.day.thu.full", "reg.day.fri.full", "reg.day.sat.full", "reg.day.sun.full"];
const hours = Array.from({ length: 15 }, (_, i) => `${(i + 7).toString().padStart(2, "0")}:00`);

export function AvailabilityCalendar() {
  const { t } = useT();
  const [slots, setSlots] = useState<Record<string, boolean>>({
    "0-09:00": true, "0-10:00": true, "2-14:00": true, "2-15:00": true, "4-18:00": true,
  });

  const key = (d: number, h: string) => `${d}-${h}`;
  const toggle = (d: number, h: string) => setSlots((p) => ({ ...p, [key(d, h)]: !p[key(d, h)] }));
  const toggleDay = (d: number) => {
    const allOn = hours.every((h) => slots[key(d, h)]);
    setSlots((p) => {
      const next = { ...p };
      hours.forEach((h) => (next[key(d, h)] = !allOn));
      return next;
    });
  };
  const count = Object.values(slots).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <SectionTitle title={t("cal.title")} sub={t("cal.sub")} />
        <Button>{t("cal.save")}</Button>
      </div>

      <div className="flex items-center gap-2 p-3 rounded-xl" style={{ backgroundColor: COLORS.sky, color: COLORS.primary, fontSize: 14 }}>
        <Info className="w-4 h-4" /> {t("cal.legend")}
      </div>

      <div className="rounded-2xl overflow-x-auto" style={{ border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.card }}>
        <div style={{ minWidth: 640 }}>
          {/* header */}
          <div className="grid" style={{ gridTemplateColumns: "64px repeat(7, 1fr)", backgroundColor: COLORS.sky, borderBottom: `1px solid ${COLORS.border}` }}>
            <div className="p-2" />
            {dayKeys.map((d, i) => {
              const allOn = hours.every((h) => slots[key(i, h)]);
              return (
                <button key={d} onClick={() => toggleDay(i)} title={t(dayFullKeys[i])} className="py-2.5 text-center" style={{ color: allOn ? COLORS.primary : COLORS.text, borderLeft: `1px solid ${COLORS.border}`, fontSize: 13, fontWeight: allOn ? 600 : 400 }}>
                  {t(d)}
                </button>
              );
            })}
          </div>
          {/* rows */}
          {hours.map((h, ri) => (
            <div key={h} className="grid" style={{ gridTemplateColumns: "64px repeat(7, 1fr)", borderBottom: ri < hours.length - 1 ? `1px solid ${COLORS.border}` : "none" }}>
              <div className="flex items-center justify-center" style={{ fontSize: 11, color: COLORS.textMuted, backgroundColor: COLORS.softGray, borderRight: `1px solid ${COLORS.border}` }}>{h}</div>
              {dayKeys.map((_, di) => {
                const on = !!slots[key(di, h)];
                return <button key={di} onClick={() => toggle(di, h)} className="h-8 transition-colors" style={{ backgroundColor: on ? COLORS.primary : "transparent", borderLeft: `1px solid ${COLORS.border}` }} />;
              })}
            </div>
          ))}
        </div>
      </div>

      <div style={{ color: COLORS.textMuted }}>{count} {t("cal.selected")}</div>
    </div>
  );
}
