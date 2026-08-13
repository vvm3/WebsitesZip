import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { InterFont } from "@/components/ui/Font/font";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IMenuItem } from "@/config/routes";
import { cn } from "@/lib/utils";
import { motion } from "motion/react"
import Link from "next/link";

const NavigationTabs = ({ item }: { item: IMenuItem }) => {
    return (
        <Tabs className="flex rounded-[13px] p-2 gap-4 justify-start items-start min-w-[400px] max-w-[calc(100vw - 100px)] max-h-[500px] h-max bg-white" defaultValue={item.submenus?.[0]?.value || ""}>
            <TabsList className="flex flex-col w-auto text-3xl gap-4 h-max max-h-[300px] custom-scrollbar font-[700] p-2 bg-white rounded-none justify-start items-start">
                {item.submenus?.map((sub, subIdx) => (
                    <TabsTrigger key={`${item.label}-${subIdx}-${sub.value}-trigger`} value={sub.value} className="text-xl px-0 w-full !flex !text-start !justify-start cursor-pointer !shadow-none border-b-1 rounded-none transition-all data-[state=active]:bg-white data-[state=active]:scale-[1.01] data-[state=active]:!text-primary-text text-blackr duration-500 !m-0 font-[700] bg-transparent">
                        <div className="max-w-[calc(100vw-400px)] w-max text-wrap">{sub.name}</div>
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className="w-full h-full">
                {item.submenus?.map((sub, subIdx) => (
                    <TabsContent key={`${item.label}-${subIdx}-${sub.value}-content`} value={sub.value} className="flex flex-col flex-1/2 justify-start items-start w-full !p-0 !m-0 !h-full bg-gradient-to-b from-primary-text to-primary/60 text-white rounded-[13px] overflow-y-auto">
                        <ScrollArea className="flex flex-col justify-start items-start w-full h-full min-h-[90px] max-h-[300px] overflow-auto">
                            {sub.items?.map((subItem, subItemIdx) => {
                                return (
                                    <DropdownMenuItem key={`${item.label}-${sub.value}-${subItemIdx}-item`} asChild className={cn("rounded-none", (subItemIdx === 0) ? "rounded-t-[5px]" : (subItemIdx === (sub.items.length - 1)) ? "rounded-b-[5px]" : "rounded-none", "cursor-pointer transition-all duration-700 hover:!bg-black/30 hover:!text-muted p-4 border-t border-muted-foreground/40")}>
                                        <Link
                                            href={subItem.href || "#"}
                                            className={cn("w-full text-nowrap text-[16px]", InterFont.className)}
                                        >
                                            <motion.div
                                                initial={{ filter: "blur(10px)" }}
                                                animate={{ filter: "blur(0px)" }}
                                                transition={{ duration: 0.5, delay: (subIdx / 10) }}
                                                className="flex gap-1 items-center w-full"
                                            >
                                                <div><subItem.icon /></div>
                                                <div>{subItem.label}</div>
                                            </motion.div>
                                        </Link>
                                    </DropdownMenuItem>
                                )
                            })}
                        </ScrollArea>
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}

export default NavigationTabs;