import bgImgUniversity from "../../../public/assets/images/solutions/university/unversityOverview.jpg";
import { OverviewImg } from "@/components/OverviewBg";
import { keyFeatures } from "@/config/aboutus";
import FeatureCard from "@/components/custom/feature-card";

export default function Features() {
    return (
        <>
            <div className="relative w-full h-[calc(100vh - 90px)] mb-15">
                <OverviewImg
                    imgSrc={bgImgUniversity}
                    className="opacity-100"
                />
            </div>

            {/* Key Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keyFeatures.map((feature, index) => (
                        <FeatureCard key={index} icon={() => <div className="text-6xl">{feature.icon}</div>} heading={feature.heading} description={feature.description} />
                    ))}
                </div>
            </section>
        </>
    )
}