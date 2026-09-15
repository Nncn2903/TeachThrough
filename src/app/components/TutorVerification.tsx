import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, Button, Badge, Avatar, SectionTitle, COLORS } from "./ui";
import { IdCard, GraduationCap, ShieldCheck, Video, Check, Clock, Upload } from "lucide-react";

type Step = { id: string; Icon: React.ElementType; titleKey: string; subKey: string; status: "verified" | "review" | "none" };

const initialSteps: Step[] = [
  { id: "id", Icon: IdCard, titleKey: "verif.identity", subKey: "verif.identitySub", status: "verified" },
  { id: "edu", Icon: GraduationCap, titleKey: "verif.education", subKey: "verif.educationSub", status: "review" },
  { id: "bg", Icon: ShieldCheck, titleKey: "verif.background", subKey: "verif.backgroundSub", status: "none" },
  { id: "video", Icon: Video, titleKey: "verif.videoIntro", subKey: "verif.videoSub", status: "none" },
];

const queue = [
  { name: "Omar Haddad", subject: "Physics · Master's", when: "Submitted 2h ago", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Grace Lin", subject: "English · TEFL", when: "Submitted 5h ago", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
  { name: "Tom Becker", subject: "Programming · BSc", when: "Submitted 1d ago", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
];

function StatusBadge({ status }: { status: Step["status"] }) {
  const { t } = useT();
  if (status === "verified") return <Badge tone="success">{t("verif.verified")}</Badge>;
  if (status === "review") return <Badge tone="warn">{t("verif.underReview")}</Badge>;
  return <Badge tone="muted">{t("verif.notStarted")}</Badge>;
}

export function TutorVerification() {
  const { t } = useT();
  const { role } = useSession();
  const [steps, setSteps] = useState(initialSteps);
  const [pending, setPending] = useState(queue);

  if (role === "admin") {
    return (
      <div className="space-y-6">
        <SectionTitle title={t("verif.queue")} sub={t("verif.subAdmin")} />
        <div className="space-y-3">
          {pending.map((q) => (
            <Card key={q.name} padded={false}>
              <div className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <Avatar src={q.img} alt={q.name} size={52} />
                <div className="flex-1">
                  <div style={{ color: COLORS.text }}>{q.name}</div>
                  <div style={{ color: COLORS.textMuted, fontSize: 14 }}>{q.subject} · {q.when}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="!py-1.5 text-sm">{t("verif.review")}</Button>
                  <Button onClick={() => setPending((p) => p.filter((x) => x.name !== q.name))} className="!py-1.5 text-sm">{t("verif.approve")}</Button>
                  <Button variant="danger" onClick={() => setPending((p) => p.filter((x) => x.name !== q.name))} className="!py-1.5 text-sm">{t("verif.reject")}</Button>
                </div>
              </div>
            </Card>
          ))}
          {pending.length === 0 && <Card className="text-center"><div className="py-6" style={{ color: COLORS.textMuted }}>{t("notif.empty")}</div></Card>}
        </div>
      </div>
    );
  }

  const doneCount = steps.filter((s) => s.status === "verified").length;
  const pct = Math.round((doneCount / steps.length) * 100);

  return (
    <div className="space-y-6">
      <SectionTitle title={t("verif.title")} sub={t("verif.subTutor")} />

      <Card>
        <div className="flex items-center justify-between mb-2">
          <span style={{ color: COLORS.text }}>{doneCount}/{steps.length}</span>
          <span style={{ color: COLORS.textMuted }}>{pct}%</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: COLORS.sky }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: COLORS.primary }} />
        </div>
      </Card>

      <div className="space-y-3">
        {steps.map((s) => (
          <Card key={s.id}>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: s.status === "verified" ? COLORS.successBg : COLORS.sky }}>
                {s.status === "verified" ? <Check className="w-5 h-5" style={{ color: COLORS.success }} /> : s.status === "review" ? <Clock className="w-5 h-5" style={{ color: COLORS.warn }} /> : <s.Icon className="w-5 h-5" style={{ color: COLORS.primary }} />}
              </div>
              <div className="flex-1 min-w-0">
                <div style={{ color: COLORS.text }}>{t(s.titleKey)}</div>
                <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{t(s.subKey)}</div>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={s.status} />
                {s.status === "none" && (
                  <Button variant="soft" onClick={() => setSteps((p) => p.map((x) => x.id === s.id ? { ...x, status: "review" } : x))} className="!py-1.5 text-sm">
                    <span className="flex items-center gap-1.5"><Upload className="w-4 h-4" />{t("verif.upload")}</span>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
