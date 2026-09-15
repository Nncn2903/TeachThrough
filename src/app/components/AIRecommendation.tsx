import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Avatar, Badge, Button, Stars, COLORS } from "./ui";
import { Sparkles, ArrowLeft, Loader2 } from "lucide-react";

const subjectKeys = ["subj.math", "subj.science", "subj.english", "subj.programming", "subj.business", "subj.design"];
const levels = ["ai.levelBeginner", "ai.levelIntermediate", "ai.levelAdvanced"];
const goals = ["ai.goalExam", "ai.goalConversation", "ai.goalCareer", "ai.goalHobby"];
const budgets = ["$10–20", "$20–35", "$35–50", "$50+"];

const matches = [
  { id: "Emily Williams", name: "Emily Williams", subj: "English", rating: 5.0, price: 20, score: 98, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", why: "Perfect for conversation goals & your budget" },
  { id: "Sarah Johnson", name: "Sarah Johnson", subj: "Math", rating: 4.9, price: 25, score: 94, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", why: "Top-rated for exam preparation" },
  { id: "Michael Chen", name: "Michael Chen", subj: "Programming", rating: 4.8, price: 30, score: 90, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", why: "Great fit for career growth" },
];

export function AIRecommendation() {
  const { t } = useT();
  const { nav } = useSession();
  const [step, setStep] = useState(0);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { q: "ai.q1", options: subjectKeys, val: subject, set: setSubject },
    { q: "ai.q2", options: levels, val: level, set: setLevel },
    { q: "ai.q3", options: goals, val: goal, set: setGoal },
    { q: "ai.q4", options: budgets, val: budget, set: setBudget, raw: true },
  ];

  const finish = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setShowResults(true); }, 1500);
  };

  if (showResults) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2" style={{ color: COLORS.text, fontSize: "1.75rem", fontWeight: 700 }}>
              <Sparkles className="w-6 h-6" style={{ color: COLORS.primary }} /> {t("ai.matchesTitle")}
            </h1>
            <Button variant="outline" onClick={() => { setShowResults(false); setStep(0); }}>{t("ai.startOver")}</Button>
          </div>
          <div className="mt-6 space-y-4">
            {matches.map((m) => (
              <div key={m.id} className="p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                <Avatar src={m.img} alt={m.name} size={64} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span style={{ color: COLORS.text }}>{m.name}</span>
                    <Badge tone="success">{m.score}% {t("ai.matchScore")}</Badge>
                  </div>
                  <div className="flex items-center gap-1 mt-1" style={{ color: COLORS.textMuted, fontSize: 13 }}>
                    <Stars value={m.rating} size={12} /> {m.rating} · {m.subj} · ${m.price}{t("common.hour")}
                  </div>
                  <p className="mt-1" style={{ color: COLORS.primary, fontSize: 13 }}>{m.why}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => nav("profile")}>{t("find.viewProfile")}</Button>
                  <Button onClick={() => nav("booking")}>{t("saved.book")}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto" style={{ backgroundColor: COLORS.sky }}>
            <Sparkles className="w-7 h-7" style={{ color: COLORS.primary }} />
          </div>
          <h1 className="mt-4" style={{ color: COLORS.text, fontSize: "1.75rem", fontWeight: 700 }}>{t("ai.title")}</h1>
          <p className="mt-1" style={{ color: COLORS.textMuted }}>{t("ai.sub")}</p>
        </div>

        {loading ? (
          <div className="mt-10 flex flex-col items-center gap-3" style={{ color: COLORS.textMuted }}>
            <Loader2 className="w-8 h-8 animate-spin" style={{ color: COLORS.primary }} />
            {t("ai.thinking")}
          </div>
        ) : (
          <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
            {/* progress */}
            <div className="flex gap-1.5 mb-6">
              {questions.map((_, i) => (
                <div key={i} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: i <= step ? COLORS.primary : COLORS.border }} />
              ))}
            </div>

            <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t(current.q)}</h2>
            <div className="grid grid-cols-2 gap-3">
              {current.options.map((o) => {
                const label = current.raw ? o : t(o);
                const on = current.val === o;
                return (
                  <button key={o} onClick={() => current.set(o)} className="p-4 rounded-xl text-left" style={{ backgroundColor: on ? COLORS.sky : COLORS.card, border: `1.5px solid ${on ? COLORS.primary : COLORS.border}`, color: on ? COLORS.primary : COLORS.text }}>
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex justify-between">
              <Button variant="ghost" onClick={() => (step === 0 ? nav("home") : setStep(step - 1))}>
                <span className="flex items-center gap-1"><ArrowLeft className="w-4 h-4" />{t("common.back")}</span>
              </Button>
              {step < questions.length - 1 ? (
                <Button onClick={() => setStep(step + 1)} >{t("common.next")}</Button>
              ) : (
                <Button onClick={finish}>{t("ai.getMatches")}</Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
