import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "student" | "tutor" | "admin";

export type Page =
  | "home"
  | "find"
  | "advanced-search"
  | "ai-reco"
  | "profile"
  | "subjects"
  | "signin"
  | "signup"
  | "apply"
  | "about"
  | "contact"
  | "faq"
  | "blog"
  | "terms"
  | "privacy"
  | "student-dashboard"
  | "tutor-dashboard"
  | "admin-dashboard"
  | "booking"
  | "booking-history"
  | "messages"
  | "saved"
  | "calendar"
  | "checkout"
  | "payment-history"
  | "notifications"
  | "settings"
  | "reviews"
  | "verification";

export const dashboardForRole = (role: Role): Page =>
  role === "tutor"
    ? "tutor-dashboard"
    : role === "admin"
      ? "admin-dashboard"
      : "student-dashboard";

type SessionValue = {
  role: Role | null;
  name: string;
  page: Page;
  saved: string[];
  nav: (p: Page) => void;
  login: (role: Role, name?: string) => void;
  logout: () => void;
  toggleSave: (id: string) => void;
};

const SessionContext = createContext<SessionValue>({
  role: null,
  name: "",
  page: "home",
  saved: [],
  nav: () => {},
  login: () => {},
  logout: () => {},
  toggleSave: () => {},
});

const defaultNames: Record<Role, string> = {
  student: "Alex Morgan",
  tutor: "Sarah Johnson",
  admin: "Admin User",
};

export function SessionProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null);
  const [name, setName] = useState("");
  const [page, setPage] = useState<Page>("home");
  const [saved, setSaved] = useState<string[]>(["Emily Williams"]);

  const nav = (p: Page) => {
    setPage(p);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const login = (r: Role, n?: string) => {
    setRole(r);
    setName(n && n.trim() ? n : defaultNames[r]);
    setPage(dashboardForRole(r));
  };

  const logout = () => {
    setRole(null);
    setName("");
    setPage("home");
  };

  const toggleSave = (id: string) =>
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <SessionContext.Provider
      value={{ role, name, page, saved, nav, login, logout, toggleSave }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
