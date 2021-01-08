import { FunctionComponent } from "react";

const SiteLogo: FunctionComponent = () => {
    return (
        <div className="flex-shrink-0 flex items-center">
            {/* Logo for Mobile */}
            <a href="/">
                <img
                    className="block lg:hidden h-10 w-auto"
                    src="/techblog-logo-mobile.png"
                    alt="Workflow"
                />
            </a>
            {/* Logo for desktop */}
            <a href="/">
                <img
                    className="hidden lg:block h-32 w-auto"
                    src="/techblog-logo.png"
                    alt="Workflow"
                />
            </a>
        </div>
    );
};

export default SiteLogo
