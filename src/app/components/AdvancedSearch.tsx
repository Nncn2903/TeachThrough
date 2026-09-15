import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Avatar, Badge, Button, Stars, COLORS } from "./ui";
import { Search, Star, Heart } from "lucide-react";

const subjectKeys = ["subj.math", "subj.science", "subj.english", "subj.programming", "subj.business", "subj.design", "subj.music", "subj.languages"];
const langs = ["English", "ไทย", "中文", "Español", "Français"];
const expLevels = ["adv.levelBeginner", "ai.levelIntermediate", "ai.levelAdvanced"];

type Tutor = { id: string; name: string; subj: string[]; rating: number; reviews: number; price: number; mode: string; img: string };

const tutors: Tutor[] = [
  { id: "Sarah Johnson", name: "Sarah Johnson", subj: ["subj.math", "subj.physics"], rating: 4.9, reviews: 128, price: 25, mode: "adv.online", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
  { id: "Michael Chen", name: "Michael Chen", subj: ["subj.programming"], rating: 4.8, reviews: 92, price: 30, mode: "adv.online", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  { id: "Emily Williams", name: "Emily Williams", subj: ["subj.english"], rating: 5.0, reviews: 156, price: 20, mode: "adv.inPerson", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
  { id: "David Brown", name: "David Brown", subj: ["subj.science", "subj.chemistry"], rating: 4.7, reviews: 74, price: 35, mode: "adv.online", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
];

function Chk({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-1">
      <span onClick={onChange} className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: checked ? COLORS.primary : COLORS.card, border: `1.5px solid ${checked ? COLORS.primary : COLORS.border}` }}>
        {checked && <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </span>
      <span style={{ color: COLORS.text }}>{label}</span>
    </label>
  );
}

export function AdvancedSearch() {
  const { t } = useT();
  const { nav, saved, toggleSave } = useSession();
  const [subjects, setSubjects] = useState<string[]>([]);
  const [price, setPrice] = useState(60);
  const [minRating, setMinRating] = useState(0);
  const [modes, setModes] = useState<string[]>([]);
  const [langsSel, setLangsSel] = useState<string[]>([]);

  const toggle = (arr: string[], set: (v: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const results = tutors.filter((tt) =>
    (subjects.length === 0 || tt.subj.some((s) => subjects.includes(s))) &&
    tt.price <= price &&
    tt.rating >= minRating &&
    (modes.length === 0 || modes.includes(tt.mode))
  );

  const reset = () => { setSubjects([]); setPrice(60); setMinRating(0); setModes([]); setLangsSel([]); };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}>{t("adv.title")}</h1>
        <p className="mt-1" style={{ color: COLORS.textMuted }}>{t("adv.sub")}</p>

        <div className="mt-6 grid grid-cols-12 gap-6">
          {/* Filters */}
          <aside className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="p-5 rounded-2xl space-y-5" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
              <div>
                <span style={{ color: COLORS.text }}>{t("adv.keyword")}</span>
                <div className="mt-1.5 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ border: `1px solid ${COLORS.border}` }}>
                  <Search className="w-4 h-4" style={{ color: COLORS.textMuted }} />
                  <input placeholder={t("find.searchPlaceholder")} className="bg-transparent outline-none flex-1" style={{ color: COLORS.text }} />
                </div>
              </div>

              <div>
                <div style={{ color: COLORS.text }}>{t("find.subjects")}</div>
                <div className="mt-2">
                  {subjectKeys.map((s) => <Chk key={s} label={t(s)} checked={subjects.includes(s)} onChange={() => toggle(subjects, setSubjects, s)} />)}
                </div>
              </div>

              <div>
                <div className="flex justify-between" style={{ color: COLORS.text }}>
                  <span>{t("adv.priceRange")}</span><span style={{ color: COLORS.primary }}>${price}+</span>
                </div>
                <input type="range" min={5} max={100} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full mt-2 accent-[#0B6BCB]" />
              </div>

              <div>
                <div style={{ color: COLORS.text }}>{t("adv.minRating")}</div>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button key={i} onClick={() => setMinRating(i === minRating ? 0 : i)}>
                      <Star className="w-6 h-6" style={{ color: COLORS.star, fill: i <= minRating ? COLORS.star : "transparent" }} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ color: COLORS.text }}>{t("adv.lessonMode")}</div>
                <div className="mt-2">
                  <Chk label={t("adv.online")} checked={modes.includes("adv.online")} onChange={() => toggle(modes, setModes, "adv.online")} />
                  <Chk label={t("adv.inPerson")} checked={modes.includes("adv.inPerson")} onChange={() => toggle(modes, setModes, "adv.inPerson")} />
                </div>
              </div>

              <div>
                <div style={{ color: COLORS.text }}>{t("adv.langSpoken")}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {langs.map((l) => {
                    const on = langsSel.includes(l);
                    return <button key={l} onClick={() => toggle(langsSel, setLangsSel, l)} className="px-2.5 py-1 rounded-lg" style={{ backgroundColor: on ? COLORS.primary : COLORS.sky, color: on ? "#fff" : COLORS.primary, fontSize: 13 }}>{l}</button>;
                  })}
                </div>
              </div>

              <div>
                <div style={{ color: COLORS.text }}>{t("adv.experience")}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {expLevels.map((l) => <Badge key={l} tone="muted">{t(l)}</Badge>)}
                </div>
              </div>

              <div className="flex gap-2">
                <Button full>{t("adv.apply")}</Button>
                <Button variant="outline" onClick={reset}>{t("adv.reset")}</Button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <main className="col-span-12 md:col-span-8 lg:col-span-9">
            <div className="mb-4" style={{ color: COLORS.textMuted }}>
              <span style={{ color: COLORS.text }}>{results.length}</span> {t("adv.results")}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {results.map((tt) => {
                const liked = saved.includes(tt.id);
                return (
                  <div key={tt.id} className="p-5 rounded-2xl" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                    <div className="flex gap-3">
                      <Avatar src={tt.img} alt={tt.name} size={56} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <div style={{ color: COLORS.text }}>{tt.name}</div>
                            <div className="flex items-center gap-1" style={{ color: COLORS.textMuted, fontSize: 13 }}>
                              <Stars value={tt.rating} size={12} /> {tt.rating} ({tt.reviews})
                            </div>
                          </div>
                          <button onClick={() => toggleSave(tt.id)}><Heart className="w-5 h-5" style={{ color: liked ? COLORS.danger : COLORS.textMuted, fill: liked ? COLORS.danger : "transparent" }} /></button>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {tt.subj.map((s) => <Badge key={s} tone="sky">{t(s)}</Badge>)}
                          <Badge tone="muted">{t(tt.mode)}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span><span style={{ color: COLORS.primary, fontWeight: 700 }}>${tt.price}</span><span style={{ color: COLORS.textMuted }}>{t("common.hour")}</span></span>
                      <Button onClick={() => nav("profile")} className="!py-1.5 text-sm">{t("find.viewProfile")}</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
