import { RalewayFont, RobotoFont } from "@/components/ui/Font/font";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
interface InfoCardProps {
  imgSrc: StaticImageData | string;
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  height?: string;
}

// export const InfoImg = ({
//   imgSrc,
//   heading,
//   description,
//   buttonText = "Read More",
//   buttonLink,
// }: InfoCardProps) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 p-5 md:p-0">
//       <div className="w-full flex flex-col gap-5 md:justify-center md:w-[464px]">
//         <h4
//           className={cn(
//             "text-[24px] md:text-[28px] font-[700] text-[#333333]",
//             RalewayFont.className
//           )}
//         >
//           {heading}
//         </h4>
//         <p
//           className={cn(
//             "text-[#666666] font-[400] mb-2 text-[16px] md:text-[24px] leading-relaxed max-w-[464px]",
//             RobotoFont.className
//           )}
//         >
//           {description}
//         </p>
//         <a
//           href={buttonLink}
//           className={cn(
//             "w-[125px] h-[40px] px-6 py-2 md:px-[48px] md:py-[16px] inline-flex items-center justify-center rounded-[8px] border border-[#002A77] text-[#002A77] hover:bg-blue-100 transition text-[14px] font-[700] whitespace-nowrap",
//             RobotoFont.className
//           )}
//         >
//           {buttonText}
//         </a>
//       </div>
//       <div className="w-full relative aspect-[16/9] md:w-[464px] md:h-[328px]">
//         <Image
//           src={imgSrc}
//           alt={heading}
//           fill
//           className="rounded-lg md:rounded-[16px] object-cover"
//         />
//       </div>
//     </div>
//   );
// };


export const InfoImg = ({
  imgSrc,
  heading,
  description,
  buttonText = "Read More",
  buttonLink,
}: InfoCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-5">
      <div className="w-full lg:w-1/2 flex flex-col gap-5 max-w-[500px]">
        <h4
          className={cn(
            "text-[22px] sm:text-[24px] lg:text-[28px] font-[700] text-[#333333]",
            RalewayFont.className
          )}
        >
          {heading}
        </h4>
        <p
          className={cn(
            "text-[#666666] font-[400] mb-2 text-[14px] sm:text-[16px] lg:text-[20px] leading-relaxed",
            RobotoFont.className
          )}
        >
          {description}
        </p>
        <a
          href={buttonLink}
          className={cn(
            "mt-auto w-[125px] h-[40px] px-6 py-2 md:px-[48px] md:py-[16px] inline-flex items-center justify-center rounded-[8px] border border-[#002A77] text-[#002A77] hover:bg-blue-100 transition text-[14px] font-[700] whitespace-nowrap",
            RobotoFont.className
          )}
        >
          {buttonText}
        </a>
      </div>

      <div className="w-full lg:w-1/2 relative aspect-[16/9] max-w-[500px]">
        <Image
          src={imgSrc}
          alt={heading}
          fill
          className="rounded-lg lg:rounded-[16px] object-cover"
        />
      </div>
    </div>
  );
};
