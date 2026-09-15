import { ReactNode } from "react";
import { useT } from "../i18n";
import { useSession, Page, Role } from "../session";
import {
  LayoutDashboard,
  CalendarDays,
  MessageSquare,
  Heart,
  CreditCard,
  Receipt,
  Bell,
  Settings,
  Star,
  ShieldCheck,
  Search,
  Users,
  BookOpen,
  GraduationCap,
  LogOut,
  Menu,
} from "lucide-react";
import { useState } from "react";

export const COLORS = {
  primary: "#0B6BCB",
  secondary: "#3AA7F2",
  sky: "#EAF6FF",
  text: "#183B56",
  textMuted: "#5A7184",
  border: "#D9E6F2",
  card: "#FFFFFF",
  softGray: "#F7FBFF",
  success: "#1B9C5B",
  successBg: "#E6F7EC",
  warn: "#B7791F",
  warnBg: "#FCF3E3",
  danger: "#E5484D",
  star: "#F5A623",
};

/* ---------- Primitives ---------- */

export function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  full = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "soft" | "danger";
  className?: string;
  type?: "button" | "submit";
  full?: boolean;
}) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: COLORS.primary, color: "#fff" },
    outline: { backgroundColor: COLORS.card, color: COLORS.text, border: `1px solid ${COLORS.border}` },
    ghost: { backgroundColor: "transparent", color: COLORS.text },
    soft: { backgroundColor: COLORS.sky, color: COLORS.primary },
    danger: { backgroundColor: COLORS.danger, color: "#fff" },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2.5 rounded-lg transition-opacity hover:opacity-90 ${full ? "w-full" : ""} ${className}`}
      style={styles[variant]}
    >
      {children}
    </button>
  );
}

export function Card({
  children,
  className = "",
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl ${padded ? "p-5 md:p-6" : ""} ${className}`}
      style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "sky",
}: {
  children: ReactNode;
  tone?: "sky" | "success" | "warn" | "danger" | "muted";
}) {
  const map: Record<string, React.CSSProperties> = {
    sky: { backgroundColor: COLORS.sky, color: COLORS.primary },
    success: { backgroundColor: COLORS.successBg, color: COLORS.success },
    warn: { backgroundColor: COLORS.warnBg, color: COLORS.warn },
    danger: { backgroundColor: "#FDE8E8", color: COLORS.danger },
    muted: { backgroundColor: COLORS.softGray, color: COLORS.textMuted },
  };
  return (
    <span className="px-2.5 py-0.5 rounded-full" style={{ ...map[tone], fontSize: 12 }}>
      {children}
    </span>
  );
}

export function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <label className="block">
      <span style={{ color: COLORS.text }}>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none"
        style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text }}
      />
    </label>
  );
}

export function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div>
      <h1 style={{ color: COLORS.text, fontSize: "1.75rem", fontWeight: 700 }}>{title}</h1>
      {sub && <p className="mt-1" style={{ color: COLORS.textMuted }}>{sub}</p>}
    </div>
  );
}

export function StatCard({
  label,
  value,
  Icon,
  tone = COLORS.primary,
}: {
  label: string;
  value: string;
  Icon: React.ElementType;
  tone?: string;
}) {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: COLORS.sky }}
        >
          <Icon className="w-6 h-6" style={{ color: tone }} />
        </div>
        <div>
          <div style={{ color: COLORS.text, fontSize: "1.5rem", fontWeight: 700 }}>{value}</div>
          <div style={{ color: COLORS.textMuted }}>{label}</div>
        </div>
      </div>
    </Card>
  );
}

export function Avatar({ src, alt, size = 40 }: { src?: string; alt: string; size?: number }) {
  const initials = alt.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return src ? (
    <img
      src={src}
      alt={alt}
      className="rounded-full object-cover flex-shrink-0"
      style={{ width: size, height: size }}
    />
  ) : (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size, backgroundColor: COLORS.primary, color: "#fff", fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}

export function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          style={{
            width: size,
            height: size,
            color: COLORS.star,
            fill: i <= Math.round(value) ? COLORS.star : "transparent",
          }}
        />
      ))}
    </div>
  );
}

export function EmptyState({ title, sub, Icon }: { title: string; sub?: string; Icon: React.ElementType }) {
  return (
    <Card className="text-center">
      <div className="py-8 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: COLORS.sky }}>
          <Icon className="w-7 h-7" style={{ color: COLORS.primary }} />
        </div>
        <div className="mt-4" style={{ color: COLORS.text }}>{title}</div>
        {sub && <div className="mt-1" style={{ color: COLORS.textMuted }}>{sub}</div>}
      </div>
    </Card>
  );
}

/* ---------- Authenticated App Shell (sidebar + topbar) ---------- */

type NavItem = { page: Page; tKey: string; Icon: React.ElementType };

