import React, { FunctionComponent } from "react";
import Link from "next/link";

export type NavbarLinkProps = {
    type?: "MOBILE" | "DESKTOP";
    href?: string;
    text: string;
    openInNewTab?: boolean;
};

const NavbarLink: FunctionComponent<NavbarLinkProps> = (props) => {
    const { type = "DESKTOP", href = "#", text, openInNewTab = false } = props;

    const getStylesForMobileLinks = (): string => {
        return "text-cool-gray-300 dark:text-cool-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
    };

    const getStylesForDesktopLinks = (): string => {
        return "text-cool-gray-300 dark:text-cool-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
    };

    return (
        <Link href={href}>
            <a
                className={
                    type === "DESKTOP" ? getStylesForDesktopLinks() : getStylesForMobileLinks()
                }
            >
                {text}
            </a>
        </Link>
    );
};

export default NavbarLink;
