import { cn } from "@/lib/utils"
import { RalewayFont, RobotoFont } from "../ui/Font/font"
import React, { ComponentType } from "react"
import { PopOnView } from "./transitions/transitions"

const InforIconCard = ({ heading, description, Icon }: { heading: string, description: string, Icon: ComponentType<React.SVGProps<SVGSVGElement>> }) => {
    return (
        <PopOnView className="">
            <div className={cn("w-full h-[200px] min-h-[250px] border flex gap-2 p-6 rounded-[10px] shadow-[0px_0px_6px_0px_#00000040]")}>
                <div className="pt-2 flex justify-center"><Icon className="w-7 h-7" /></div>
                <div className="flex flex-col justify-start items-start gap-4">
                    <div className={cn("text-[28px] text-primary-text2 !p-0 !m-0 font-semibold", RalewayFont.className)}>{heading}</div>
                    <div className={cn("text-muted-foreground max-h-[100px] overflow-auto custom-scrollbar", RobotoFont.className)}>{description}</div>
                </div>
            </div>
        </PopOnView>
    )
}

export default InforIconCard;