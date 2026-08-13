'use client';
import { OverviewImg } from "@/components/OverviewBg";
import Section from "@/components/custom/Section";
import { BookOpenText, Clock4, Eye, FileCheck2, Handshake, Headset, Hexagon, RefreshCw, Settings, UploadCloud, UserCog2, Users, Zap } from "lucide-react";
import React, { ComponentType } from "react";
import InforIconCard from "@/components/custom/InfoIconCard";
import { cn } from "@/lib/utils";
import { PoppinsFont, RalewayFont } from "@/components/ui/Font/font";
import { FlippableCard, PopOnView, SlideInOnView } from "@/components/custom/transitions/transitions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function CollegePage() {
    const CollegeModulesCovered = [
        {
            name: "Admissions Management",
            description: "Streamlined handling of student applications, enrollment, and document verification."
        },
        {
            name: "Enquiries Management",
            description: "Efficient tracking and handling of student inquiries from initial contact to follow-up."
        },
        {
            name: "Academic Management",
            description: "Organizing and monitoring courses, schedules, exams, and student performance efficiently."
        },
        {
            name: "Examinations & Result Processing",
            description: "Managing exams, grading, and generating accurate results efficiently."
        },
        {
            name: "Fee & Finance Management",
            description: "Handling student applications, enrollment, and document verification efficiently." // Note: This description seems misplaced based on typical module function, but it was the 5th text provided.
        },
        {
            name: "Library Management",
            description: "Organizing, tracking, and managing books, resources, and member access efficiently."
        },
        {
            name: "Hostel & Management",
            description: "Efficient administration of hostel facilities, room allocation, and resident services."
        },
        {
            name: "HR & Payroll Management",
            description: "Streamlining employee records, attendance, and salary processing efficiently."
        },
        {
            name: "Alumni Management",
            description: "Maintaining connections, records, and engagement with former students effectively."
        },
        {
            name: "Mobile App for Students & Staff",
            description: "Provides easy access to academic info, notifications, and services on the go."
        },
        {
            name: "Student Management",
            description: "Efficient tracking of student profiles, attendance, performance, and activities."
        },
        {
            name: "Inventory Management",
            description: "Tracking, organizing, and controlling institutional resources and supplies efficiently."
        },
        {
            name: "Transport Management",
            description: "" // No 13th text was extracted to match this module.
        }
    ];

    interface IBenefits {
        title: string;
        description: string;
        icon: ComponentType<React.SVGProps<SVGSVGElement>>; // This would typically be a string corresponding to the Lucide icon name
    }

    const benefits: IBenefits[] = [
        {
            title: "Paperless Administration",
            description: "This approach reduces manual paperwork, improves efficiency, and promotes sustainability.",
            icon: FileCheck2
        },
        {
            title: "Real-Time Access to Data",
            description: "means getting updated information instantly, as it happens—without delays.",
            icon: Clock4
        },
        {
            title: "AI-powered ERP",
            description: "Automates tasks, predicts trends, improves decision-making, and personalizes user experience.",
            icon: UserCog2 // Assuming UserCheck or similar for AI/personalization
        },
        {
            title: "Cloud ERP for Institutes",
            description: "An online ERP system hosted on the cloud, designed for schools, colleges, and universities.",
            icon: UploadCloud
        },
        {
            title: "Customizable & Scalable ERP",
            description: "Automates tasks, predicts trends, improves decision-making, and personalizes user experience.",
            icon: Hexagon // Assuming Hexagon or Settings for customizable/scalable
        }
    ];

    const supportFeatures = [
        {
            icon: Users,
            title: "Onboarding and training for staff and faculty",
        },
        {
            icon: Handshake,
            title: "Handholding Support till migration process",
        },
        {
            icon: BookOpenText,
            title: "User manuals & video tutorials",
        },
        {
            icon: Headset,
            title: "Dedicated person for technical support",
        },
        {
            icon: RefreshCw,
            title: "Regular updates and maintenance",
        },
    ];

    const benefitsData = [{
        icon: Zap,
        title: "Agility"
    }, {
        icon: Settings,
        title: "Efficieny"
    }, {
        icon: Eye,
        title: "Transparency"
    }, {
        icon: Headset,
        title: "Support"
    }]

    return (
        <div className="relative">
            <div className="relative w-full z-10 h-[calc(100vh-150px)]">
                <OverviewImg
                    imgSrc={"/assets/images/solutions/college/heroImage.jpg"}
                    headtext="Overview"
                    description="Empowering Institutions, Students & Parents"
                />
            </div>
            <div className="p-4 sm:px-20 md:px-20 lg:px-20 mx-0 sm:mx-6 flex flex-col gap-6">
                <Image
                    height={1500}
                    width={1500}
                    alt="logo"
                    src={"/assets/images/appIcons/logo.svg"}
                    className="absolute opacity-60 left-0 top-0 z-0 rotate-[25eg]"
                />
                <Section key={"college-benefits-section"} heading="Benefits" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        benefits.map((benefit, idx) => <InforIconCard key={idx} Icon={benefit.icon} heading={benefit.title} description={benefit.description} />)
                    }
                </Section>
                <Section key={"college-modules-covered-section"} heading="Modules Covered" className="flex flex-wrap justify-center sm:justify-start md:justify-start lg:justify-start gap-8">
                    {
                        CollegeModulesCovered.map((module, idx) => {
                            return (
                                <PopOnView key={`college-module-${idx}`}>
                                    <FlippableCard
                                        front={
                                            <div className={cn("w-full h-[150px] min-h-[60px] border flex gap-2 p-6 rounded-[10px] shadow-[0px_0px_6px_0px_#00000040]")}>
                                                <div className="py-2">
                                                    <div className="bg-primary-text2 text-white h-7 w-7 rounded-full flex justify-center items-center font-bold">{idx + 1}</div>
                                                </div>
                                                <div className={cn("text-[28px] text-primary-text2 !p-0 !m-0 font-semibold", RalewayFont.className)}>{module.name}</div>
                                            </div>
                                        }
                                        back={
                                            <div className={cn("w-full h-[150px] min-h-[60px] border flex gap-2 p-6 rounded-[10px] shadow-[0px_0px_6px_0px_#00000040]")}>
                                                <div className={cn("text-[18px] text-muted-foreground !p-0 !m-0 font-semibold", RalewayFont.className)}>{module.description}</div>
                                            </div>
                                        }>

                                    </FlippableCard>
                                </PopOnView>
                            )
                        })
                    }
                </Section>
                <div className="block sm:flex md:flex lg:flex gap-8 my-8 py-8">
                    <div className="flex flex-[50%] flex-col gap-8 justify-center items-center">
                        <div className={cn("text-center text-[32px] w-[260px] text-primary-text2 font-bold", RalewayFont.className)}>
                            “We Support You at Every Step”
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Image
                                src={"/assets/images/solutions/college/supportVector.png"}
                                alt="support image"
                                width={500}
                                height={200}
                                draggable={false}
                            />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Button type="button" className="bg-primary-text2 text-white">
                                CONTACT SUPPORT
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-[50%] overflow-auto overflow-x-hidden flex-col gap-8 justify-center items-center p-4">
                        {supportFeatures.map((feature, idx) => {
                            return (
                                <PopOnView key={`support-feature-${idx}`} className="w-full flex justify-center items-center cursor-default">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: idx * 0.02 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        key={idx}
                                        className="w-full flex justify-center items-center"
                                    >
                                        <div key={idx} className="flex gap-2 shadow-[0px_0px_6px_0px_#00000040] box-border px-3 p-6 w-[80%] rounded-[15px]">
                                            <div className="h-10 min-w-10 rounded-full flex justify-center items-center bg-muted">{<feature.icon />}</div>
                                            <div className="text-primary-text2 flex items-center text-[22px] font-semibold">{feature.title}</div>
                                        </div>
                                    </motion.div>
                                </PopOnView>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-8 my-18 px-2 sm:px-12 md:px-16 lg:px-16">
                    <SlideInOnView side="left" className="w-full">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-primary-text2 w-full sm:w-full md:w-[70%] lg:w-[70%] font-bold">
                            We Empower Your Institution for the Future of Education
                        </div>
                    </SlideInOnView>
                    <div className="block h-max sm:flex md:flex lg:flex gap-8">
                        <div className="flex order-2 sm:order-1 md:orde r-1 lg:order-1 flex-[50%] flex-col justify-start items-left gap-8">
                            <SlideInOnView side="left" className="w-full" delay={0.1}>
                                <div className="text-[18px] text-muted-foreground text-left">
                                    Our ERP solution helps your institution operate with agility, efficiency, and transparency.
                                    Move beyond spreadsheets and disconnected systems, and adopt a modern platform
                                    designed to support your educational mission.
                                </div>
                            </SlideInOnView>
                            <SlideInOnView side="left" delay={0.2} className="w-full"><Button variant={"default"} type="button" className="w-full sm:w-full md:w-[40%] lg:w-[40%] py-6">BOOK A FREE DEMO</Button></SlideInOnView>
                            <SlideInOnView side="left" delay={0.3} className="w-full"><Button variant={"outline"} type="button" className="w-full sm:w-full md:w-[40%] lg:w-[40%] py-6">TALK TO OUR EXPERTS</Button></SlideInOnView>
                        </div>
                        <div className="flex order-1 sm:order-2 md:order-2 lg:order-2 flex-[50%] h-max justify-center items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="w-full h-full flex justify-center items-center"
                            >
                                <Image
                                    src={"/assets/images/solutions/college/empowerFutureVector.png"}
                                    alt="Empower Future"
                                    height={500}
                                    width={500}
                                    draggable={false}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-8 justify-center items-center">
                        {benefitsData.map((benefit, idx) => {
                            return (
                                <PopOnView key={`benefit-data-${idx}`}>
                                    <div key={idx} className="p-4 sm:p-6 md:p-6 lg:p-6 flex flex-col  gap-8 justify-center items-center bg-primary/3">
                                        <div><benefit.icon className="w-22 h-22 text-primary-text2" /></div>
                                        <div className={cn(PoppinsFont.className, "font-bold text-2xl")}>{benefit.title}</div>
                                    </div>
                                </PopOnView>
                            )
                        })}
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div onClick={() => {
                        const nextSection = document.getElementById("seratek-contact-form-section");
                        if (nextSection) {
                            nextSection.scrollIntoView({ behavior: "smooth" })
                        }
                    }} className={cn(RalewayFont.className, "text-[32px] text-center text-primary-text2 font-bold")}>Book a Free Demo Today!</div>
                </div>
            </div>
        </div>
    );
}