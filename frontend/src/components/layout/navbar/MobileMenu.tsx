import { Menu, X } from "lucide-react";

type MobileMenuProps = {
    open: boolean;
    onToggle: () => void;
};

export default function MobileMenu({
    open,
    onToggle,

}: MobileMenuProps) {

    return (
        <button
        type="button"
        onClick={onToggle}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        border
        border-slate-300
        transition-colors
        hover:bg-slate-100
        lg:hidden
        
        "
        >
           {open ? (
            <X className="h-5 w-5" />
           ) : (
            <Menu className="h-5 w-5" />
           
           )}

        </button>
);
}