'use client';
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FeatureCard = (
    {
        heading, description, link, color, imageLink, imageorder = 2
    }: {
        heading: string;
        description: string;
        link?: string;
        color: string;
        imageLink: string;
        imageorder?: 1 | 2;
    }
) => {
    const router = useRouter();
    return (
        <Card className="p-0 shadow-none overflow-y-auto border-none rounded-2xl w-full" style={{ backgroundColor: (color && color.trim() !== "") ? color : "white" }}>
            <CardContent className={cn("flex flex-col sm:flex-row md:flex-row lg:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-4 md:p-6 lg:p-8 h-[450px] max-h-max min-h-[450px] w-full")}>
                <div aria-label="feature-card-information-section" className={cn("flex flex-col flex-[50%] gap-2 sm:gap-4 md:gap-6", `order-2 sm:order-${imageorder === 1 ? 2 : 1} md:order-${imageorder === 1 ? 2 : 1} lg:order-${imageorder === 1 ? 2 : 1}`)}>
                    <div className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] text-primary-text w-[80%]">
                        {heading}
                    </div>
                    <div className="text-[12px] text-justify sm:text-[12px] md:text-[14px] lg:text-[18px] text-muted-foreground">{description}</div>
                    {link && link.trim() !== "" && <div className="mt-auto">
                        <Button variant={"outline"}
                            onClick={() => router.push(link)}
                            className="rounded-full text-[18px] [&>svg]:!h-[18px] [&>svg]:!w-[18px] hover:bg-primary-header hover:text-white bg-transparent p-7 w-[175px] border-black">
                            Explore <ArrowUpRight />
                        </Button>
                    </div>}
                </div>
                <div
                    aria-label="feature-card-image-section"
                    className={cn("relative flex justify-center flex-[50%] overflow-hidden h-[200px] min-h-[200px] sm:min-h-full md:h-full lg:h-full bg-gray-200 rounded-2xl items-center",
                        `order-1 sm:order-${imageorder} md:order-${imageorder} lg:order-${imageorder}`
                    )}
                >
                    <Image
                        className="h-full w-full object-cover"
                        src={imageLink}
                        alt={`${heading}-image`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        draggable={false}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default FeatureCard