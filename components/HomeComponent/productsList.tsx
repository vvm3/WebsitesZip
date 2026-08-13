import { cn } from "@/lib/utils";
import { PoppinsFont, RobotoFont } from "../ui/Font/font";

export const ProductsList = () => {
    const products = [
        "Admission CRM",
        "Handling the Student Lifecycle",
        "Faculty site",
        "Parents' and Students' Mobile App",
        "Learning Management System (LMS)",
        "Exam Automation Tool",
        "Fee Payment Gateway Integration"
    ];


    return (
        <div className="w-full flex justify-center items-center">
            <div className="p-6 rounded-2xl text-center mt-10 bg-primary/20 border-none w-max">
                <h2 className={cn("text-[32px] font-[600] mb-6 mt-5 text-primary-text", RobotoFont.className)}>Know the products</h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10 cursor-default">
                    {products.sort((a, b) => a.length - b.length).map((item, idx) => (
                        <div
                            key={idx}
                            className={cn("px-2 py-2 md:px-5 md:py-4 rounded-lg text-[18px] bg-[#FFFFFF]  text-[#444D61] border-none border-[#BABABA] hover:shadow-xl hover:bg-primary-header hover:text-[white] hover:transition-all duration-500", PoppinsFont.className)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
