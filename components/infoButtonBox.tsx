import { cn } from "@/lib/utils"
import { RalewayFont, RobotoFont } from "./ui/Font/font"


interface InfoButtonBoxProps {
    heading: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export const InfoButtonBox = ({
    heading,
    description,
    buttonText,
    buttonLink,
}: InfoButtonBoxProps) => {
    return (
        <>
            {/* <div className="flex flex-col gap-5 px-10 py-5 bg-[#FFFFFF] shadow-[0px_4px_10px_#00000040] ">
                <h4 className={cn("text-[28px] font-[700] text-[#000000]", RalewayFont.className)}>{heading}</h4>
                <p className={cn("text-[#666666] text-[24px] font-[400]", RobotoFont.className)}>{description}</p>
                <a href={buttonLink} className={cn(
                    "w-[125px] h-[40px] px-6 py-2 md:px-[48px] md:py-[16px] inline-flex items-center justify-center rounded-[8px] border border-[#002A77] text-[#002A77] hover:bg-blue-100 transition text-[14px] font-[700] whitespace-nowrap",
                    RobotoFont.className
                )}>{buttonText}</a>
            </div> */}
            <div className="flex flex-col gap-5 px-10 rounded-2xl py-5 bg-[#FFFFFF] shadow-[0px_4px_10px_#00000040] min-h-[300px]">
                <h4 className={cn("text-[28px] font-[700] text-[#333333]", RalewayFont.className)}>
                    {heading}
                </h4>

                <p className={cn(" text-[24px] font-[400] text-[#666666]", RobotoFont.className)}>
                    {description}
                </p>

                <a
                    href={buttonLink}
                    className={cn(
                        "mt-auto w-[125px] h-[40px] px-6 py-2 md:px-[48px] md:py-[16px] inline-flex items-center justify-center rounded-[8px] border border-[#002A77] text-[#002A77] hover:bg-blue-100 transition text-[14px] font-[700] whitespace-nowrap",
                        RobotoFont.className
                    )}
                >
                    {buttonText}
                </a>
            </div>

        </>
    )
}