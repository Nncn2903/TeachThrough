import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, Button, Avatar, Stars, SectionTitle, COLORS } from "./ui";
import { Star } from "lucide-react";

type Review = { id: number; author: string; rating: number; text: string; date: string; img?: string };

const reviews: Review[] = [
  { id: 1, author: "Alex Morgan", rating: 5, text: "Sarah explains calculus so clearly. My grades improved within a month!", date: "Jun 28, 2026", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
  { id: 2, author: "Priya Patel", rating: 5, text: "Patient, encouraging, and always well-prepared. Highly recommend.", date: "Jun 20, 2026" },
  { id: 3, author: "Liam Nguyen", rating: 4, text: "Great sessions overall. Would love more practice problems.", date: "Jun 12, 2026" },
];

const dist = [
  { stars: 5, pct: 82 },
  { stars: 4, pct: 12 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

export function Reviews() {
  const { t } = useT();
  const { role } = useSession();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">
      <SectionTitle title={t("rev.title")} sub={role === "tutor" ? t("rev.subTutor") : t("rev.subStudent")} />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Summary */}
        <Card>
          <div className="text-center">
            <div style={{ color: COLORS.text, fontSize: "3rem", fontWeight: 700 }}>4.9</div>
            <div className="flex justify-center my-2"><Stars value={5} size={20} /></div>
            <div style={{ color: COLORS.textMuted }}>{t("rev.basedOn")} 128 {t("rev.reviews")}</div>
          </div>
          <div className="mt-4 space-y-2">
            {dist.map((d) => (
              <div key={d.stars} className="flex items-center gap-2">
                <span className="flex items-center gap-1" style={{ color: COLORS.textMuted, fontSize: 13, width: 32 }}>{d.stars}<Star className="w-3 h-3" style={{ color: COLORS.star, fill: COLORS.star }} /></span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: COLORS.sky }}>
                  <div className="h-full" style={{ width: `${d.pct}%`, backgroundColor: COLORS.star }} />
                </div>
                <span style={{ color: COLORS.textMuted, fontSize: 13, width: 36, textAlign: "right" }}>{d.pct}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Write review (students) or reviews list header */}
        <div className="lg:col-span-2 space-y-4">
          {role === "student" && (
            <Card>
              <h2 className="mb-3" style={{ color: COLORS.text, fontWeight: 700 }}>{t("rev.writeTitle")}</h2>
              {submitted ? (
                <div className="p-4 rounded-xl" style={{ backgroundColor: COLORS.successBg, color: COLORS.success }}>{t("common.completed")} ✓</div>
              ) : (
                <>
                  <span style={{ color: COLORS.text }}>{t("rev.yourRating")}</span>
                  <div className="flex gap-1 mt-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <button key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(0)} onClick={() => setRating(i)}>
                        <Star className="w-7 h-7" style={{ color: COLORS.star, fill: i <= (hover || rating) ? COLORS.star : "transparent" }} />
                      </button>
                    ))}
                  </div>
                  <textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder={t("rev.reviewPh")} className="w-full px-3.5 py-2.5 rounded-lg outline-none resize-none" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text }} />
                  <div className="mt-3"><Button onClick={() => setSubmitted(true)}>{t("rev.submit")}</Button></div>
                </>
              )}
            </Card>
          )}

          {reviews.map((r) => (
            <Card key={r.id}>
              <div className="flex gap-3">
                <Avatar src={r.img} alt={r.author} size={44} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span style={{ color: COLORS.text }}>{r.author}</span>
                    <span style={{ color: COLORS.textMuted, fontSize: 13 }}>{r.date}</span>
                  </div>
                  <Stars value={r.rating} size={14} />
                  <p className="mt-2" style={{ color: COLORS.textMuted }}>{r.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
