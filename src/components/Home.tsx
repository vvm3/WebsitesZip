import { ProductsList } from "@/components/HomeComponent/productsList";
import { ProductSummary } from "@/components/HomeComponent/productSummary";
import { HomeCarousel } from "./HomeComponent/HomeCarousel";
import * as React from "react"
import FeatureCard from "./HomeComponent/featureCard";
import { SlideInOnView } from "./custom/transitions/transitions";
import Image from "next/image";


export default function Home() {
    return (
        <div className="relative">
            <Image
                height={1500}
                width={1500}
                alt="logo"
                src={"/assets/images/appIcons/logo.svg"}
                className="absolute left-0 z-0 rotate-[25eg]"
            />
            <div className="relative z-10">
                <HomeCarousel />
                <ProductSummary />
                <ProductsList />
                <div className="flex flex-col justify-center p-6 gap-12 sm:p-12 md:p-12 lg:p-20">
                    <SlideInOnView>
                        <FeatureCard
                            key={"FeatureCard-for-college-solutions"}
                            color="#EEF4FF"
                            description="A streamlined ERP for autonomous colleges, handling everything from admissions,  merit lists, academics, exams, and alumni management in one integrated platform."
                            heading="Unified ERP for Autonomous + Affiliated + University Colleges"
                            link="/solutions/webdesk/college"
                            imageLink="/assets/images/solutions/ERP_Support_All_Colleges.png"
                            imageorder={2}
                        />
                    </SlideInOnView>
                    <SlideInOnView
                        side="right"
                    >
                        <FeatureCard
                            key={"Built-on-Modern-&-Secure-Technologies"}
                            color="#FCF5E3"
                            description="Our ERP platform is engineered using the latest, industry-proven technologies to deliver high performance, scalability, and enterprise-grade security. With robust data encryption, role-based access control, and secure cloud-ready architecture, the system ensures data integrity, compliance, and uninterrupted operations — even at institutional scale.

Designed to evolve with future academic and regulatory needs, the platform guarantees reliability, speed, and long-term technological sustainability."
                            heading="Built on Modern & Secure Technologies"
                            imageLink="/assets/images/solutions/Modern_Technology.png"
                            imageorder={1}
                        />
                    </SlideInOnView>
                </div>
                {/* <ClientTestimonials /> */}
                {/* <CarouselSpacing /> */}
            </div>
            {/* <ContactForm /> */}
        </div>
    );
}
