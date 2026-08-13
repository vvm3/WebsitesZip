"use client";

import { useRouter } from "next/navigation";
import { PopOnView } from "@/components/custom/transitions/transitions";
import { IconInfoBoxButton } from "@/components/icon-infoBoxButton";
import { BookLock, GlobeLock, Link, NotebookPen, ReceiptText, RefreshCw, Scale } from "lucide-react";

const policies = [
  { id: "privacy", heading: "Privacy Policy", description: "SERATEK SYSTEMS PVT LTD respects your right to privacy", icon: <BookLock height={50} width={50} />, iconClassName: "text-orange-300" },
  { id: "legal", heading: "Legal Disclaimer", description: "The official website of SERATEK SYSTEMS PVT LTD is www.serateksys.com", icon: <Scale height={50} width={50} />, iconClassName: "text-yellow-300" },
  { id: "copyright", heading: "Copyright Policy", description: "Track internal grades, simplify academic processes, quickly arrange labs, and accelerate placements", icon: <NotebookPen height={50} width={50} />, iconClassName: "text-yellow-500", seprateBox: "UPDATED 2025" },
  { id: "hyperlink", heading: "Hyperlink Policy", description: "You would come across links to various Government & Non-Government websites/ Portals", icon: <Link height={50} width={50} />, iconClassName: "text-blue-300" },
  { id: "terms", heading: "Terms & Conditions", description: "You would come across links to various Government & Non-Government websites/ Portals", icon: <ReceiptText height={50} width={50} />, iconClassName: "text-yellow-700" },
  { id: "refund", heading: "Cancellation & Refund Policy", description: "You would come across links to various Government & Non-Government websites/ Portals", icon: <RefreshCw height={50} width={50} />, iconClassName: "text-blue-400" },
];

export default function PrivacyPolicyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b">
      {/* Hero Section */}
      <div className="relative flex items-center bg-primary-header h-[410px] gap-8 w-full text-white p-4 py-16 sm:p-16 md:p-16 lg:p-16">
        <div className="w-full sm:w-[70%] px-4 sm:px-6 lg:px-8 animate-accordian-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-lg text-justify md:max-w-3xl leading-relaxed opacity-90">
            &quot;We value your privacy and transparency in every interaction&quot;
          </p>
        </div>
        <div className="p-16 ml-auto hidden sm:flex md:flex lg:flex justify-center items-center">
          <GlobeLock height={200} width={200} className="rotate-350 text-primary" />
        </div>
      </div>

      {/* Policy List */}
      <div className="flex flex-col justify-center py-15 m-auto gap-10 w-[calc(100vw-100px)] md:w-[calc(100vw-400px)]">
        {policies.map((policy) => (
          <PopOnView key={policy.id}>
            <IconInfoBoxButton
              icon={policy.icon}
              heading={policy.heading}
              description={policy.description}
              iconClassName={policy.iconClassName}
              seprateBox={policy.seprateBox ?? ""}
              className="cursor-pointer"
              onClick={() => router.push(`/privacy-policy/details?id=${policy.id}`)}
            />
          </PopOnView>
        ))}
      </div>
    </main>
  );
}
