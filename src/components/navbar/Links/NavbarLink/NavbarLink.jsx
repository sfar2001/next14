"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styels from "./NavbarLink.module.css"
import links from "../links"
const NavbarLink = ({ item }) => {

    const pathName = usePathname();
    return (
        <Link href={item.path} className={`${styels.container} ${pathName === item.path && styels.active}`} >
            {item.title}
        </Link>
    );
};
export default NavbarLink