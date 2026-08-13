"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useMounted } from "@/hooks/use-mounted";

export type AppTheme = "light" | "dark";

export interface AppContextValue {
  /** Active theme label used across the app UI. */
  currentTheme: AppTheme;
  /** Toggle between light and dark themes. */
  toggleTheme: () => void;
  /** Explicitly set the active theme. */
  setAppTheme: (theme: AppTheme) => void;
  /** Whether the site header should render. */
  isHeaderVisible: boolean;
  /**
   * Kept for API compatibility. Env flags own header visibility —
   * client calls cannot force the header on while under development/maintenance.
   */
  setIsHeaderVisible: (visible: boolean) => void;
  /** Site-wide under-development mode (`UNDER_DEVELOPMENT` env). */
  isUnderDevelopment: boolean;
  /** No-op: mode is server/env driven and cannot be overridden from the client. */
  setIsUnderDevelopment: (value: boolean) => void;
  /** Site-wide maintenance mode (`UNDER_MAINTENANCE` env). */
  isUnderMaintenance: boolean;
  /** No-op: mode is server/env driven and cannot be overridden from the client. */
  setIsUnderMaintenance: (value: boolean) => void;
  /** Support inbox used by under-development / contact CTAs. */
  supportEmail: string;
  /** From `ENABLE_CONTACT_FORM` env (server → client). */
  contactFormEnabled: boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

type AppProviderProps = {
  children: ReactNode;
  /** From `UNDER_DEVELOPMENT` env (server → client). */
  underDevelopment?: boolean;
  /** From `UNDER_MAINTENANCE` env (server → client). */
  underMaintenance?: boolean;
  /** From `SUPPORT_EMAIL_ADDRESS` env (server → client). */
  supportEmail?: string;
  /** From `ENABLE_CONTACT_FORM` env (server → client). */
  contactFormEnabled?: boolean;
};

/**
 * Inner provider must sit under NextThemeProvider so `useTheme()` works.
 * Owns app-level UI state: theme, site mode flags, and header visibility.
 */
const AppContextController = ({
  children,
  underDevelopment = false,
  underMaintenance = false,
  supportEmail = "support@serateksys.com",
  contactFormEnabled = false,
}: AppProviderProps) => {
  const isMounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<AppTheme>("light");

  // Env-driven flags — never mutable from client code (prevents bypassing under-dev gate).
  const isUnderDevelopment = underDevelopment;
  const isUnderMaintenance = underMaintenance;
  const isHeaderVisible = !isUnderDevelopment && !isUnderMaintenance;
  const resolvedSupportEmail = supportEmail.trim() || "support@serateksys.com";
  const isContactFormEnabled = contactFormEnabled;

  // Under development → follow OS/system theme. Otherwise → force light (legacy default).
  useEffect(() => {
    if (!isMounted) return;

    if (isUnderDevelopment) {
      setTheme("system");
      return;
    }

    setTheme("light");
    setCurrentTheme("light");
  }, [isUnderDevelopment, isMounted, setTheme]);

  // Keep app context theme in sync with the resolved system theme while under development.
  useEffect(() => {
    if (!isMounted || !isUnderDevelopment) return;
    if (resolvedTheme === "dark" || resolvedTheme === "light") {
      setCurrentTheme(resolvedTheme);
    }
  }, [resolvedTheme, isUnderDevelopment, isMounted]);

  const toggleTheme = useCallback(() => {
    // Manual toggle is only meaningful outside system-driven under-development mode.
    setCurrentTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      setTheme(next);
      return next;
    });
  }, [setTheme]);

  const setAppTheme = useCallback(
    (theme: AppTheme) => {
      setCurrentTheme(theme);
      setTheme(theme);
    },
    [setTheme],
  );

  const setIsUnderDevelopment = useCallback((_value: boolean) => {
    // Intentionally ignored — UNDER_DEVELOPMENT is env/server controlled.
  }, []);

  const setIsUnderMaintenance = useCallback((_value: boolean) => {
    // Intentionally ignored — UNDER_MAINTENANCE is env/server controlled.
  }, []);

  const setIsHeaderVisible = useCallback((_visible: boolean) => {
    // Intentionally ignored — derived from env flags.
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      currentTheme,
      toggleTheme,
      setAppTheme,
      isHeaderVisible,
      setIsHeaderVisible,
      isUnderDevelopment,
      setIsUnderDevelopment,
      isUnderMaintenance,
      setIsUnderMaintenance,
      supportEmail: resolvedSupportEmail,
      contactFormEnabled: isContactFormEnabled,
    }),
    [
      currentTheme,
      toggleTheme,
      setAppTheme,
      isHeaderVisible,
      setIsHeaderVisible,
      isUnderDevelopment,
      setIsUnderDevelopment,
      isUnderMaintenance,
      setIsUnderMaintenance,
      resolvedSupportEmail,
      isContactFormEnabled,
    ],
  );

  return (
    <AppContext.Provider value={value}>
      {children}
      {isMounted && (
        <ProgressBar
          height="4px"
          color="rgb(26 139 244)"
          options={{ showSpinner: false }}
          shallowRouting
        />
      )}
    </AppContext.Provider>
  );
};

/**
 * App-wide provider for theme and layout chrome (header visibility, site modes, etc.).
 * Env flags are passed from the server layout so client code can react to them.
 */
const AppProvider = ({
  children,
  underDevelopment = false,
  underMaintenance = false,
  supportEmail = "support@serateksys.com",
  contactFormEnabled = false,
}: AppProviderProps) => {
  return (
    <NextThemeProvider
      attribute="class"
      // Under development follows the OS theme; normal site stays light-only.
      defaultTheme={underDevelopment ? "system" : "light"}
      enableSystem={underDevelopment}
      forcedTheme={underDevelopment ? undefined : "light"}
    >
      <AppContextController
        underDevelopment={underDevelopment}
        underMaintenance={underMaintenance}
        supportEmail={supportEmail}
        contactFormEnabled={contactFormEnabled}
      >
        {children}
      </AppContextController>
    </NextThemeProvider>
  );
};

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
