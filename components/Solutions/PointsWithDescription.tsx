import { cn } from "@/lib/utils";
import { Card } from "@radix-ui/themes";
import { DMSansFont, RalewayFont } from "../ui/Font/font";

type PointsWithDescriptionProps = {
  heading: string;
  description: string;
};

export const PointsWithDescription = ({ heading, description }: PointsWithDescriptionProps) => {
  return (
    <Card className="m-auto mb-7">
      <h4 className={cn("font-[700] text-[#333333] text-[24px] mb-2", RalewayFont.className)}>{heading}</h4>
      <ul className="text-[#717171] font-[400] text-[20px] list-disc list-inside ">
        <li className={cn(DMSansFont.className)}>{description}</li>
      </ul>
    </Card>
  );
};
