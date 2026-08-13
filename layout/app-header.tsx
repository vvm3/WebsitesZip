"use client";
import { MontserratFont, PoppinsFont } from "@/components/ui/Font/font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { motion } from "motion/react";
import { menuItems } from "@/config/routes";
import AppDrawer from "./app-drawer";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import NavigationTabs from "@/components/custom/navigation/NavigationTabs";
import {
  RequestDemoId,
  SCROLLAREA_BODY_ID_SUFFIX,
  SERATEK_BODY_ID,
} from "@/config";
import { Button } from "@/components/ui/button";
import { handleScrollToDemoForm } from "./UI-Handlers";
import { useMounted } from "@/hooks/use-mounted";
import SeratekMark from "@/components/ui/icons/SeratekMark";
import SeratekWordmark from "@/components/ui/icons/SeratekWordmark";

const AppHeader = () => {
  const mounted = useMounted();
  const [openNav, setOpenNav] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [disableNav, setDisableNav] = useState(false);

  // Logo/wordmark: white over hero, navy once scrolled (white again in dark mode).
  const brandColorClass =
    isScrolled || disableNav ? "text-[#062645] dark:text-white" : "text-white";

  useEffect(() => {
    const bodyElement = document.getElementById(
      `${SERATEK_BODY_ID}-${SCROLLAREA_BODY_ID_SUFFIX}`,
    );
    if (!bodyElement) return;

    const handleScroll = () => {
      const scrollY = bodyElement.scrollTop;
      const triggerPoint = bodyElement.clientHeight * 0.6; // 60% of visible height
      setIsScrolled(scrollY > triggerPoint);
    };

    bodyElement.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => bodyElement.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash && mounted) {
      const id = window.location.hash.replace("#", "");
      if (id === RequestDemoId) {
        setDisableNav(true);
      }
    }
  }, [mounted]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full h-[90px] transition-all duration-200 flex items-center shadow-sm px-6 sm:px-12 md:px-18 lg:px-20  ",
        disableNav
          ? "bg-black/5 backdrop-blur-[18px]"
          : isScrolled
            ? "bg-white/50 backdrop-blur-[18px] shadow-lg"
            : "bg-black/20 backdrop-blur-[4px] !shadow-none",
      )}
    >
      <div className="flex flex-[50%] items-center cursor-pointer transition-all animate-fade-in">
        <Link
          href="/"
          className="flex gap-2 justify-center items-center"
          aria-label="Seratek home"
        >
          <SeratekMark
            className={cn(
              "h-10 w-auto transition-colors duration-500",
              brandColorClass,
            )}
          />
          <SeratekWordmark
            className={cn(
              "h-7 w-auto transition-colors duration-500 sm:h-8",
              brandColorClass,
            )}
          />
        </Link>
      </div>
      <nav
        className={cn(
          "hidden h-[24px] sm:flex lg:flex md:flex flex-[50%] justify-end items-center transition-all duration-200 gap-8 font-[700]",
        )}
      >
        {!disableNav &&
          menuItems.map((item, idx) =>
            item.submenus && item.submenus.length > 0 ? (
              <DropdownMenu
                key={idx}
                open={openNav === item.label}
                onOpenChange={(isOpen) => {
                  setOpenNav(isOpen ? item.label : "");
                }}
              >
                <DropdownMenuTrigger
                  className={cn(
                    "flex items-center text-[14px] cursor-pointer rounded-[13px] whitespace-nowrap focus:outline-none",
                    MontserratFont.className,
                  )}
                  asChild
                >
                  <div className="flex justify-center items-center gap-1 [&>*]:transition-all [&>*]:duration-200">
                    <div
                      className={cn(
                        "rounded-3xl p-1",
                        openNav === item.label
                          ? "text-primary-header bg-white px-4"
                          : isScrolled
                            ? "text-black"
                            : "text-white",
                      )}
                    >
                      {item.label}
                    </div>
                    <div
                      className={cn(
                        "rounded-[13px] p-0",
                        openNav === item.label
                          ? "text-primary-header bg-white"
                          : isScrolled
                            ? "text-black"
                            : "text-white",
                      )}
                    >
                      <ChevronDown
                        className={cn(
                          "transition-transform duration-500 rounded-full", // Smooth rotation
                          openNav === item.label
                            ? "rotate-180 -translate-y-0.5"
                            : "",
                        )}
                      />
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  align="start"
                  className="bg-transparent border-none shadow-none pb-8 rounded-[13px]"
                >
                  <motion.div
                    className="flex relative bg-white shadow-2xl h-max overflow-hidden text-[#73738C] border-1 rounded-[13px] !p-0 font-[500] text-[16px]"
                    initial={{
                      padding: 2,
                      y: -10,
                      x: -10,
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{ padding: 2, y: 0, x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <NavigationTabs item={item} />
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={idx}
                href={item.href || "#"}
                className={cn(
                  "h-[24px] text-[14px] whitespace-nowrap [&>*]:transition-all [&>*]:duration-200",
                  isScrolled ? "text-black" : "text-white",
                  MontserratFont.className,
                )}
              >
                <div className="font-[700] leading-[24px] w-[70px] h-[24px]">
                  {item.label}
                </div>
              </Link>
            ),
          )}
        <Button
          aria-label="Quick Demo"
          className={cn(
            isScrolled && !disableNav
              ? "scale-x-[150px] transition-all duration-500 animate-expand-width"
              : "transition-none opacity-0 w-0 hidden flex-0 overflow-hidden",
            "bg-primary-header text-white hover:bg-primary-text hover:scale-[1.05] focus:scale-[0.95] border-none origin-right font-700 h-[40px] text-[15px] rounded-full px-3 font-bold tracking-widest",
            PoppinsFont.className,
          )}
          disabled={!isScrolled || disableNav}
          onClick={handleScrollToDemoForm}
        >
          QUICK DEMO
        </Button>
      </nav>

      <div className="ml-auto md:hidden h-full flex justify-end gap-2 flex-[50%] overflow-auto items-center">
        <Button
          aria-label="Quick Demo"
          className={cn(
            isScrolled && !disableNav
              ? "scale-x-[100%] w-[70%] max-w-[150px] !text-wrap animate-expand-width"
              : "transition-none opacity-0 w-0 hidden flex-0 overflow-hidden",
            "bg-primary-header text-white transition-all duration-500 opacity-100 hover:bg-primary-text hover:scale-[1.05] focus:scale-[0.95] border-none origin-right font-700 h-[40px] text-[15px] rounded-full px-3 font-bold tracking-widest",
            PoppinsFont.className,
          )}
          disabled={!isScrolled || disableNav}
          onClick={handleScrollToDemoForm}
        >
          QUICK DEMO
        </Button>
        <AppDrawer hidden={disableNav} heroSectionScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default AppHeader;
