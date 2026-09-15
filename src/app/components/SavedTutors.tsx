import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, Button, Avatar, Badge, SectionTitle, EmptyState, COLORS } from "./ui";
import { Heart, Star, HeartOff } from "lucide-react";

type SavedTutor = {
  id: string;
  name: string;
  subject: string;
  rating: number;
  reviews: number;
  price: number;
  img: string;
};

const catalog: SavedTutor[] = [
  { id: "Emily Williams", name: "Emily Williams", subject: "English · Literature", rating: 5.0, reviews: 156, price: 20, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
  { id: "Sarah Johnson", name: "Sarah Johnson", subject: "Math · Calculus", rating: 4.9, reviews: 128, price: 25, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
  { id: "Michael Chen", name: "Michael Chen", subject: "Programming · Python", rating: 4.8, reviews: 92, price: 30, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  { id: "David Brown", name: "David Brown", subject: "Science · Chemistry", rating: 4.7, reviews: 74, price: 35, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
];

export function SavedTutors() {
  const { t } = useT();
  const { saved, toggleSave, nav } = useSession();
  const list = catalog.filter((c) => saved.includes(c.id));

  return (
    <div className="space-y-6">
      <SectionTitle title={t("saved.title")} sub={t("saved.sub")} />

      {list.length === 0 ? (
        <EmptyState Icon={HeartOff} title={t("saved.empty")} sub={t("saved.emptySub")} />
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {list.map((s) => (
            <Card key={s.id}>
              <div className="flex gap-4">
                <Avatar src={s.img} alt={s.name} size={64} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div style={{ color: COLORS.text }}>{s.name}</div>
                      <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{s.subject}</div>
                    </div>
                    <button onClick={() => toggleSave(s.id)} aria-label="unsave">
                      <Heart className="w-5 h-5" style={{ color: COLORS.danger, fill: COLORS.danger }} />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 mt-1" style={{ color: COLORS.textMuted, fontSize: 13 }}>
                    <Star className="w-3.5 h-3.5" style={{ color: COLORS.star, fill: COLORS.star }} /> {s.rating} ({s.reviews})
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span><span style={{ color: COLORS.primary, fontWeight: 700 }}>${s.price}</span><span style={{ color: COLORS.textMuted }}>{t("common.hour")}</span></span>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => nav("profile")} className="!py-1.5 text-sm">{t("find.viewProfile")}</Button>
                      <Button onClick={() => nav("booking")} className="!py-1.5 text-sm">{t("saved.book")}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
