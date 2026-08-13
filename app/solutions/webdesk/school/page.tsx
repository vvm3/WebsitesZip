import { VerticalImgInfo } from "@/components/Solutions/Vertical_ImgInfo/verticalImgInfo";
import { ImgInfo } from "@/components/Solutions/Horizontal_ImgInfo/imgInfo";
import { InfoImg } from "@/components/Solutions/Horizontal_ImgInfo/infoImg";


export default function SchoolPage() {
    return (
        <>
            <div className="relative flex bg-primary-header h-max gap-8 w-full text-white p-4 py-16 sm:p-16 md:p-16 lg:p-16">
                <div className="w-full sm:w-[70%] md:w-[70%] lg:w-[70%] px-4 sm:px-6 lg:px-8 animate-accordian-down">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive ERP Solution for Schools </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-lg text-justify md:max-w-5xl leading-relaxed opacity-90">
                        Our cloud-based school ERP software is made for modern
                        businesses who want to make everyday chores more digital.
                        All school types and education boards can use our system,
                        which makes managing student data and parent contact easy.
                    </p>
                </div>
                {/* <div className="p-16 ml-auto hidden sm:flex md:flex lg:flex justify-center items-center">
                    <Image height={200} width={200} className="rotate-15" src={"/assets/images/appIcons/info.png"} alt="info" />
                </div> */}
            </div>
            {/* <div className="relative h-[calc(100vh - 90px)] mt-5">
                <OverviewImg
                    imgSrc={bgImg}
                />
                <OverviewText
                    title="Overview"
                    description="Our cloud-based school ERP software is made for modern 
                                 businesses who want to make everyday chores more digital. 
                                All school types and education boards can use our system, 
                                which makes managing student data and parent contact easy."
                />
            </div> */}
            <div className="flex flex-col gap-15">
                <div className="flex flex-col gap-5 md:gap-15 md:mt-10">
                    <div>
                        <ImgInfo
                            imgSrc={"/assets/images/solutions/school/img1.jpg"}
                            heading="Student Information System"
                            description="Easily keep track of student profiles, attendance, performance, and disciplinary information in a consolidated, secure database."
                            buttonText="Read More"
                            buttonLink="/student-info"
                        />
                    </div>
                    {/* <InfoImg
                        imgSrc="/assets/images/solutions/img2.jpg"
                        heading="Management of Admissions"
                        description="Streamline and digitize the admissions process by using a single dashboard to monitor applicants, document uploads, and approvals. "
                        buttonText="Read More"
                        buttonLink="/student-info"
                    /> */}
                    <div className="hidden lg:block ">
                        <InfoImg
                            imgSrc={"/assets/images/solutions/school/img2.jpg"}
                            heading="Management of Admissions"
                            description="Streamline and digitize the admissions process by using a single dashboard to monitor applicants, document uploads, and approvals."
                            buttonText="Read More"
                            buttonLink="/student-info"
                        />
                    </div>
                    <div className="block lg:hidden">
                        <ImgInfo
                            imgSrc={"/assets/images/solutions/school/img2.jpg"}
                            heading="Management of Admissions"
                            description="Streamline and digitize the admissions process by using a single dashboard to monitor applicants, document uploads, and approvals."
                            buttonText="Read More"
                            buttonLink="/student-info"
                        />
                    </div>
                    <div>
                        <ImgInfo
                            imgSrc={"/assets/images/solutions/school/img3.jpg"}
                            heading="Fee Management"
                            description="Automate online payments, receipts, late fee notifications, and fee collection with real-time financial reports"
                            buttonText="Read More"
                            buttonLink="/student-info"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 px-5 lg:px-15">
                    <div className="md:w-1/3">
                        <VerticalImgInfo
                            imgSrc={"/assets/images/solutions/school/img4.jpg"}
                            date="13 June 2025"
                            heading="Academic & Exam Management"
                            description="Make original report cards, plan lessons, and keep tabs on students' progress for both online and offline assessments."
                            buttonText="Read More..."
                            buttonLink="/student-infmd:o"
                        />
                    </div>
                    <div className="md:w-1/3">
                        <VerticalImgInfo
                            imgSrc={"/assets/images/solutions/school/img5.jpg"}
                            date="01 July 2025"
                            heading="Parent-Teacher Communication "
                            description="To bridge the communication gap, send out real-time updates by SMS, email, or a mobile app.   Sharing notices, assignments, attendance, and progress reports is simple."
                            buttonText="Read More..."
                            buttonLink="/student-info"
                        />
                    </div>
                    <div className="md:w-1/3">
                        <VerticalImgInfo
                            imgSrc={"/assets/images/solutions/school/img6.jpg"}
                            date="15 August 2025"
                            heading="Transportation"
                            description="A single system combines GPS tracking, vehicle information, bus route monitoring, and student safety alarms. "
                            buttonText="Read More..."
                            buttonLink="/student-info"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}