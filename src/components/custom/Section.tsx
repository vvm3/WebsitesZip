import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react"
import { RalewayFont } from "../ui/Font/font";

interface ISection extends PropsWithChildren {
    heading: string;
    className?: string;
    headingClassName?: string
}

const Section = ({ heading, headingClassName, className, children }: ISection) => {
    return (
        <section aria-labelledby={`heading-for-${heading}`}>
            <div className={cn("text-[32px] sm:text-[32px] md:text-[32px] lg:text-[48px] my-6 font-semibold", headingClassName, RalewayFont.className)}><h2 id={`heading-for-${heading}`}>{heading}</h2></div>
            <div className={className}>{children}</div>
        </section>
    )
}

export default Section