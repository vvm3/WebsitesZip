import { cn } from "@/lib/utils";
import { LatoFont } from "./ui/Font/font";

interface IconInfoBoxProps {
    heading: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    onClick?: () => void;
    headingClassName?: string;
    descriptionClassName?: string;
    iconClassName?: string;
    seprateBox?: string;
}

export const IconInfoBoxButton = ({
    heading,
    description,
    icon,
    className,
    iconClassName,
    onClick,
    seprateBox
}: IconInfoBoxProps) => {
    return (
        <div
            className={cn(
                "flex items-center bg-white p-5 gap-5 w-full cursor-pointer shadow-[0px_0px_2px_0px_#00000040] transition-transform duration-300 ease-in-out hover:[transform:scale(1.01)]",
                className,
            )}
            onClick={onClick}
        >
            <div className={cn(iconClassName)}>{icon}</div>
            <div>
                <div className="flex items-center justify-between px-2 mt-3">
                    <h1
                        className={cn(
                            "font-bold text-[18px] text-primary-text",
                            LatoFont.className
                        )}
                    >
                        {heading}
                    </h1>

                    {seprateBox && (
                        <div className="py-1 md:py-2 md:px-5 px-3 bg-blue-100 w-fit text-[8px] md:text-[13px] text-primary font-[500] text-center h-fit md:h-9 rounded-3xl">
                            {seprateBox}
                        </div>
                    )}
                </div>
                <p
                    className={cn(
                        "mt-2 px-2 font-normal text-[#6B82AB] text-[16px]",
                        LatoFont.className
                    )}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};
