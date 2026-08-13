import Image from "next/image";
import { WhyChooseUs } from "@/config/aboutus";
import FeatureCard from "@/components/custom/feature-card";
import { VissionMissionComponent } from "@/components/vision-mission";
import { PopOnView } from "@/components/custom/transitions/transitions";
import { RalewayFont } from "@/components/ui/Font/font";
import { cn } from "@/lib/utils";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <div className="relative flex justify-center items-center bg-primary-header h-[420px] gap-8 w-full text-white p-4 py-16 sm:p-16 md:p-16 lg:p-16">
                <div className="w-full sm:w-[70%] md:w-[70%] lg:w-[70%] px-4 sm:px-6 lg:px-8 animate-accordian-down">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-lg text-justify md:max-w-3xl leading-relaxed opacity-90">
                        We provide a next-generation ERP tailored for Colleges and Universities, developed by expertise in education technology.
                        Our platform ensures efficient management, compliance, and enhanced learning outcomes, integrating modern standards like
                        <span className="font-semibold"> NEP, NAAC, NBA, OBE,</span> and <span className="font-semibold">CBCS</span>.
                    </p>
                </div>
                <div className="p-16 ml-auto hidden sm:flex md:flex lg:flex justify-center items-center"><Image height={200} width={200} className="rotate-15" src={"/assets/images/appIcons/info.png"} alt="info" /></div>
            </div>

            {/* Vision Mission Section */}
            <section className="py-16 px-4 w-full sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className={cn(RalewayFont.className,"text-3xl font-bold text-gray-900 mb-8")}>Vision and Mission</h2>
                <div>
                    <div className="flex flex-wrap gap-10 w-full sm:gap-8 md:gap-12 lg:gap-18 justify-center items-center">
                        <PopOnView>
                            <VissionMissionComponent
                                heading="Vision"
                                description="Empowering the Future of Education with Intelligent, Unified, and Future-Ready ERP Solutions – Where Institutions Thrive, Administrations Simplify, and Students Succeed"
                            />
                        </PopOnView>
                        <PopOnView>
                        <VissionMissionComponent
                            heading="Mission"
                            description="Our mission is to transform the way educational institutions operate by delivering intuitive, scalable, and future-ready ERP solutions. We streamline administrative workflows, enhance learning experiences, and drive data-driven decision-making—so educators can focus on what matters most: shaping the minds of tomorrow "
                        />
                        </PopOnView>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WhyChooseUs.map((point, index) => (
                        <FeatureCard key={index} icon={point.icon} heading={point.heading} description={point.description} />
                    ))}
                </div>
            </section>
        </main>
    );
}   