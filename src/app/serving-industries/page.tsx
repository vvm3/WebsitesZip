import { IconInfoBox } from "@/components/icon-infoBox";
import { IndustryIconAutonomous, IndustryIconEngineering, IndustryIconManagement, IndustryIconUniversity } from "@/components/ui/icons/industry-icon/industryIcon";

export default function ServingIndustriesPage () {
    return (
        <>
            <div className="flex flex-col w-full justify-center px-5 md:px-50 gap-5 my-15">
                <h1 className="text-[#1F3965] font-bold text-[28px] md:text-[36px] lg:text-[48px] text-center mb-4">
                    CBSE / ICSE / State Board / Cambridge Schools
                </h1>

                <p className="text-[#000000] text-center max-w-3xl mx-auto mb-20 text-[16px] md:text-[18px]">
                    All school boards can use the smart ERP. In one place, manage parent
                    correspondence, exams, admissions, and attendance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                    <IconInfoBox
                        heading="Engineering colleges"
                        description="Track internal grades, simplify academic processes, quickly arrange labs, and accelerate placements."
                        icon={<IndustryIconEngineering />}
                    />

                    <IconInfoBox
                        heading="Colleges of Management"
                        description="B-School modules support trimester systems, electives, and industrial participation."
                        icon={<IndustryIconManagement />}
                    />

                    <IconInfoBox
                        heading="Autonomous Colleges"
                        description="Resources created especially for credit systems, academic flexibility, and OBE/NAAC/NBA compliance."
                        icon={<IndustryIconAutonomous />}
                    />

                    <IconInfoBox
                        heading="Deemed-to-be Universities"
                        description="Multi-campus ERP with modules for research monitoring, curriculum planning, and advanced analytics."
                        icon={<IndustryIconUniversity />}
                    />
                </div>
            </div>

        </>
    )
}