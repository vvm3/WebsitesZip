'use client';
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { TriangleRightCircleIcon } from "../ui/icons/ui_icons/icons";
import { cn } from "@/lib/utils";
import { PoppinsFont, RobotoFont } from "../ui/Font/font";

export function CarouselSpacing() {
    const newsUpdates = [
        { news: "Launch of a new OBE module for NAAC/NBA compliance more than 150 universities in" },
        { news: "University ERP update with integrated LMS for better tracking" },
        { news: "Increased assistance for universities with several campuses" },
        { news: "serving more than 150 universities in India at the moment" },
        { news: "Mobile app launched for parents and students" },
        { news: "Digital attendance system rolled out for faculty" },
        { news: "Multi-language support added to the LMS" },
        { news: "Analytics dashboard for student performance live" },
        { news: "New AI-powered grading system tested in 5 colleges" },
    ];

    return (
        <div className="w-full h-[250px] flex items-center py-12 flex-col mt-5 mb-30">
            <h2 className={cn("text-[34px] h-[48px] mb-6 text-center font-[600] text-[#002A77]", RobotoFont.className)}>
                Recent Update / News
            </h2>

            <Carousel className="w-full h-[172px] max-w-4xl relative px-10"
                opts={{ loop: true, dragFree: true, slidesToScroll: "auto" }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnInteraction: false,
                        playOnInit: true,
                    }),
                ]}
            >
                <CarouselContent className="-ml-4">
                    {newsUpdates.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 max-w-sm mx-auto"
                        >
                            <Card className="h-full">
                                <CardContent className="flex h-full items-center justify-center p-4">
                                    <span className={cn("text-[16px] text-center break-words font-[400] text-[#898989] leading-[26px] h-[95]", PoppinsFont.className)}>
                                        {item.news}
                                    </span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-2 sm:-left-8 top-1/2 -translate-y-1/2"><TriangleRightCircleIcon className="w-8 h-8 rotate-180" /></CarouselPrevious>
                <CarouselNext className="absolute right-2 sm:-right-8 top-1/2 -translate-y-1/2"><TriangleRightCircleIcon className="w-8 h-8" /></CarouselNext>
            </Carousel>
        </div>
    );
}
