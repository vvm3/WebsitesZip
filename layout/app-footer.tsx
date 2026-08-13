import { SlideInOnView } from "@/components/custom/transitions/transitions";
import { DemoRequestForm } from "@/components/HomeComponent/contactForm";
import { LINKED_IN_PAGE } from "@/config";
import Link from "next/link";
import { JSX } from "react";

const AppFooter = ({ disableNavigation = false }: { disableNavigation?: boolean }): JSX.Element => {
  return (
    <>
      <DemoRequestForm />
      <footer className="bg-primary-footer text-black">
        <div className="max-w-7xl mx-auto px-16 md:px-30 py-10 border-b border-white/30 flex flex-row flex-wrap sm:justify-between md:justify-between lg:justify-between justify-center gap-12">
          {!disableNavigation && <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-3 text-xs">
              {[
                { name: "About Us", link: "/aboutus" },
                { name: "Terms of Service", link: "/privacy-policy/details?id=terms" },
                { name: "Data Security", link: "/" },
                { name: "TeachBharat", link: "/" },
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Installation Guide", link: "/guide" },
              ].map((item, idx) => (
                <li key={idx} className="border-b w-[140%] border-white/60 pb-2">
                  <Link href={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          }
          {!disableNavigation && <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-3 text-xs">
              {[
                "Blog",
                "Glossary",
                "Digital Board",
                "K-12 School",
                "Higher Education",
                "Coaching",
                "Careers"
              ].map((item, idx) => (
                <li key={idx} className="border-b w-[140%] border-white/60 pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>}
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold mb-3 text-center sm:text-start md:text-start lg:text-start">Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 text-xs">

              {!disableNavigation && <div className="min-w-[200px] leading-5 [&_*]:text-center sm:[&_*]:text-start md:[&_*]:text-start lg:[&_*]:text-start">
                <p className="font-semibold mb-2">Kolhapur</p>
                <p>OF-12, Akshar Plaza</p>
                <p>Opp. Sasne Ground, Tarabai Park</p>
                <p>Kolhapur-416001, Maharashtra, India</p>
              </div>}

              <div className="min-w-[200px] [&_*]:text-center sm:[&_*]:text-start md:[&_*]:text-start lg:[&_*]:text-start">
                <p className="font-semibold mb-2 ">Email</p>
                <p>info@serateksys.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center gap-2">
          <div className="flex flex-[50%] order-2s px-6 py-4">
            <div className="text-muted-foreground font-light px-4 text-center">COPYRIGHT &copy; SERATEK SYSTEMS PRIVATE LIMIITED </div>
          </div>
          {!disableNavigation && <div className="max-w-7xl order-1 mx-auto px-6 py-4 flex flex-[50%] 
          justify-center sm:justify-end md:justify-end lg:justify-end 
          gap-6 text-2xl text-muted-foreground 
          [&_*]:transition-all duration-300"
          >
            <SlideInOnView side="left" key={`social-icon-linkedin`} delay={0.3}><a target="_blank" rel="noreferrer noopener" href={LINKED_IN_PAGE}><i className="bi bi-linkedin hover:text-primary"></i></a></SlideInOnView>
            <SlideInOnView side="left" key={`social-icon-2`} delay={0.2}><i className="bi bi-facebook hover:text-primary"></i></SlideInOnView>
            <SlideInOnView side="left" key={`social-icon-3`} delay={0.1}><i className="bi bi-instagram
              hover:text-transparent 
              bg-clip-text 
              hover:bg-gradient-to-br 
              hover:from-pink-500
              hover:via-red-400
              hover:to-purple-600 
              transition-all 
              duration-300">
            </i>
            </SlideInOnView>
            <SlideInOnView side="left" key={`social-icon-4`} delay={0}><i className="bi bi-twitter-x hover:text-black"></i></SlideInOnView>
          </div>}
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
