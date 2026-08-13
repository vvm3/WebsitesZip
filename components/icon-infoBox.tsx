import { cn } from "@/lib/utils";
import { LatoFont } from "./ui/Font/font";

interface IconInfoBoxProps {
    heading: string;
    description: string;
    icon: React.ReactNode
}

export const IconInfoBox = ({
    heading,
    description,
    icon
}: IconInfoBoxProps) => {
    return (
        <>
            <div className="flex flex-col gap-2 w-full max-h-[375px] items-center text-center py-7 shadow-[0px_4px_10px_#0000000D] bg-white">
                <div className="flex items-center justify-center mb-2">
                    {icon}
                </div>

                <h1
                    className={cn(
                        "mt-4 font-bold text-[18px] px-2 text-[#1F3965]",
                        LatoFont.className
                    )}
                >
                    {heading}
                </h1>

                <p
                    className={cn(
                        "mt-2 px-2 font-normal text-[#6B82AB] text-[16px]",
                        LatoFont.className
                    )}
                >
                    {description}
                </p>
            </div>

        </>
    )
}