const sidebarByRole: Record<Role, NavItem[]> = {
  student: [
    { page: "student-dashboard", tKey: "side.dashboard", Icon: LayoutDashboard },
    { page: "find", tKey: "side.findTutors", Icon: Search },
    { page: "booking-history", tKey: "side.bookings", Icon: CalendarDays },
    { page: "messages", tKey: "side.messages", Icon: MessageSquare },
    { page: "saved", tKey: "side.saved", Icon: Heart },
    { page: "payment-history", tKey: "side.payments", Icon: Receipt },
    { page: "reviews", tKey: "side.reviews", Icon: Star },
    { page: "notifications", tKey: "side.notifications", Icon: Bell },
    { page: "settings", tKey: "side.settings", Icon: Settings },
  ],
  tutor: [
    { page: "tutor-dashboard", tKey: "side.dashboard", Icon: LayoutDashboard },
    { page: "calendar", tKey: "side.availability", Icon: CalendarDays },
    { page: "booking-history", tKey: "side.bookings", Icon: BookOpen },
    { page: "messages", tKey: "side.messages", Icon: MessageSquare },
    { page: "payment-history", tKey: "side.earnings", Icon: CreditCard },
    { page: "reviews", tKey: "side.reviews", Icon: Star },
    { page: "verification", tKey: "side.verification", Icon: ShieldCheck },
    { page: "notifications", tKey: "side.notifications", Icon: Bell },
    { page: "settings", tKey: "side.settings", Icon: Settings },
  ],
  admin: [
    { page: "admin-dashboard", tKey: "side.overview", Icon: LayoutDashboard },
    { page: "verification", tKey: "side.verifications", Icon: ShieldCheck },
    { page: "find", tKey: "side.tutors", Icon: Users },
    { page: "payment-history", tKey: "side.transactions", Icon: Receipt },
    { page: "reviews", tKey: "side.reviews", Icon: Star },
    { page: "settings", tKey: "side.settings", Icon: Settings },
  ],
};

export function AppShell({ children }: { children: ReactNode }) {
  const { t } = useT();
  const { role, name, page, nav, logout } = useSession();
  const [open, setOpen] = useState(false);
  if (!role) return <>{children}</>;
  const items = sidebarByRole[role];

  const SidebarInner = (
    <div className="flex flex-col h-full">
      <button onClick={() => nav("home")} className="flex items-center gap-2 px-2 mb-6">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.primary }}>
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <span style={{ color: COLORS.text }}>TeachThrough</span>
      </button>
      <nav className="flex-1 space-y-1">
        {items.map((it) => {
          const active = page === it.page;
          return (
            <button
              key={it.page}
              onClick={() => { nav(it.page); setOpen(false); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors"
              style={{
                backgroundColor: active ? COLORS.sky : "transparent",
                color: active ? COLORS.primary : COLORS.textMuted,
              }}
            >
              <it.Icon className="w-5 h-5" />
              <span>{t(it.tKey)}</span>
            </button>
          );
        })}
      </nav>
      <button
        onClick={logout}
        className="flex items-center gap-3 px-3 py-2.5 rounded-lg mt-4"
        style={{ color: COLORS.textMuted }}
      >
        <LogOut className="w-5 h-5" />
        <span>{t("nav.logout")}</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="flex">
        {/* Desktop sidebar */}
        <aside
          className="hidden lg:flex flex-col w-64 p-4 sticky top-0 h-screen"
          style={{ backgroundColor: COLORS.card, borderRight: `1px solid ${COLORS.border}` }}
        >
          {SidebarInner}
        </aside>

        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <aside className="absolute left-0 top-0 h-full w-64 p-4" style={{ backgroundColor: COLORS.card }}>
              {SidebarInner}
            </aside>
          </div>
        )}

        <div className="flex-1 min-w-0">
          {/* Topbar */}
          <header
            className="sticky top-0 z-30 h-16 flex items-center justify-between px-4 md:px-6"
            style={{ backgroundColor: COLORS.card, borderBottom: `1px solid ${COLORS.border}` }}
          >
            <div className="flex items-center gap-3">
              <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="menu">
                <Menu className="w-6 h-6" style={{ color: COLORS.text }} />
              </button>
              <span style={{ color: COLORS.textMuted }}>{t("side.roleLabel." + role)}</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => nav("notifications")} className="relative" aria-label="notifications">
                <Bell className="w-5 h-5" style={{ color: COLORS.textMuted }} />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.danger }} />
              </button>
              <button onClick={() => nav("settings")} className="flex items-center gap-2">
                <Avatar alt={name} size={34} />
                <span className="hidden sm:block" style={{ color: COLORS.text }}>{name}</span>
              </button>
            </div>
          </header>

          <main className="p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
