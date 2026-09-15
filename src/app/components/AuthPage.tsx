import { useState } from "react";
import { GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
import { useT } from "../i18n";
import { useSession, Role } from "../session";

const COLORS = {
  primary: "#0B6BCB",
  secondary: "#3AA7F2",
  sky: "#EAF6FF",
  text: "#183B56",
  textMuted: "#5A7184",
  border: "#D9E6F2",
  card: "#FFFFFF",
  softGray: "#F7FBFF",
};

type Mode = "signin" | "signup" | "forgot";

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
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
        className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none transition-colors"
        style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text }}
      />
    </label>
  );
}

function Shell({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{ background: `linear-gradient(180deg, ${COLORS.sky} 0%, ${COLORS.card} 100%)` }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-sm"
        style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}
      >
        <div className="flex items-center justify-center gap-2 mb-6" style={{ color: COLORS.textMuted, letterSpacing: "0.1em" }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.primary }}>
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span style={{ fontSize: 12 }}>ACCOUNT</span>
          <span style={{ fontSize: 12 }}>→</span>
          <span style={{ fontSize: 12 }}>{eyebrow}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function RoleOption({
  active,
  onClick,
  Icon,
  title,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  Icon: React.ElementType;
  title: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 p-3 rounded-xl text-left transition-colors"
      style={{
        backgroundColor: active ? COLORS.sky : COLORS.card,
        border: `1.5px solid ${active ? COLORS.primary : COLORS.border}`,
      }}
    >
      <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: active ? COLORS.primary : COLORS.sky }}>
        <Icon className="w-5 h-5" style={{ color: active ? "#fff" : COLORS.primary }} />
      </div>
      <div style={{ color: COLORS.text }}>{title}</div>
      <div style={{ color: COLORS.textMuted, fontSize: 12 }}>{sub}</div>
    </button>
  );
}

export function AuthPage({ initialMode = "signin" }: { initialMode?: Mode }) {
  const { t } = useT();
  const { login } = useSession();
  const [mode, setMode] = useState<Mode>(initialMode);
  const [role, setRole] = useState<Role>("student");
  const [name, setName] = useState("");

  if (mode === "signin") {
    return (
      <Shell eyebrow="SIGN IN">
        <div className="text-center">
          <h1 style={{ color: COLORS.text, fontSize: "1.5rem", fontWeight: 700 }}>{t("auth.welcome")}</h1>
          <p style={{ color: COLORS.textMuted }} className="mt-1">{t("auth.welcomeSub")}</p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); login(role); }}>
          <Field label={t("auth.email")} type="email" placeholder={t("auth.emailPh")} />
          <div>
            <div className="flex items-center justify-between">
              <span style={{ color: COLORS.text }}>{t("auth.password")}</span>
              <button type="button" onClick={() => setMode("forgot")} style={{ color: COLORS.primary, fontSize: 13 }} className="hover:opacity-80">
                {t("auth.forgot")}
              </button>
            </div>
            <input
              type="password"
              placeholder={t("auth.passwordPh")}
              className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none"
              style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text }}
            />
          </div>

          <button type="submit" className="w-full py-2.5 rounded-lg text-white transition-opacity hover:opacity-90" style={{ backgroundColor: COLORS.primary }}>
            {t("auth.signIn")}
          </button>
        </form>

        {/* Demo role quick-access */}
        <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${COLORS.border}` }}>
          <p className="text-center mb-3" style={{ color: COLORS.textMuted, fontSize: 13 }}>{t("auth.demoNote")}</p>
          <div className="grid grid-cols-1 gap-2">
            <button onClick={() => login("student")} className="py-2 rounded-lg" style={{ backgroundColor: COLORS.sky, color: COLORS.primary }}>{t("auth.quickStudent")}</button>
            <button onClick={() => login("tutor")} className="py-2 rounded-lg" style={{ backgroundColor: COLORS.sky, color: COLORS.primary }}>{t("auth.quickTutor")}</button>
            <button onClick={() => login("admin")} className="py-2 rounded-lg" style={{ backgroundColor: COLORS.softGray, color: COLORS.textMuted, border: `1px solid ${COLORS.border}` }}>{t("auth.quickAdmin")}</button>
          </div>
        </div>

        <p className="mt-5 text-center" style={{ color: COLORS.textMuted }}>
          {t("auth.noAccount")}{" "}
          <button onClick={() => setMode("signup")} style={{ color: COLORS.primary }} className="hover:opacity-80">{t("nav.signup")}</button>
        </p>
      </Shell>
    );
  }

  if (mode === "signup") {
    return (
      <Shell eyebrow="SIGN UP">
        <div className="text-center">
          <h1 style={{ color: COLORS.text, fontSize: "1.5rem", fontWeight: 700 }}>{t("auth.createAccount")}</h1>
          <p style={{ color: COLORS.textMuted }} className="mt-1">{t("auth.joinSub")}</p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); login(role, name); }}>
          <div>
            <span style={{ color: COLORS.text }}>{t("auth.roleQuestion")}</span>
            <div className="mt-2 flex gap-3">
              <RoleOption active={role === "student"} onClick={() => setRole("student")} Icon={BookOpen} title={t("auth.roleStudent")} sub={t("auth.roleStudentSub")} />
              <RoleOption active={role === "tutor"} onClick={() => setRole("tutor")} Icon={ShieldCheck} title={t("auth.roleTutor")} sub={t("auth.roleTutorSub")} />
            </div>
          </div>

          <Field label={t("auth.fullName")} placeholder={t("auth.fullNamePh")} value={name} onChange={setName} />
          <Field label={t("auth.email")} type="email" placeholder={t("auth.emailPh")} />
          <Field label={t("auth.password")} type="password" placeholder={t("auth.createPw")} />

          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="accent-[#0B6BCB] mt-1" />
            <span style={{ color: COLORS.textMuted }}>
              {t("auth.agree")}{" "}
              <a href="#" style={{ color: COLORS.primary }}>{t("auth.tos")}</a>{" "}
              {t("auth.and")}{" "}
              <a href="#" style={{ color: COLORS.primary }}>{t("auth.privacy")}</a>
            </span>
          </label>

          <button type="submit" className="w-full py-2.5 rounded-lg text-white transition-opacity hover:opacity-90" style={{ backgroundColor: COLORS.primary }}>
            {t("nav.signup")}
          </button>
        </form>

        <p className="mt-5 text-center" style={{ color: COLORS.textMuted }}>
          {t("auth.haveAccount")}{" "}
          <button onClick={() => setMode("signin")} style={{ color: COLORS.primary }} className="hover:opacity-80">{t("auth.signIn")}</button>
        </p>
      </Shell>
    );
  }

  return (
    <Shell eyebrow="FORGOT PASSWORD">
      <div className="text-center">
        <h1 style={{ color: COLORS.text, fontSize: "1.5rem", fontWeight: 700 }}>{t("auth.reset")}</h1>
        <p style={{ color: COLORS.textMuted }} className="mt-1">{t("auth.resetSub")}</p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setMode("signin"); }}>
        <Field label={t("auth.email")} type="email" placeholder={t("auth.emailPh")} />
        <button type="submit" className="w-full py-2.5 rounded-lg text-white transition-opacity hover:opacity-90" style={{ backgroundColor: COLORS.primary }}>
          {t("auth.sendReset")}
        </button>
      </form>

      <p className="mt-5 text-center">
        <button onClick={() => setMode("signin")} style={{ color: COLORS.primary }} className="hover:opacity-80">{t("auth.backToSignIn")}</button>
      </p>
    </Shell>
  );
}
