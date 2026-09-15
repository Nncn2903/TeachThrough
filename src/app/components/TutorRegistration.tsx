import { useState } from "react";
import { User, Upload, X, Check, ShieldCheck, BookOpen, GraduationCap } from "lucide-react";
import { useT } from "../i18n";

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

const stepKeys = ["reg.step1", "reg.step2", "reg.step3", "reg.step4", "reg.step5"];

function Label({ children }: { children: React.ReactNode }) {
  return <span style={{ color: COLORS.text }}>{children}</span>;
}

function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.text,
      }}
    />
  );
}

function TextArea({ placeholder, rows = 4 }: { placeholder: string; rows?: number }) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none resize-none"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.text,
      }}
    />
  );
}

function Select({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  return (
    <select
      defaultValue=""
      className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg outline-none"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.text,
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

function UploadBox({ hint }: { hint: string }) {
  const { t } = useT();
  return (
    <div
      className="mt-1.5 p-6 rounded-lg flex items-center gap-4 cursor-pointer transition-colors"
      style={{
        backgroundColor: COLORS.softGray,
        border: `1.5px dashed ${COLORS.border}`,
      }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: COLORS.sky }}
      >
        <Upload className="w-5 h-5" style={{ color: COLORS.primary }} />
      </div>
      <div>
        <div style={{ color: COLORS.primary }}>{t("reg.clickUpload")}</div>
        <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{hint}</div>
      </div>
    </div>
  );
}

const subjectOptions = [
  "Math",
  "Science",
  "English",
  "Programming",
  "Business",
  "Design",
  "Music",
  "Languages",
];

const subjectLabelKey: Record<string, string> = {
  Math: "subj.math",
  Science: "subj.science",
  English: "subj.english",
  Programming: "subj.programming",
  Business: "subj.business",
  Design: "subj.design",
  Music: "subj.music",
  Languages: "subj.languages",
};

const weekDays = [
  { key: "mon", tKey: "reg.day.mon" },
  { key: "tue", tKey: "reg.day.tue" },
  { key: "wed", tKey: "reg.day.wed" },
  { key: "thu", tKey: "reg.day.thu" },
  { key: "fri", tKey: "reg.day.fri" },
  { key: "sat", tKey: "reg.day.sat" },
  { key: "sun", tKey: "reg.day.sun" },
];

const timeSlots = [
  { key: "morning", tKey: "reg.slot.morning", time: "8:00 – 12:00" },
  { key: "afternoon", tKey: "reg.slot.afternoon", time: "12:00 – 17:00" },
  { key: "evening", tKey: "reg.slot.evening", time: "17:00 – 21:00" },
];

export function TutorRegistration({ onClose }: { onClose: () => void }) {
  const { t } = useT();
  const steps = stepKeys.map((k, i) => ({ id: i + 1, title: t(k), sub: "" }));
  const [step, setStep] = useState(1);
  const [chosen, setChosen] = useState<string[]>(["Math", "Physics"]);
  const [availability, setAvailability] = useState<Record<string, string[]>>({});

  const toggleSubject = (s: string) =>
    setChosen((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const toggleSlot = (day: string, slot: string) =>
    setAvailability((prev) => {
      const current = prev[day] ?? [];
      const updated = current.includes(slot)
        ? current.filter((s) => s !== slot)
        : [...current, slot];
      return { ...prev, [day]: updated };
    });

  const slotCount = Object.values(availability).reduce(
    (sum, slots) => sum + slots.length,
    0,
  );

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.softGray }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 style={{ color: COLORS.text, fontSize: "2rem", fontWeight: 700 }}>
          {t("reg.title")}
        </h1>
        <p style={{ color: COLORS.textMuted }} className="mt-1">
          {t("reg.sub")}
        </p>

        {/* Horizontal Stepper */}
        <div className="mt-8">
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: COLORS.card,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <div className="flex items-center justify-between">
              {steps.map((s, idx) => {
                const active = s.id === step;
                const done = s.id < step;
                return (
                  <div key={s.id} className="flex items-center flex-1">
                    <button
                      onClick={() => setStep(s.id)}
                      className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor:
                            active || done ? COLORS.primary : COLORS.softGray,
                          color: active || done ? "#fff" : COLORS.textMuted,
                          border: `2px solid ${
                            active || done ? COLORS.primary : COLORS.border
                          }`,
                        }}
                      >
                        {done ? <Check className="w-5 h-5" /> : s.id}
                      </div>
                      <div className="text-center">
                        <div
                          style={{
                            color: active ? COLORS.primary : COLORS.text,
                            fontSize: 14,
                            fontWeight: active ? 600 : 400,
                          }}
                        >
                          {s.title}
                        </div>
                      </div>
                    </button>
                    {idx < steps.length - 1 && (
                      <div
                        className="flex-1 h-0.5 mx-3"
                        style={{
                          backgroundColor: done ? COLORS.primary : COLORS.border,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6">
          <section>
            <div
              className="p-6 md:p-8 rounded-2xl"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <h2 style={{ color: COLORS.text, fontSize: "1.25rem", fontWeight: 700 }}>
                {steps[step - 1].title}
              </h2>

              {step === 1 && (
                <div className="mt-6 space-y-4">
                  <div>
                    <Label>{t("reg.fullName")}</Label>
                    <Input placeholder={t("reg.fullNamePh")} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>{t("reg.email")}</Label>
                      <Input type="email" placeholder={t("reg.emailPh")} />
                    </div>
                    <div>
                      <Label>{t("reg.phone")}</Label>
                      <Input placeholder={t("reg.phonePh")} />
                    </div>
                  </div>
                  <div>
                    <Label>{t("reg.country")}</Label>
                    <Select
                      placeholder={t("reg.countryPh")}
                      options={[
                        t("reg.country.us"),
                        t("reg.country.th"),
                        t("reg.country.uk"),
                        t("reg.country.sg"),
                        t("reg.country.jp"),
                      ]}
                    />
                  </div>
                  <div>
                    <Label>{t("reg.profilePic")}</Label>
                    <div
                      className="mt-1.5 p-5 rounded-lg flex items-center gap-4 cursor-pointer"
                      style={{
                        backgroundColor: COLORS.softGray,
                        border: `1.5px dashed ${COLORS.border}`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: COLORS.card }}
                      >
                        <User className="w-5 h-5" style={{ color: COLORS.textMuted }} />
                      </div>
                      <div>
                        <div style={{ color: COLORS.primary }}>{t("reg.clickUpload")}</div>
                        <div style={{ color: COLORS.textMuted, fontSize: 13 }}>
                          {t("reg.profileHint")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="mt-6 space-y-4">
                  <div>
                    <Label>{t("reg.highestDegree")}</Label>
                    <Select
                      placeholder={t("reg.highestDegreePh")}
                      options={[
                        t("reg.degree.highschool"),
                        t("reg.degree.bachelor"),
                        t("reg.degree.master"),
                        t("reg.degree.phd"),
                      ]}
                    />
                  </div>
                  <div>
                    <Label>{t("reg.university")}</Label>
                    <Input placeholder={t("reg.universityPh")} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>{t("reg.field")}</Label>
                      <Input placeholder={t("reg.fieldPh")} />
                    </div>
                    <div>
                      <Label>{t("reg.yearsExp")}</Label>
                      <Select
                        placeholder={t("reg.selectRange")}
                        options={["0-1", "1-3", "3-5", "5-10", "10+"]}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>{t("reg.bio")}</Label>
                    <TextArea placeholder={t("reg.bioPh")} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="mt-6 space-y-4">
                  <div>
                    <Label>{t("reg.subjectsTeach")}</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {subjectOptions.map((s) => {
                        const on = chosen.includes(s);
                        return (
                          <button
                            key={s}
                            onClick={() => toggleSubject(s)}
                            className="px-3 py-1.5 rounded-lg transition-colors"
                            style={{
                              backgroundColor: on ? COLORS.primary : COLORS.sky,
                              color: on ? "#fff" : COLORS.primary,
                              border: `1px solid ${on ? COLORS.primary : COLORS.border}`,
                            }}
                          >
                            {t(subjectLabelKey[s])}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>{t("reg.hourlyRate")}</Label>
                      <Input type="number" placeholder={t("reg.hourlyRatePh")} />
                    </div>
                    <div>
                      <Label>{t("reg.teachingLevel")}</Label>
                      <Select
                        placeholder={t("reg.selectLevel")}
                        options={[
                          t("reg.level.elementary"),
                          t("reg.level.middle"),
                          t("reg.level.high"),
                          t("reg.level.university"),
                          t("reg.level.adult"),
                        ]}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>{t("reg.teachingApproach")}</Label>
                    <TextArea placeholder={t("reg.teachingApproachPh")} />
                  </div>

                  <div>
                    <Label>{t("reg.availability")}</Label>
                    <p style={{ color: COLORS.textMuted, fontSize: 13 }} className="mt-1">
                      {t("reg.availabilityHint")}
                    </p>
                    <div className="mt-3 space-y-2">
                      {weekDays.map((d) => {
                        const daySlots = availability[d.key] ?? [];
                        return (
                          <div
                            key={d.key}
                            className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg"
                            style={{
                              backgroundColor: COLORS.softGray,
                              border: `1px solid ${COLORS.border}`,
                            }}
                          >
                            <div
                              className="sm:w-32 flex-shrink-0"
                              style={{ color: COLORS.text }}
                            >
                              {t(d.tKey)}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {timeSlots.map((slot) => {
                                const on = daySlots.includes(slot.key);
                                return (
                                  <button
                                    key={slot.key}
                                    type="button"
                                    onClick={() => toggleSlot(d.key, slot.key)}
                                    className="px-3 py-1.5 rounded-lg transition-colors text-left"
                                    style={{
                                      backgroundColor: on ? COLORS.primary : COLORS.card,
                                      color: on ? "#fff" : COLORS.text,
                                      border: `1px solid ${on ? COLORS.primary : COLORS.border}`,
                                    }}
                                  >
                                    <span>{t(slot.tKey)}</span>
                                    <span
                                      style={{
                                        color: on ? "rgba(255,255,255,0.85)" : COLORS.textMuted,
                                        fontSize: 12,
                                      }}
                                      className="ml-2"
                                    >
                                      {slot.time}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ color: COLORS.textMuted, fontSize: 13 }} className="mt-2">
                      {slotCount === 0
                        ? t("reg.availabilityNone")
                        : `${slotCount} ${t("reg.availabilitySelected")}`}
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="mt-6 space-y-5">
                  <div>
                    <Label>{t("reg.govId")}</Label>
                    <UploadBox hint={t("reg.govIdHint")} />
                  </div>
                  <div>
                    <Label>{t("reg.degreeCert")}</Label>
                    <UploadBox hint={t("reg.degreeCertHint")} />
                  </div>
                  <div>
                    <Label>{t("reg.teachingCert")}</Label>
                    <UploadBox hint={t("reg.teachingCertHint")} />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="mt-6">
                  <div
                    className="p-5 rounded-xl flex items-start gap-3"
                    style={{ backgroundColor: COLORS.sky }}
                  >
                    <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: COLORS.primary }} />
                    <div>
                      <div style={{ color: COLORS.text }}>
                        {t("reg.reviewTitle")}
                      </div>
                      <p style={{ color: COLORS.textMuted }} className="mt-1">
                        {t("reg.reviewText")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: COLORS.sky }}
                      >
                        <User className="w-4 h-4" style={{ color: COLORS.primary }} />
                      </div>
                      <div>
                        <div style={{ color: COLORS.text }}>{t("reg.step1")}</div>
                        <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{t("reg.completed")}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: COLORS.sky }}
                      >
                        <GraduationCap className="w-4 h-4" style={{ color: COLORS.primary }} />
                      </div>
                      <div>
                        <div style={{ color: COLORS.text }}>{t("reg.step2")}</div>
                        <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{t("reg.completed")}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: COLORS.sky }}
                      >
                        <BookOpen className="w-4 h-4" style={{ color: COLORS.primary }} />
                      </div>
                      <div>
                        <div style={{ color: COLORS.text }}>{t("reg.step3")}</div>
                        <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{t("reg.completed")}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: COLORS.sky }}
                      >
                        <Upload className="w-4 h-4" style={{ color: COLORS.primary }} />
                      </div>
                      <div>
                        <div style={{ color: COLORS.text }}>{t("reg.step4")}</div>
                        <div style={{ color: COLORS.textMuted, fontSize: 13 }}>{t("reg.completed")}</div>
                      </div>
                    </div>
                  </div>

                  <label className="mt-6 flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[#0B6BCB] mt-1" />
                    <span style={{ color: COLORS.textMuted }}>
                      {t("reg.confirmTerms")}
                    </span>
                  </label>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    onClick={back}
                    className="px-4 py-2.5 rounded-lg transition-colors"
                    style={{
                      backgroundColor: COLORS.card,
                      color: COLORS.text,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    {t("reg.back")}
                  </button>
                ) : (
                  <button
                    onClick={onClose}
                    className="flex items-center gap-1 transition-opacity hover:opacity-80"
                    style={{ color: COLORS.textMuted }}
                  >
                    <X className="w-4 h-4" /> {t("reg.cancel")}
                  </button>
                )}

                {step < 5 ? (
                  <button
                    onClick={next}
                    className="px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {t("reg.saveContinue")}
                  </button>
                ) : (
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {t("reg.submit")}
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
