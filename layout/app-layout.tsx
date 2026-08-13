"use client";

// Hooks
import { JSX, PropsWithChildren, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMounted } from "@/hooks/use-mounted";
import { useAppContext } from "@/context/AppContext";

// UI Elements & Components
import AppHeader from "./app-header";
import AppFooter from "./app-footer";
import AppLoaderScreen from "@/components/AppElements/loader";
import UnderDevelopmentPage from "@/components/AppElements/underDevelopment";
import { Toaster } from "@/components/ui/sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  RequestDemoId,
  SCROLLAREA_BODY_ID_SUFFIX,
  SERATEK_BODY_ID,
} from "@/config";
import { useIsMobile } from "@/hooks/use-mobile";
import { DemoRequestForm } from "@/components/HomeComponent/contactForm";

const AppLayout = ({ children, ...rest }: PropsWithChildren): JSX.Element => {
  const mounted = useMounted();
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const router = useRouter();
  const {
    isHeaderVisible,
    isUnderDevelopment,
    supportEmail,
    contactFormEnabled,
    isUnderMaintenance,
  } = useAppContext();

  const [disableNav, setDisableNav] = useState(false);
  const [isContactPageOnly, setIsContactPageOnly] = useState(false);

  // Under-development mode: only `/` is allowed; bounce every other route home.
  useEffect(() => {
    if (!mounted) return;

    const isContactFormEnabled =
      pathname === "/contact" &&
      (window.location.hash.replace("#", "") === RequestDemoId) &&
      contactFormEnabled;

    if (isContactFormEnabled) {
      setIsContactPageOnly(true);
      return;
    } else {
      setIsContactPageOnly(false);
    }

    if (!(isUnderDevelopment || isUnderMaintenance)) return;

    if (pathname !== "/" && !isContactFormEnabled) {
      router.replace("/");
    }
  }, [
    mounted,
    isUnderDevelopment,
    isUnderMaintenance,
    pathname,
    router,
    contactFormEnabled,
  ]);

  useEffect(() => {
    if (window.location.hash && mounted) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (id === "RequestDemo") {
        setDisableNav(true);
      }

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [mounted, isUnderDevelopment]);

  if (!mounted) {
    return <AppLoaderScreen />;
  }

  // UNDER_DEVELOPMENT=true → replace all page content with the under-development screen.
  const content = isUnderDevelopment ? (
    isContactPageOnly ? (
      <DemoRequestForm fullScreen={true} />
    ) : (
      <UnderDevelopmentPage supportEmail={supportEmail} />
    )
  ) : (
    children
  );

  return (
    <>
      {isMobile ? (
        <div
          id={`${SERATEK_BODY_ID}-${SCROLLAREA_BODY_ID_SUFFIX}`}
          className="h-[calc(100vh)] max-h-[calc(100vh)] overflow-auto overflow-x-hidden bg-background"
          {...rest}
        >
          {isHeaderVisible && <AppHeader />}
          {content}
          {!isUnderDevelopment && <AppFooter disableNavigation={disableNav} />}
        </div>
      ) : (
        <ScrollArea
          id={SERATEK_BODY_ID}
          className="h-[calc(100vh)] max-h-[calc(100vh)] overflow-hidden bg-background"
          {...rest}
        >
          {isHeaderVisible && <AppHeader />}
          {content}
          {!isUnderDevelopment && <AppFooter disableNavigation={disableNav} />}
        </ScrollArea>
      )}

      <Toaster position="top-right" className="!top-[66px]" />
    </>
  );
};

export default AppLayout;
