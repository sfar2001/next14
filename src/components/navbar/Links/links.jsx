import Link from "next/link"
import styles from "./links.module.css"
import NavbarLink from "./NavbarLink/NavbarLink"
const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "About",
            path: "/about",
        },
    ];
    return (

        <div className={styles.links}>
            {links.map((link => (
                <NavbarLink item={link} key={link.title} />
            )))}
        </div>
    )
}

export default Links