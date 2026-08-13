import { OverviewImg } from "@/components/OverviewBg";
import { ImgInfo } from "@/components/Solutions/Horizontal_ImgInfo/imgInfo";
import { InfoImg } from "@/components/Solutions/Horizontal_ImgInfo/infoImg";
import { PointsWithDescription } from "@/components/Solutions/PointsWithDescription";

export default function SchoolPage() {

    const pointWithDescriptionUniversity = [
        {
            heading: "Advanced Reporting & Analytics",
            description: "  Simplify hiring, tracking leaves, processing salaries, and adhering to regulations with a single integrated HRMS. mes"
        },
        {
            heading: "ERP + LMS Integration",
            description: "  You can manage student information, meal arrangements, room allocations, and occupancy with the use of simple hostel administration software. "
        },
    ]
    return (
        <>
            <div className="relative h-[calc(100vh-150px)]">
                <OverviewImg
                    imgSrc={"/assets/images/solutions/university/unversityOverview.jpg"}
                    headtext="Overview"
                    description="  Our college ERP software ensures smooth operation in every department, from admissions to alumni interaction, and is designed for independent and affiliated colleges. "
                    className="opacity-100"
                />
            </div>

            <div className="flex flex-col gap-15">
                <div className="flex flex-col gap-5 md:gap-15 md:mt-10">
                    <div>
                        <ImgInfo
                            imgSrc={"/assets/images/solutions/university/img1.jpg"}
                            heading="Multi-Campus Management"
                            description="Digitize the whole admissions process, from selecting a course to ranking candidates according to merit, confirming documentation, and collecting payments. "
                            buttonText="Read More"
                            buttonLink="/student-info"
                        />
                    </div>
                    <div className="hidden md:block">
                        <InfoImg
                            imgSrc={"/assets/images/solutions/university/img2.jpg"}
                            heading="Research & PhD Tracking"
                            description="Digitize the whole admissions process, from selecting a course to ranking candidates according to merit, confirming documentation, and collecting payments."
                            buttonText="Read More"
                            buttonLink="/student-info"
                            height="h-[400px]"
                        />
                    </div>

                    <div className="block md:hidden">
                        <ImgInfo
                            imgSrc={"/assets/images/solutions/university/img2.jpg"}
                            heading="Research & PhD Tracking"
                            description="Digitize the whole admissions process, from selecting a course to ranking candidates according to merit, confirming documentation, and collecting payments."
                            buttonText="Read More"
                            buttonLink="/student-info"
                        />
                    </div>
                    <div>
                        <ImgInfo
                            imgSrc={"/assets/images/solutions/university/img3.jpg"}
                            heading="Faculty Workload"
                            description="Manage complex payment plans, government grants, and fee schedules in an open manner with audit-ready documentation. "
                            buttonText="Read More"
                            buttonLink="/student-info"
                        />
                    </div>
                    <div className="hidden md:block">
                        <InfoImg
                            imgSrc={"/assets/images/solutions/university/img4.jpg"}
                            heading="For  Universities"
                            description="Utilize customizable grading and result processing capabilities to keep track of semesters, credits, internal assessments, and test outcomes. "
                            buttonText="Read More"
                            buttonLink="/student-info"
                            height="h-[400px]"
                        />
                    </div>

                    <div className="block md:hidden">
                        <ImgInfo
                            imgSrc={"/assets/images/solutions/university/img4.jpg"}
                            heading="For  Universities"
                            description="Utilize customizable grading and result processing capabilities to keep track of semesters, credits, internal assessments, and test outcomes. "
                            buttonText="Read More"
                            buttonLink="/student-info"
                        />
                    </div>

                    <div className="md:px-30 px-10 mt-5">
                        {
                            pointWithDescriptionUniversity.map((item, index) => (
                                <div key={index} className="">
                                    <PointsWithDescription
                                        heading={item.heading}
                                        description={item.description}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}