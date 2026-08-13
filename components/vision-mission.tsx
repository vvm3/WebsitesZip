import { cn } from "@/lib/utils"
import { PoppinsFont, RalewayFont } from "./ui/Font/font"
import { ScrollArea } from "./ui/scroll-area"

interface VissionMissionComponentProps {
    heading: string,
    description: string,
    className?: string
}

export const VissionMissionComponent = ({
    heading,
    description,
}: VissionMissionComponentProps) => {
    return (
        <>
            <div className="flex flex-col text-center min-h-[300px] max-w-[550px] h-[300px] overflow-hidden bg-white border-x border-x-[#0F6CBD] rounded-[24px] shadow-xl px-7">
                <h2 className={cn("font-[700] text-[24px] text-primary-text p-2", RalewayFont.className)}>{heading}</h2>
                <ScrollArea className="max-h-[200px]"><p className={cn("text-muted-foreground text-[16px] leading-7 text-justify p-4", PoppinsFont.className)}>{description}</p></ScrollArea>
            </div>
        </>
    )
}