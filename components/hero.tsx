import { FunctionComponent } from "react";
import Config from "../config";
import SocialLinks from "./social-links";

const Hero: FunctionComponent = () => {
    return (
        <div className="max-w-7xl mx-auto mb-24">
            <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
                <div className="flex flex-col items-center lg:items-start">
                    <SocialLinks color="#000000" height="h-7"></SocialLinks>
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span>techblog</span>
                        <span className="text-indigo-600 xl:inline">.dev</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        {Config.blogDescription}
                    </p>
                    <div className="my-4">

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Hero;
