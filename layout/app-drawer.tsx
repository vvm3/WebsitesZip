"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IMenuItem, menuItems } from "@/config/routes";
import { RalewayFont } from "@/components/ui/Font/font";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// Recursive Menu Renderer
function RenderMenu({
  items,
  onLinkClick,
}: {
  items: IMenuItem[];
  onLinkClick: () => void;
}) {
  return (
    <div className="[&>*]:transition-all [&_*]:transition-all flex flex-col gap-2">
      {items.map((item, idx) => (
        <div key={idx} className="py-4">
          {item.submenus && item.submenus.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={item.label}>
                <AccordionTrigger className="py-2">
                  <div className={cn("flex text-xl gap-2 [&>*]:text-black items-center", RalewayFont.className)}>
                    {item.icon && typeof item.icon === "function" && <item.icon className="h-7 w-7" />}
                    {item.label}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pl-4 pt-3 animate-accordian-down bg-primary/5 rounded-lg border-none ease-in-out">
                  {item.submenus.map((submenu, subIdx) => (
                    <div key={subIdx} className="mb-2">
                      <div className={cn("font-semibold text-base mb-2 py-4 text-[24px]", RalewayFont.className)}>
                        {submenu.name}
                      </div>

                      <div className="flex flex-col gap-4 px-4">
                        {submenu.items.map((subitem, sIdx) => (
                          <Link
                            key={sIdx}
                            href={subitem.href ?? ""}
                            onClick={onLinkClick}
                            className={cn(
                              "flex items-center gap-2 pb-2 text-base",
                              RalewayFont.className
                            )}
                          >
                            {subitem.icon && typeof subitem.icon === "function" && (
                              <subitem.icon className="h-5 w-5" />
                            )}
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            // 🔗 Simple link
            <Link
              href={item.href ?? "/"}
              onClick={onLinkClick}
              className={cn(
                "flex items-center gap-2 w-full border-b pb-2 text-xl font-semibold",
                RalewayFont.className
              )}
            >
              {item.icon && typeof item.icon === "function" && <item.icon className="h-7 w-7" />}
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

// 📱 Drawer Component
export default function AppDrawer({ heroSectionScrolled, hidden=false }: { heroSectionScrolled?: boolean; hidden?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger hidden={hidden} asChild>
        <div className="flex flex-col gap-1.5 cursor-pointer justify-center items-center">
          {Array(3)
            .fill("_")
            .map((_, idx) => (
              <div
                key={`ham-${idx}`}
                className={cn("w-[32px] h-[2px] rounded transition-all duration-500", heroSectionScrolled ? 'bg-black' : 'bg-white')}
              />
            ))}
        </div>
      </DrawerTrigger>

      <DrawerContent className="h-full flex overflow-y-auto overflow-x-hidden rounded-none !m-0 !p-0 inset-0">
        {/* Header Logo */}
        <div
          onClick={() => setOpen(false)}
          className="flex absolute left-0 top-0 items-center cursor-pointer bg-primary-header w-full transition-all animate-fade-in"
        >
          <Link href="/">
            <Image
              height={100}
              width={250}
              src="/assets/images/home/seratek_logo.png"
              alt="SERATEK LOGO"
              draggable={false}
            />
          </Link>
        </div>

        <DrawerTitle hidden>Navigation</DrawerTitle>

        <DrawerHeader className="flex flex-col items-center justify-between w-full mt-12">
          <DrawerClose className="ml-auto" asChild>
            <Button variant="outline">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        {/* Main Navigation */}
        <div className="p-6 pt-2">
          <RenderMenu items={menuItems} onLinkClick={() => setOpen(false)} />
        </div>

        <DrawerFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close Drawer
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
