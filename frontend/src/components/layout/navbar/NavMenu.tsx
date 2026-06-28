import { navigation } from "@/config/navigation";
import NavLink from "./NavLink";

export default function NavMenu() {
  return (
    <nav
      className="
        absolute
        left-1/2
        hidden
        -translate-x-1/2
        items-center
        gap-12
        lg:flex
      "
    >
      {navigation.map((item) => (
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