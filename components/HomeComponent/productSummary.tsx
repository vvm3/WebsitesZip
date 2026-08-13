import { cn } from "@/lib/utils";
import { PoppinsFont, RobotoFont } from "../ui/Font/font";

export const ProductSummary = () => {
    return (
        <>
            <div className="px-6 sm:px-12 md:px-12 lg:p-18" id="product-summary-section">
                <h2 className={cn("text-[48px] font-[600] mb-3 text-[#002A77]", RobotoFont.className)}>Quick Summary of Products</h2>
                <div className={cn("text-[16px] sm:text-[24px] md:text-[28px] lg:text-[28px] text-black mb-5 leading-[32px] sm:leading-[48px] md:leading-[48px] lg:leading-[48px]", PoppinsFont.className)}>
                    <p>Boosting Education with Intelligent Digital Infrastructure
                        For educational institutions, we create scalable, cloud-based <span className="text-primary-text font-[500]">Educational ERP </span> and <span className="text-primary-text font-[500]">LMS solutions</span>. Our education management solutions help institutions boost efficiency, automate procedures, and give instructors, administrators, and students a seamless online experience</p>
                </div>
            </div>
        </>
    )
}