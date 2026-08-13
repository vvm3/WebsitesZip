import { cn } from "@/lib/utils";
import { MonaSansFont, RobotoFont } from "../ui/Font/font";

export const ClientTestimonials = () => {
    const testimonials = [
        {
            "clientName": "ABC",
            "words": "The transition to their ERP went well, and the support personnel are excellent.   We've saved hours of hard labor each week."
        },
        {
            "clientName": "PQR",
            "words": "The transition to their ERP went well, and the support personnel are excellent.   We've saved hours of hard labor each week."
        }, {
            "clientName": "XYZ",
            "words": "The transition to their ERP went well, and the support personnel are excellent.   We've saved hours of hard labor each week."
        },
        {
            "clientName": "EFG",
            "words": "The transition to their ERP went well, and the support personnel are excellent.   We've saved hours of hard labor each week."
        },
    ];


    return (
        <>
            <h2 className={cn("text-[32px] text-center leading-15 font-[600] mb-5 text-primary-header", RobotoFont.className)}>Client Testimonials</h2>
            <div className="text-center px-5 py-10 w-[100%] bg-primary-header flex flex-wrap justify-center  gap-2">
                {testimonials.map((item, idx) => (
                    <div key={idx} className="w-[290px] p-4 bg-[#FFFFFF] rounded-[10px]">
                        <div className="flex items-center mb-5 gap-5">
                            <div className="h-[36px] bg-[#B59898] w-[36px]"></div>
                            <h2 className={cn("font-[700] text-[16px] text-[#444D61]", MonaSansFont.className)}>{item.clientName}</h2>
                        </div>
                        <p className={cn("font-[400] text-[16px] text-[#798397] text-left", MonaSansFont.className)}>{item.words}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
