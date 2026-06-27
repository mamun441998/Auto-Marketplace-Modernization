import { navigation } from "@/config/navigation";
import NavLink from "./NavLink";

export default function NavMenu() {
    return (
        <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) =>(
                <NavLink
                key={item.href}
                href={item.href}
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
}