"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

// Mock policy data
const policies = [
  {
    id: "privacy",
    heading: "Privacy Policy",
    descriptionLine: "SERATEK SYSTEMS PVT LTD respects your right to privacy",
    description: `When you visit the official website of the SERATEK SYSTEMS PVT LTD www.serateksys.com the following information may be collected from you, either voluntarily or involuntarily: Your computer or network’s IP address, which must be validated in order for you to access the official website of the SERATEK SYSTEMS PVT LTD; Your email address and message when you communicate electronically with us; Information about your visit is gathered in an aggregate manner for quality control, security and improvement of our website. Your information is kept confidential, unaltered, and used only by SERATEK SYSTEMS PVT LTD to administer your request. SERATEK SYSTEMS PVT LTD does not disclose or sell any personally identifiable information collected at this website to other companies or organisations`
  },
  {
    id: "legal",
    heading: "Legal Disclaimer",
    descriptionLine: "The official website of SERATEK SYSTEMS PVT LTD is www.serateksys.com",
    description: `All the contents of this website are only for general information or use SERATEK SYSTEMS PVT LTD excludes any warranty, express or implied, as to the quality, accuracy and completeness of the website. SERATEK SYSTEMS PVT LTD will not be liable for any damages arising from the use of this website. The copyright of the proprietary material contained in this website remains solely with SERATEK SYSTEMS PVT LTD. SERATEK SYSTEMS PVT LTD may provide, as a convenience, links to websites operated by other entities and persons, but does not endorse or accept any responsibility for the content, or the use of such websites.`
  },
  {
    id: "copyright",
    heading: "Copyright Policy",
    descriptionLine: "This website and its content is the Copyright of SERATEK @SERATEK SYSTEMS PVT. LTD All rights reserved",
    description: `Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following :-  
    1. You may print or download to a local hard disk, extracts for your personal and non-commercial use only.
    2. You may copy the content to individual third parties for their personal use, but only if you acknowledge the website as the source of the material.
    3. You may not, except with our express written permission, distribute or commercially exploit the content. Nor may you transmit it or store it in any other website or other form of electronic retrieval system.`
  },
  {
    id: "hyperlink",
    heading: "Hyperlink Policy",
    descriptionLine: "You would come across links to various Government & Non-Government websites/ Portals ",
    description: `At many places in this website and these are provided for easy access and convenience. SERATEK SYSTEMS PVT LTD is not responsible for the contents and reliability of the listed websites / portals and does not necessarily endorse the views expressed in them. We cannot guarantee that these links will work all the time and we do not have any control over the availability of the contents and information of the associated pages of these website / portal linkages. websites.`
  },
  {
    id: "terms",
    heading: "Terms & Conditions",
    descriptionLine: "The Website Owner, including subsidiaires and affilates",
    description: `A(“Website” or “Website Owner” or “we” or “us” or “our”) provides the information contained on the website or any of the pages comprising the website (“website”) to visitors (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website. 
Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern SERATEK SYSTEMS PVT LTD relationship with you in relation to this website. 
The term ‘SERATEK SYSTEMS PVT LTD’ or ‘us’ or ‘we’ refers to the owner of the website whose registered/operational office is OF-12, Akshar Plaza, Opp. Sasne Ground, Tarabai Park, Kolhapur-416003 MAHARASHTRA. The term ‘you’ refers to the user or viewer of our website. 
The use of this website is subject to the following terms of use: 
The content of the pages of this website is for your general information and use only. It is subject to change without notice. 
Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law. 
Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements. 
This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. 
All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website. 
Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence. 
From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. 
You may not create a link to this website from another website or document without SERATEK SYSTEMS PVT LTD prior written consent. 
Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority. 
We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time 
  
Cancellation & Refund Policy No cancellations & Refunds are entertained for the payments made to the SERATEK SYSTEMS PVT LTD `
  },
  {
    id: "refund",
    heading: "Cancellation & Refund Policy",
    description: "You would come across links to various Government & Non-Government websites/ Portals"
  },
];

export default function PrivacyPolicyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params ? params.id : "" as string;

  const selectedPolicy = policies.find((p) => p.id === id);

  useEffect(() => {
    // Scroll to the top on page load
    window.scrollTo(0, 0);
  }, []);

  if (!selectedPolicy) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <p className="text-lg text-gray-700">Policy not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 p-6">
      <div className="max-w-4xl max-h-[400px] bg-white shadow-lg rounded-xl p-8 border-l-4 border-primary-text overflow-auto">
        <h1 className="text-3xl font-semibold text-primary-text mb-4">{selectedPolicy.heading}</h1>

        {selectedPolicy.descriptionLine && (
          <h4 className="text-lg text-gray-600 mb-4">{selectedPolicy.descriptionLine}</h4>
        )}

        <p className="text-sm text-gray-700 leading-relaxed text-justify whitespace-pre-line mb-6">
          {selectedPolicy.description}
        </p>

        <div className="flex justify-start">
          <button
            onClick={() => router.push("/privacy-policy")}
            className="p-2 px-3 bg-primary-text cursor-pointer text-white rounded-lg shadow-md focus:outline-none transition-all duration-300"
          >
            Back to Policies
          </button>
        </div>
      </div>
    </main>
  );
}
