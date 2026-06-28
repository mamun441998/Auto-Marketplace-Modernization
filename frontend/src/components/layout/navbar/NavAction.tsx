import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NavAction() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <Link href="/login">
        <Button variant="outline">
          Sign In
        </Button>
      </Link>

      <Link href="/register">
        <Button>
          Get Started
        </Button>
      </Link>
    </div>
  );
}