import { useState } from "react";
import { useT } from "../i18n";
import { useSession } from "../session";
import { Card, Button, Field, Avatar, SectionTitle, COLORS } from "./ui";
import { User, Lock, Bell, CreditCard } from "lucide-react";

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!on)} className="w-11 h-6 rounded-full transition-colors relative flex-shrink-0" style={{ backgroundColor: on ? COLORS.primary : COLORS.border }}>
      <span className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all" style={{ left: on ? 22 : 2 }} />
    </button>
  );
}

function Row({ title, sub, on, set }: { title: string; sub?: string; on: boolean; set: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
      <div>
        <div style={{ color: COLORS.text }}>{title}</div>
        {sub && <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{sub}</div>}
      </div>
      <Toggle on={on} onChange={set} />
    </div>
  );
}

const tabs = [
  { key: "profile", tKey: "set.profile", Icon: User },
  { key: "security", tKey: "set.security", Icon: Lock },
  { key: "notifs", tKey: "set.notifs", Icon: Bell },
  { key: "billing", tKey: "set.billing", Icon: CreditCard },
];

export function AccountSettings() {
  const { t, lang, setLang } = useT();
  const { name, logout } = useSession();
  const [tab, setTab] = useState("profile");
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [twoFa, setTwoFa] = useState(false);

  return (
    <div className="space-y-6">
      <SectionTitle title={t("set.title")} />

      <div className="grid lg:grid-cols-[220px_1fr] gap-6">
        <Card padded={false}>
          <div className="p-2">
            {tabs.map((tb) => {
              const on = tab === tb.key;
              return (
                <button key={tb.key} onClick={() => setTab(tb.key)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg" style={{ backgroundColor: on ? COLORS.sky : "transparent", color: on ? COLORS.primary : COLORS.textMuted }}>
                  <tb.Icon className="w-5 h-5" /> {t(tb.tKey)}
                </button>
              );
            })}
          </div>
        </Card>

        <div className="space-y-6">
          {tab === "profile" && (
            <Card>
              <div className="flex items-center gap-4 mb-6">
                <Avatar alt={name} size={64} />
                <Button variant="outline">{t("reg.clickUpload")}</Button>
              </div>
              <div className="space-y-4">
                <Field label={t("set.displayName")} value={name} onChange={() => {}} />
                <Field label={t("auth.email")} type="email" placeholder="alex@example.com" />
                <label className="block">
                  <span style={{ color: COLORS.text }}>{t("set.bio")}</span>
                  <textarea rows={4} placeholder={t("reg.bioPh")} className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none resize-none" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text }} />
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("set.timezone")} placeholder="GMT+7 Bangkok" />
                  <label className="block">
                    <span style={{ color: COLORS.text }}>{t("set.language")}</span>
                    <select value={lang} onChange={(e) => setLang(e.target.value as "en" | "th")} className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text }}>
                      <option value="en">English</option>
                      <option value="th">ไทย</option>
                    </select>
                  </label>
                </div>
                <Button>{t("common.saveChanges")}</Button>
              </div>
            </Card>
          )}

          {tab === "security" && (
            <>
              <Card>
                <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("set.changePw")}</h2>
                <div className="space-y-4">
                  <Field label={t("set.currentPw")} type="password" placeholder="••••••••" />
                  <Field label={t("set.newPw")} type="password" placeholder="••••••••" />
                  <Button>{t("common.saveChanges")}</Button>
                </div>
              </Card>
              <Card>
                <Row title={t("set.twoFa")} sub={t("set.twoFaSub")} on={twoFa} set={setTwoFa} />
              </Card>
            </>
          )}

          {tab === "notifs" && (
            <Card>
              <Row title={t("set.emailNotifs")} on={email} set={setEmail} />
              <Row title={t("set.pushNotifs")} on={push} set={setPush} />
              <Row title={t("set.marketing")} on={marketing} set={setMarketing} />
              <div className="mt-4"><Button>{t("common.saveChanges")}</Button></div>
            </Card>
          )}

          {tab === "billing" && (
            <Card>
              <h2 className="mb-4" style={{ color: COLORS.text, fontWeight: 700 }}>{t("set.billing")}</h2>
              <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: COLORS.softGray }}>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6" style={{ color: COLORS.primary }} />
                  <div>
                    <div style={{ color: COLORS.text }}>Visa •••• 4242</div>
                    <div style={{ color: COLORS.textMuted, fontSize: 13 }}>Expires 08/28</div>
                  </div>
                </div>
                <Button variant="outline">{t("common.view")}</Button>
              </div>
            </Card>
          )}

          <Card>
            <h2 style={{ color: COLORS.danger, fontWeight: 700 }}>{t("set.dangerZone")}</h2>
            <div className="mt-3 flex items-center justify-between gap-4 flex-wrap">
              <span style={{ color: COLORS.textMuted }}>{t("set.deleteAccount")}</span>
              <Button variant="danger" onClick={logout}>{t("set.deleteAccount")}</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
