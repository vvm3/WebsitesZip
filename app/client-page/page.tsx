import Image from "next/image";
import img1 from "../../../public/assets/images/client/img1.jpg";
import img2 from "../../../public/assets/images/client/img2.jpg";
import img3 from "../../../public/assets/images/client/img3.jpg";
import img4 from "../../../public/assets/images/client/img4.jpg";
import img5 from "../../../public/assets/images/client/img5.jpg";
import img6 from "../../../public/assets/images/client/img6.jpg";
import { cn } from "@/lib/utils";
import { LatoFont } from "@/components/ui/Font/font";
import ExtraLogo from "@/components/ui/icons/extraLogo";
import { Button } from "@/components/ui/button";

export default function ClientPage() {
    return (
        <>
            <h2 className={cn("flex justify-center font-[400] text-[40px] text-[#1F3965] my-10 px-10", LatoFont.className)}>Success Stories, Statements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center md:px-30 px-10 mb-10">
                <div className="relative w-full h-[300px] md:col-span-1">
                    <Image
                        src={img1}
                        alt="img1"
                        fill
                        className="rounded-[14px] object-fit"
                    />
                </div>
                <div className="relative w-full h-[300px] md:col-span-2">
                    <Image
                        src={img6}
                        alt="img2"
                        fill
                        className="rounded-[14px] object-fit"
                    />
                </div>
                <div className="relative w-full h-[300px]">
                    <Image
                        src={img3}
                        alt="img3"
                        fill
                        className="rounded-[14px] object-fit"
                    />
                </div>
                <div className="flex items-center justify-center bg-white rounded-[16px] border border-gray-200 w-full h-[300px] text-center">
                    <div>
                        <h3 className={cn("text-[30px] font-[900] text-[#1F3965]", LatoFont.className)}>
                            Those <br /> who put the <br />
                            <span className="text-[#1F3965] italic m-auto"> <ExtraLogo /> </span>
                            in ordinary
                        </h3>
                        <p className={cn("text-[#1DA1F2] text-[28px] font-[400] mt-2", LatoFont.className)}>#Success Stories</p>
                    </div>
                </div>
                <div className="relative w-full h-[300px]">
                    <Image
                        src={img4}
                        alt="img4"
                        fill
                        className="rounded-[14px] object-fit"
                    />
                </div>
                <div className="relative w-full h-[300px] md:col-span-2">
                    <Image
                        src={img2}
                        alt="img5"
                        fill
                        className="rounded-[14px] object-fit"
                    />
                </div>
                <div className="relative w-full h-[300px]">
                    <Image
                        src={img5}
                        alt="img6"
                        fill
                        className="rounded-[14px] object-fit"
                    />
                </div>
            </div>
            <div className="flex justify-center mb-10">
                <Button
                    className={cn("bg-primary-text h-[48px] w-[125px] rounded-[9999px] font-[400] text-[16px] cursor-pointer", LatoFont.className)}
                >Join Us</Button>
            </div>
        </>
    )
}