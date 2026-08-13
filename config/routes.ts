import { Users, Building2, University, Building, CircleQuestionMark, BriefcaseBusiness, Lightbulb, Sparkles } from "lucide-react"
import React, { ComponentType } from "react";

export interface IMenuItem {
    label: string;
    icon: ComponentType<React.SVGProps<SVGSVGElement>>;
    submenus?: ISubmenu[];
    href?: string;
}

export interface ISubmenu {
    name: string;
    value: string;
    items: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
    {
        label: "Solutions",
        icon: Lightbulb,
        submenus: [
            {
                name: "Webdesk",
                value: "webdesk",
                items: [
                    { label: "For Universities", icon: University, href: "/solutions/webdesk/university" },
                    { label: "For Colleges", icon: Building, href: "/solutions/webdesk/college" },
                    // { label: "For Schools", icon: Backpack, href: "/solutions/webdesk/school" },
                ],
            },
        ],
    },
    { label: "Features", href: "/features", icon: Sparkles },
    { label: "Contact", icon: Users, href: "/contact" },
    {
        label: "Company",
        icon: Building2,
        submenus: [{
            name: "Company",
            value: "aboutus",
            items: [
                { label: "About Us", icon: CircleQuestionMark, href: "/aboutus" },
                { label: "Careers", href: "/careers", icon: BriefcaseBusiness },
            ],
        }],
    },
]
