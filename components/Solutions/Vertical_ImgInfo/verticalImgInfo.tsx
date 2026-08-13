import { RalewayFont, RobotoFont } from "@/components/ui/Font/font";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface VerticalInfoProps {
  imgSrc: StaticImageData | string;
  heading: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  date?: string;
  className?: string;
}

export const VerticalImgInfo = ({
  imgSrc,
  heading,
  description,
  buttonText,
  buttonLink,
  date,
  className,
}: VerticalInfoProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full md:max-h-[300px] h-[300px] mt-5 md:mt-0">
        <Image
          src={imgSrc}
          alt={heading}
          fill
          className="rounded-[16px] object-cover"
        />
      </div>

     <div className="flex flex-col space-y-3 px-2 md:min-h-[375px] lg:min-h-[275px] sm:min-h-[100px]">
        {date && (
          <p
            className={cn(
              "text-[#999999] h-[18px] font-[500] text-[12px]",
              RobotoFont.className
            )}
          >
            {date}
          </p>
        )}

        <h3
          className={cn(
            "text-[#333333] font-[700] text-[20px] md:text-[22px]",
            RalewayFont.className
          )}
        >
          {heading}
        </h3>

        {description && (
          <p
            className={cn(
              "text-[#666666] text-[16px] sm:h-[120px] font-[400]",
              RobotoFont.className
            )}
          >
            {description}
          </p>
        )}
        <a
          href={buttonLink}
          className={cn(
            "text-sm font-[700] mt-auto text-[18px] underline text-primary-text tracking-wide",
            RobotoFont.className, className
          )}
        >
          {buttonText}
        </a>
      </div> 






       {/* <div className="flex flex-col space-y-3 px-2 md:min-h-[375px] lg:min-h-[275px] sm:min-h-[100px]">
        {date && (
          <p
            className={cn(
              "text-[#999999] h-[18px] font-[500] text-[12px]",
              RobotoFont.className
            )}
          >
            {date}
          </p>
        )}
        <h3
          className={cn(
            "text-[#333333] font-[700] text-[20px] md:text-[22px]",
            RalewayFont.className
          )}
        >
          {heading}
        </h3>
        <p
          className={cn(
            "text-[#666666] mt-auto text-[16px] sm:h-[120px] font-[400]",
            RobotoFont.className
          )}
        >
          {description}
        </p>
        <a
          href={buttonLink}
          className={cn(
            "mt-auto text-sm font-[700] text-[18px] underline text-[#002A77] tracking-wide",
            RobotoFont.className
          )}
        >
          {buttonText}
        </a>
      </div>  */}
    </div>
  );
};
