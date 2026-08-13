"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { InterFont, RalewayFont, RobotoFont } from "./ui/Font/font";

interface OverviewImgProps {
    imgSrc: StaticImageData | string;
    alt?: string;
    headtext?: string;
    description?: string;
    height?: string;
    className?: string;
}

export const OverviewImg = ({
    imgSrc,
    alt = "Overview Background",
    className,
    ...props
}: OverviewImgProps) => {
    return (
        <div
            className={cn("relative flex justify-center items-center text-center w-full h-[calc(100vh-200px)] overflow-hidden", className)}
        >
            <Image
                src={imgSrc}
                alt={alt}
                priority
                fill
                className="opacity-50 blur-[2px]"
            />
            <div className={cn("z-10 flex flex-col justify-center items-center gap-16", RalewayFont.className)}>
                <div className="text-3xl font-bold text-white">{props.headtext}</div>
                <div className="text-3xl max-w-[60%] font-bold leading-12 text-white">“{props.description}”</div>
            </div>
            <div className="absolute inset-0 bg-primary-text/50" />
            <div className="absolute inset-0 bg-black/20" />
        </div>
    );
};


interface OverviewTextProps {
    title: string;
    description: string;
    className?: string;
}

export const OverviewText = ({
    title,
    description,
    className,
}: OverviewTextProps) => {
    return (
        <div
            className={cn(
                "absolute inset-0 flex flex-col items-center justify-center text-center px-5",
                InterFont.className
            )}
        >
            <h2 className="text-[32px] font-[500] text-[#FFFFFF] mb-5">
                {title}
            </h2>
            {/* <p className={cn("max-w-[890px] leading-tight font-[500] md:text-[32px] text-transparent bg-clip-text bg-gradient-to-t from-[#999999] to-[#FFFFFF] ", RobotoFont.className)}>
                {description}
            </p> */}
            <p className={cn("md:px-65 sm:px-20 font-[500] text-[24px] text-[#FFFFFF]", RobotoFont.className, className)}>
                {/* {description} */}
                {description.split("\n\n").map((para, i) => (
                    <span key={i} className="block">{para}</span>
                ))}
            </p>
        </div>
    );
};
