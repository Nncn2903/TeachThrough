import { useState, useRef, useEffect } from "react";
import { useT } from "../i18n";
import { Avatar, COLORS } from "./ui";
import { Send, Search, ArrowLeft, MessageSquare } from "lucide-react";

type Msg = { id: number; me: boolean; text: string; time: string };
type Convo = {
  id: string;
  name: string;
  img?: string;
  online: boolean;
  preview: string;
  unread: number;
  messages: Msg[];
};

const initialConvos: Convo[] = [
  {
    id: "c1", name: "Sarah Johnson", online: true, unread: 2,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    preview: "Great! See you at 4pm 👍",
    messages: [
      { id: 1, me: false, text: "Hi! Looking forward to our calculus session.", time: "3:10 PM" },
      { id: 2, me: true, text: "Me too! Should I prepare anything?", time: "3:12 PM" },
      { id: 3, me: false, text: "Just review chapter 4 derivatives.", time: "3:13 PM" },
      { id: 4, me: false, text: "Great! See you at 4pm 👍", time: "3:14 PM" },
    ],
  },
  {
    id: "c2", name: "Michael Chen", online: false, unread: 0,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    preview: "The homework looks good.",
    messages: [
      { id: 1, me: false, text: "The homework looks good.", time: "Yesterday" },
      { id: 2, me: true, text: "Thanks for the feedback!", time: "Yesterday" },
    ],
  },
  {
    id: "c3", name: "Emily Williams", online: true, unread: 0,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    preview: "Let's practice speaking next time.",
    messages: [{ id: 1, me: false, text: "Let's practice speaking next time.", time: "Mon" }],
  },
];

export function Messaging() {
  const { t } = useT();
  const [convos, setConvos] = useState(initialConvos);
  const [activeId, setActiveId] = useState<string | null>("c1");
  const [draft, setDraft] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");
  const endRef = useRef<HTMLDivElement>(null);

  const active = convos.find((c) => c.id === activeId) || null;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [active?.messages.length, activeId]);

  const send = () => {
    if (!draft.trim() || !active) return;
    const text = draft;
    setDraft("");
    setConvos((prev) =>
      prev.map((c) =>
        c.id === active.id
          ? { ...c, preview: text, messages: [...c.messages, { id: c.messages.length + 1, me: true, text, time: t("msg.today") }] }
          : c
      )
    );
    // Simulated reply
    setTimeout(() => {
      setConvos((prev) =>
        prev.map((c) =>
          c.id === active.id
            ? { ...c, messages: [...c.messages, { id: c.messages.length + 1, me: false, text: "👍", time: t("msg.today") }] }
            : c
        )
      );
    }, 1200);
  };

  return (
    <div>
      <h1 className="mb-4" style={{ color: COLORS.text, fontSize: "1.75rem", fontWeight: 700 }}>{t("msg.title")}</h1>
      <div className="rounded-2xl overflow-hidden grid md:grid-cols-[320px_1fr] h-[70vh]" style={{ border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.card }}>
        {/* Conversation list */}
        <div className={`flex-col border-r ${mobileView === "chat" ? "hidden md:flex" : "flex"}`} style={{ borderColor: COLORS.border }}>
          <div className="p-3" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: COLORS.softGray }}>
              <Search className="w-4 h-4" style={{ color: COLORS.textMuted }} />
              <input placeholder={t("msg.searchPh")} className="bg-transparent outline-none flex-1" style={{ color: COLORS.text }} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {convos.map((c) => {
              const on = c.id === activeId;
              return (
                <button key={c.id} onClick={() => { setActiveId(c.id); setMobileView("chat"); setConvos((p) => p.map((x) => x.id === c.id ? { ...x, unread: 0 } : x)); }} className="w-full flex items-center gap-3 p-3 text-left" style={{ backgroundColor: on ? COLORS.sky : "transparent", borderBottom: `1px solid ${COLORS.border}` }}>
                  <div className="relative">
                    <Avatar src={c.img} alt={c.name} size={44} />
                    {c.online && <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white" style={{ backgroundColor: COLORS.success }} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ color: COLORS.text }}>{c.name}</div>
                    <div className="truncate" style={{ color: COLORS.textMuted, fontSize: 13 }}>{c.preview}</div>
                  </div>
                  {c.unread > 0 && <span className="w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: COLORS.primary, fontSize: 11 }}>{c.unread}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat */}
        <div className={`flex-col ${mobileView === "list" ? "hidden md:flex" : "flex"}`}>
          {active ? (
            <>
              <div className="flex items-center gap-3 p-3" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                <button className="md:hidden" onClick={() => setMobileView("list")}><ArrowLeft className="w-5 h-5" style={{ color: COLORS.text }} /></button>
                <Avatar src={active.img} alt={active.name} size={40} />
                <div>
                  <div style={{ color: COLORS.text }}>{active.name}</div>
                  {active.online && <div style={{ color: COLORS.success, fontSize: 12 }}>{t("msg.online")}</div>}
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: COLORS.softGray }}>
                {active.messages.map((m) => (
                  <div key={m.id} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
                    <div className="max-w-[75%] px-3.5 py-2 rounded-2xl" style={{ backgroundColor: m.me ? COLORS.primary : COLORS.card, color: m.me ? "#fff" : COLORS.text, border: m.me ? "none" : `1px solid ${COLORS.border}` }}>
                      <div>{m.text}</div>
                      <div style={{ fontSize: 11, opacity: 0.7, textAlign: "right" }}>{m.time}</div>
                    </div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>
              <div className="p-3 flex items-center gap-2" style={{ borderTop: `1px solid ${COLORS.border}` }}>
                <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder={t("msg.typePh")} className="flex-1 px-3.5 py-2.5 rounded-lg outline-none" style={{ backgroundColor: COLORS.softGray, color: COLORS.text }} />
                <button onClick={send} className="w-11 h-11 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: COLORS.primary }}>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center" style={{ color: COLORS.textMuted }}>
              <MessageSquare className="w-10 h-10 mb-2" />
              {t("msg.selectConvo")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
