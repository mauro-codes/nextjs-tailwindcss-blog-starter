import React, { FunctionComponent } from "react";
import Config from "../config";
import HamburguerMenu from "./hamburguer-menu";
import NavbarLink from "./navbar-link";
import SiteLogo from "./SiteLogo";
import SocialLinks from "./social-links";

type NavbarProps = {
    showLinks?: boolean;
};

const Navbar: FunctionComponent<NavbarProps> = (props) => {
    const { showLinks = true } = props;
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);

    return (
        <nav className="bg-cool-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {showLinks && (
                            <HamburguerMenu
                                handleOnTap={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                            />
                        )}
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:justify-start">
                        <SiteLogo></SiteLogo>
                        {/* Nav buttons for desktop */}
                        <div className="hidden sm:block sm:ml-6 flex-1">
                            {showLinks && (
                                <div className="flex space-x-4">
                                    {Config.navbarLinks.map((link) => (
                                        <NavbarLink
                                            key={link.text}
                                            type="DESKTOP"
                                            text={link.text}
                                            href={link.href}
                                        ></NavbarLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="hidden md:block">
                            <SocialLinks color="#F1F5F9"></SocialLinks>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nav buttons for mobile */}
            {showLinks && (
                <div className={mobileMenuIsOpen ? "block" : "hidden"}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {Config.navbarLinks.map((link) => (
                            <NavbarLink
                                key={link.text}
                                type="MOBILE"
                                text={link.text}
                                href={link.href}
                            ></NavbarLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
