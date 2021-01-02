import React from "react";
import HamburguerMenu from "./hamburguer-menu";
import NavbarLink from "./navbar-link";

const Navbar = () => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false)

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <HamburguerMenu handleOnTap={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}/>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            {/* Logo for Mobile */}
							<img
                                className="block lg:hidden h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
							{/* Logo for desktop */}
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavbarLink type="DESKTOP" text="Link 1" active={true}></NavbarLink>
                                <NavbarLink type="DESKTOP" text="Link 2"></NavbarLink>
                                <NavbarLink type="DESKTOP" text="Link 3"></NavbarLink>
                                <NavbarLink type="DESKTOP" text="Link 4"></NavbarLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu options */}
            <div className={mobileMenuIsOpen ? 'block' : 'hidden'}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavbarLink type="MOBILE" text="Link 1" active={true}></NavbarLink>
                    <NavbarLink type="MOBILE" text="Link 2"></NavbarLink>
                    <NavbarLink type="MOBILE" text="Link 3"></NavbarLink>
                    <NavbarLink type="MOBILE" text="Link 4"></NavbarLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
