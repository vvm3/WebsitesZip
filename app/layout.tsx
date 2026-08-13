import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { cn } from "@/lib/utils";
import AppProvider from "@/context/AppContext";
import AppLayout from "@/layout/app-layout";
import { SUPPORT_EMAIL_ADDRESS } from "../../lib/config";
import { parseEnvFlag } from "../../lib/env";
import { AlexandriaFont } from "@/components/ui/Font/font";

export const metadata: Metadata = {
  title: "Complete Educational ERP Platform for Colleges | Seratek Systems",
  metadataBase: new URL("https://serateksys.com"),
  description:
    "Seratek is a unified ERP platform designed to support affiliated colleges, autonomous institutions, and universities with end-to-end modules covering admissions, academics, examinations, promotions, leave management, and alumni engagement.",
  keywords: [
    "Seratek",
    "College ERP",
    "University ERP",
    "Autonomous College ERP",
    "Affiliated College ERP",
    "Higher Education ERP",
    "Academic Management System",
    "Admission ERP",
    "Examination Management System",
    "College Administration Software",
  ],
  openGraph: {
    title: "Seratek",
    description:
      "Webdesk ERP platform tailored for affiliated colleges, autonomous institutions, and universities — managing the complete academic and administrative lifecycle.",
    type: "website",
    images: [
      {
        url: "/assets/images/appIcons/seratekLogoWithBg.png",
        width: 1200,
        height: 630,
        alt: "Seratek Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const underDevelopment = parseEnvFlag(process.env.UNDER_DEVELOPMENT);
  const underMaintenance = parseEnvFlag(process.env.UNDER_MAINTENANCE);
  const contactFormEnabled = parseEnvFlag(process.env.ENABLE_CONTACT_FORM);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/assets/images/appIcons/seratek.png?height=32&width=24"
        />
      </head>
      <body
        className={`${cn(AlexandriaFont.className)} !p-0 !m-0 overflow-hidden`}
      >
        <AppProvider
          underDevelopment={underDevelopment}
          underMaintenance={underMaintenance}
          supportEmail={SUPPORT_EMAIL_ADDRESS}
          contactFormEnabled={contactFormEnabled}
        >
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}
