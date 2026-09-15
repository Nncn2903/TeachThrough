import { useT } from "../i18n";
import { Badge, COLORS } from "./ui";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

type Post = { id: number; title: string; excerpt: string; category: string; read: number; date: string; img: string };

const posts: Post[] = [
  { id: 1, title: "10 Study Techniques That Actually Work", excerpt: "Backed by cognitive science, these methods help you retain more in less time.", category: "Learning", read: 6, date: "Jun 30, 2026", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" },
  { id: 2, title: "How to Choose the Perfect Tutor", excerpt: "A practical checklist for finding a tutor who matches your goals and learning style.", category: "Guides", read: 4, date: "Jun 25, 2026", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" },
  { id: 3, title: "From Student to Top-Rated Tutor", excerpt: "Meet Sarah, who turned her passion for math into a thriving teaching career.", category: "Tutor Stories", read: 5, date: "Jun 18, 2026", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" },
  { id: 4, title: "The Future of Online Learning in 2026", excerpt: "AI matching, immersive tools, and what it means for students and educators.", category: "News", read: 7, date: "Jun 10, 2026", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
  { id: 5, title: "Mastering Exam Anxiety", excerpt: "Simple, proven strategies to stay calm and perform your best on test day.", category: "Wellbeing", read: 5, date: "Jun 3, 2026", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" },
];

export function Blog() {
  const { t } = useT();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}>{t("blog.title")}</h1>
          <p className="mt-2" style={{ color: COLORS.textMuted }}>{t("blog.sub")}</p>
        </div>

        {/* Featured */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 rounded-2xl overflow-hidden" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
          <ImageWithFallback src={featured.img} alt={featured.title} className="w-full h-64 md:h-full object-cover" />
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Badge tone="sky">{t("blog.featured")}</Badge>
              <span style={{ color: COLORS.textMuted, fontSize: 13 }}>{featured.date} · {featured.read} {t("blog.minRead")}</span>
            </div>
            <h2 style={{ color: COLORS.text, fontSize: "1.5rem", fontWeight: 700 }}>{featured.title}</h2>
            <p className="mt-2" style={{ color: COLORS.textMuted }}>{featured.excerpt}</p>
            <button className="mt-4 flex items-center gap-1 self-start" style={{ color: COLORS.primary }}>
              {t("blog.readMore")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <h2 className="mt-10 mb-4" style={{ color: COLORS.text, fontSize: "1.25rem", fontWeight: 700 }}>{t("blog.allPosts")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <article key={p.id} className="rounded-2xl overflow-hidden flex flex-col transition-shadow hover:shadow-md" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
              <ImageWithFallback src={p.img} alt={p.title} className="w-full h-44 object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge tone="muted">{p.category}</Badge>
                  <span style={{ color: COLORS.textMuted, fontSize: 12 }}>{p.read} {t("blog.minRead")}</span>
                </div>
                <h3 style={{ color: COLORS.text }}>{p.title}</h3>
                <p className="mt-1 flex-1" style={{ color: COLORS.textMuted, fontSize: 14 }}>{p.excerpt}</p>
                <button className="mt-3 flex items-center gap-1 self-start" style={{ color: COLORS.primary, fontSize: 14 }}>
                  {t("blog.readMore")} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
