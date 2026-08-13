'use client';
import { SCROLLAREA_BODY_ID_SUFFIX, SERATEK_BODY_ID } from "@/config";

export const handleScrollToDemoForm = () => {
    const nextSection = document.getElementById("RequestDemo");
    const body = document.getElementById(`${SERATEK_BODY_ID}-${SCROLLAREA_BODY_ID_SUFFIX}`);

    if (nextSection && body) {
        const offset = 100; // change this to your desired pixel offset
        const elementPosition = nextSection.getBoundingClientRect().top + body.scrollTop;
        const offsetPosition = elementPosition - offset;

        body.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
};