import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { NavbarLinkProps } from "./components/navbar-link"

type SocialLinkProps = {
    icon: IconProp,
    url: string
}

type ConfigProps = {
    socialLinks: SocialLinkProps[],
    navbarLinks: NavbarLinkProps[]
    blogDescription: string
}

// config.ts
const Config: ConfigProps = {
    socialLinks: [
        {
            icon: faTwitter,
            url: "#"
        },
        {
            icon: faInstagram,
            url: "#"
        }
    ],
    navbarLinks: [
        {
            text: "Link 1",
            href: "#"
        },
        {
            text: "Link 2",
            href: "#"
        },
        {
            text: "Link 3",
            href: "#"
        },
        {
            text: "Link 4",
            href: "#"
        },
        {
            text: "Link 5",
            href: "#"
        }
    ],
    blogDescription: "I write tech articles about my side-projects"
}

export default Config