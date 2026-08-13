import { OverviewImg, OverviewText } from "@/components/OverviewBg";
import bgImgCollege from "../../../../public/assets/images/home/HomeImg.jpg";
import { VissionMissionComponent } from "@/components/vision-mission";

export default function AboutUsVissionMissionPage () {
    return (
        <>
            <div className="relative h-[calc(100vh - 90px)] mt-5">
                <OverviewImg
                    imgSrc={bgImgCollege}
                    className="opacity-95"
                />
                <OverviewText
                    title="About Us"
                    description={`We are an innovative EdTech firm that provides comprehensive ERP solutions for educational institutions, ranging from schools to universities. Our ERP system consolidates various functions including admissions, academics, examinations, fee management, human resources, library services, hostels, transport services, alumni relations, compliance with NAAC/NBA/OBE criteria.

As educators ourselves, we appreciate the complexities bound to each stakeholder within an educational institution, such as administrators, faculty, students, and parents. Our solutions are modular, customizable, user-friendly, and primary compliant so that institutions can achieve a digitalized functioning along with flexibility.

Alongside robust data protection, cloud services, and agile responsiveness, we are determined to accelerate transformation in educational environments, enhancing the intelligence of processes, fluidity of communication, and overall results.`}
                    className="md:px-40 px-5 text-[18px] md:text-[22px]"
                />
            </div>
            <div>
                <div className="flex lg:flex-row flex-col gap-5 my-10 mx-5 justify-center items-center">
                    <VissionMissionComponent
                        heading="Vision"
                        description="Empowering the Future of Education with Intelligent, Unified, and Future-Ready ERP Solutions – Where Institutions Thrive, Administrations Simplify, and Students Succeed"
                    />
                    <VissionMissionComponent
                        heading="Mission"
                        description="Our mission is to transform the way educational institutions operate by delivering intuitive, scalable, and future-ready ERP solutions. We streamline administrative workflows, enhance learning experiences, and drive data-driven decision-making—so educators can focus on what matters most: shaping the minds of tomorrow "
                    />
                </div>
            </div>
        </>
    )
}