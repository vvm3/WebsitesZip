"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { MontserratFont, PoppinsFont } from "../ui/Font/font";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import { SlideInOnView } from "../custom/transitions/transitions";
import { SCROLLAREA_BODY_ID_SUFFIX, SERATEK_BODY_ID } from "@/config";
import { handleScrollToDemoForm } from "@/layout/UI-Handlers";
import Image from "next/image";

const HomeImgs = [
    { src: "/assets/images/home/HomeImg.jpg", alt: "Home Image 1" },
];

export function HomeCarousel() {
    const showButton = true;

    const autoplay = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false, playOnInit: true })
    );

    return (
        <>
            <div className="relative w-full">
                <Carousel className="w-full" opts={{ loop: true, dragFree: true, watchDrag: false }} plugins={[autoplay.current]}>
                    <CarouselContent className="h-[500px] sm:h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] lg:h-[calc(100vh-200px)]">
                        {HomeImgs.map((img, index) => (
                            <CarouselItem key={index} className={cn("relative p-0", img.src ? "bg-black" : "bg-white")}>
                                {img.src && (
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        priority={index === 0}
                                        sizes="100vw"
                                        className={cn("w-full bg-black opacity-40 h-full object-cover blur-[2px]")}
                                    />
                                )}
                                <div className={cn("absolute inset-0 flex flex-col items-start justify-center text-center px-6 sm:px-12 md:px-12 lg:px-18 pr-3", img.src ? "bg-primary-text/50" : "bg-white")}>
                                    <div
                                        className={cn(
                                            "text-[22px] p-6 gap-8 sm:text-[24px] md:text-[28px] lg:text-[32px] flex flex-col items-start justify-center text-center font-semibold text-white drop-shadow-lg max-w-4xl",
                                            MontserratFont.className
                                        )}
                                    >
                                        <span className={cn("flex text-left items-start justify-center gap-0 w-full animate-home-hero-text", img.src ? "" : "[&>span]:text-primary-text")}>
                                            <span className="inline">Transforming Universities, Colleges, and Schools into Smart Digital Campuses with Next-Gen ERP
                                            </span>
                                        </span>
                                        <span className="flex justify-center items-start">
                                            <SlideInOnView
                                                delay={0.7}
                                            >
                                                <button
                                                    aria-label="Quick Demo"
                                                    className={cn(
                                                        "bg-white backdrop-blur-[30px] hover:scale-[1.1] focus:scale-[0.95] border-[1px] border-muted/20 shadow-lg focus:backdrop-blur-[300px] duration-500 transition-all animate-accordian-down -right-8 font-700 text-[#002A77] h-[55px] text-[15px] rounded-full px-3 py-2 font-bold tracking-widest",
                                                        PoppinsFont.className
                                                    )}
                                                    onClick={handleScrollToDemoForm}
                                                >
                                                    QUICK DEMO
                                                </button>
                                            </SlideInOnView>
                                        </span>
                                    </div>
                                </div>
                                {showButton ? (
                                    <Button
                                        type="button"
                                        variant={'outline'}
                                        className="hidden absolute md:flex sm:flex lg:flex bottom-4 w-10 h-10 left-[50%] right-[50%] animate-fade-in rounded-full cursor-pointer [&_svg]:!h-5 [&_svg]:!w-5"
                                        onClick={() => {
                                            const body = document.getElementById(`${SERATEK_BODY_ID}-${SCROLLAREA_BODY_ID_SUFFIX}`);
                                            if (body) {
                                                body.scrollBy({
                                                    top: 500,
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                    >
                                        <ArrowDown className="animate-bounce animate-duration-1000" />
                                    </Button>
                                ) : <></>
                                }
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel >
            </div >
        </>
    );
}
