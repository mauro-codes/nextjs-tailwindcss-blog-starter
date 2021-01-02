import React, { FunctionComponent } from "react";
import Link from "next/link";

type NavbarLinkProps = {
    type: "MOBILE" | "DESKTOP";
    href?: string;
    text: string;
    active?: boolean;
    openInNewTab?: boolean;
};

const NavbarLink: FunctionComponent<NavbarLinkProps> = (props) => {
    const { type, href = "#", text, openInNewTab = false, active = false } = props;

    const getStylesForMobileLinks = (): string => {
        return active
            ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
    };

    const getStylesForDesktopLinks = (): string => {
        return active
            ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
    };

    if (type === "DESKTOP") {
        return (
            <Link href={href}>
                <a className={getStylesForDesktopLinks()}>{text}</a>
            </Link>
        );
    }

    // Link for mobile
    return (
        <Link href={href}>
            <a className={getStylesForMobileLinks()}>{text}</a>
        </Link>
    );
};

export default NavbarLink;
