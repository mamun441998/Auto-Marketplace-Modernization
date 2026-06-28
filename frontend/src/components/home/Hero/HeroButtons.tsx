import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link href="/register">
        <Button className="w-full sm:w-auto">
          Start Free Trial
        </Button>
      </Link>

      <Link href="/contact">
        <Button
          variant="outline"
          className="w-full sm:w-auto"
        >
          Book Demo
        </Button>
      </Link>
    </div>
  );
}