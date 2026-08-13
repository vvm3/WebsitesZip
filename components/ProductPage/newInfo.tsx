import { cn } from "@/lib/utils"
import { RalewayFont, RobotoFont } from "../ui/Font/font"

interface NewInfo {
    heading: string,
    description: string,
    buttonText?: string,
    className?: string,
    link: string
}

export const NewInfo = ({ heading, description, buttonText, link }: NewInfo) => {
    return (
        <>
            <div className="lg:min-h-[700px] w-fit p-10 bg-primary-text text-[#FFFFFF] flex flex-col justify-between gap-10 m-5">
                <h4 className={cn("text-[24px] font-[700]", RalewayFont.className)}>{heading}</h4>
                <p className={cn("font-[400] text-[22px] leading-relaxed", RobotoFont.className)}>
                    {description}
                </p>
                <a
                    href={link}
                    className={cn("w-[100px] h-[80px] px-[10px] py-[27px] font-[700] bg-primary-text border border-white rounded-[8px]", RobotoFont.className)}
                >
                    {buttonText ?? "Read More"}
                </a>
            </div>
        </>
    )
}