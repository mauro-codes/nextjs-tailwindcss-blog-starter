import { FunctionComponent } from "react";
import Config from "../config";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @param color uses the tailwind text-color utility to define which color you want to apply to your social links
 * @param height uses the tailwind height utility to define the size you want to apply to the icons
 */
type SocialLinksProps = {
    color?: string;
    height?: string;
};

const SocialLinks: FunctionComponent<SocialLinksProps> = (props) => {
    const { color = "#FFF", height = "h-5" } = props;
    const { socialLinks } = Config;
    return (
        <div className="flex items-center">
            {socialLinks.map((link) => (
                <Link href={link.url}>
                    <a target="_blank">
                        <FontAwesomeIcon
                            icon={link.icon}
                            className={`mx-4 block ${height}`}
                            color={color}
                        ></FontAwesomeIcon>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default SocialLinks;
