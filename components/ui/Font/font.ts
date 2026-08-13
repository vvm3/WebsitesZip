import { Poppins, Roboto, Raleway, DM_Sans, Mona_Sans, Montserrat, Inter, Lato, Open_Sans, Merriweather } from "next/font/google";
import localFont from "next/font/local";

export const RobotoFont = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

export const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export const AlexandriaFont = localFont({
    src: [
        {
            path: "../../../../public/fonts/Alexandria-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/Alexandria-ExtraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/Alexandria-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/Alexandria-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/Alexandria-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/Alexandria-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/Alexandria-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/Alexandria-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/Alexandria-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-alexandria",
    display: "swap",
});

export const RalewayFont = Raleway({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-raleway",
});

export const DMSansFont = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});


export const MonaSansFont = Mona_Sans({
    subsets: ["latin"],
    weight: [ "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-mona-sans",
});

export const MontserratFont = Montserrat({
    subsets: ["latin"],
    weight:  ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
});

export const InterFont = Inter({
    subsets: ["latin"],
    weight:  ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});

export const LatoFont = Lato({
    subsets: ["latin"],
    weight:  ["100", "300", "400", "700", "900"],
    variable: "--font-lato",
});


export const OpenSansFont = Open_Sans({
      subsets: ["latin"],
    weight:  ["300", "400", "700"],
    variable: "--font-open-sans",
})

export const MerriweatherFont = Merriweather({
      subsets: ["latin"],
    weight:  ["300", "400", "700", "900"],
    variable: "--font-merriweather",
})
