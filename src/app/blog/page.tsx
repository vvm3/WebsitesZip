import { VerticalImgInfo } from "@/components/Solutions/Vertical_ImgInfo/verticalImgInfo";
import img1 from "../../../public/assets/images/blog/images/img1.jpg";
import img2 from "../../../public/assets/images/blog/images/img2.jpg";
import img4 from "../../../public/assets/images/blog/images/img4.jpg";
import img5 from "../../../public/assets/images/blog/images/img5.jpg";
import { cn } from "@/lib/utils";
import { MerriweatherFont, RobotoFont } from "@/components/ui/Font/font";

export default function BlogPage() {
    return (
        <>
            <div className="flex flex-col md:m-5 md:gap-0 gap-10">

                <div className="lg:px-25 px-10 mt-10 flex flex-col">
                    <h2 className={cn("font-[600] mt-0 mb-0 text-primary-text text-[24px]", RobotoFont.className)}>Webinars/Events</h2>
                    <div className="flex md:flex-row flex-col gap-10">
                        <div className="md:w-1/2">
                            <VerticalImgInfo
                                imgSrc={img1}
                                heading="Best Website to research for your  next project"
                                buttonText="Read More..."
                                buttonLink="/blog"
                                className="mt-0"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <VerticalImgInfo
                                imgSrc={img2}
                                heading="Best Website to research for your  next project"
                                buttonText="Read More..."
                                buttonLink="/blog"
                                className="mt-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:px-30 px-10 flex flex-col md:-mt-20">
                    <h2 className={cn("font-[600] mt-0 mb-0 text-primary-text text-[24px]", RobotoFont.className)}>Whitepapers / eBooks </h2>
                    <div className="flex md:flex-row flex-col gap-5">
                        <div className="md:w-1/3">
                            <VerticalImgInfo
                                imgSrc={img1}
                                heading="Best Website to research for your  next project"
                                buttonText="Read More..."
                                buttonLink="/blog"
                                description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"
                                className="mt-0"
                            />
                        </div>
                        <div className="md:w-1/3">
                            <VerticalImgInfo
                                imgSrc={img4}
                                heading="Best Website to research for your  next project"
                                buttonText="Read More..."
                                buttonLink="/blog"
                                description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs "
                                className="mt-0"
                            />
                        </div>
                        <div className="md:w-1/3">
                            <VerticalImgInfo
                                imgSrc={img5}
                                heading="Best Website to research for your  next project"
                                buttonText="Read More..."
                                buttonLink="/blog"
                                description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs "
                                className="mt-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:px-30 px-10 flex flex-col mt-10">
                    <h2 className={cn("font-[600] mt-0 mb-0 text-primary-text text-[24px]", RobotoFont.className)}>Product Brochures </h2>
                    <div className="flex md:flex-row flex-col gap-5">
                        <div className="md:w-1/3">
                            <VerticalImgInfo
                                imgSrc={img1}
                                heading="Best Website to research for your  next project"
                                buttonText="Read More..."
                                buttonLink="/blog"
                                description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs"
                                className="mt-0"
                            />
                        </div>
                        <div className="md:w-1/3">
                            <VerticalImgInfo
                                imgSrc={img4}
                                heading="Best Website to research for your  next project"
                                buttonText="Read More..."
                                buttonLink="/blog"
                                description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs "
                                className="mt-0"
                            />
                        </div>
                        <div className="md:w-1/3">
                            <VerticalImgInfo
                                imgSrc={img5}
                                heading="Best Website to research for your  next project"
                                buttonText="Read More..."
                                buttonLink="/blog"
                                description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs "
                                className="mt-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:px-30 px-10 flex flex-col mt-10">
                    <h2
                        className={cn(
                            "font-[600] mt-0 mb-4 text-primary-text text-[24px]",
                            RobotoFont.className
                        )}
                    >
                        ERP Readiness Checklist
                    </h2>
                    <ul className={cn("grid grid-cols-1 md:grid-cols-2 font-[300] text-[22px] justify-center gap-20 text-[#333333]  gap-y-10", MerriweatherFont.className)}>
                        <li>How &apos;Weak Ties&apos; Can Strengthen Our Relationships</li>
                        <li>How &apos;Weak Ties&apos; Can Strengthen Our Relationships</li>
                        <li>How &apos;Weak Ties&apos; Can Strengthen Our Relationships</li>
                        <li>How &apos;Weak Ties&apos; Can Strengthen Our Relationships</li>
                        <li>How &apos;Weak Ties&apos; Can Strengthen Our Relationships</li>
                        <li>How &apos;Weak Ties&apos; Can Strengthen Our Relationships</li>
                    </ul>
                </div>

            </div>
        </>
    )
}