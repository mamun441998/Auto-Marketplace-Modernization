import Link from "next/link";

import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      <Link href="/register">
        <Button
          className="
            w-full
            sm:w-auto
            px-8
            py-3
            text-base
            shadow-lg
            shadow-blue-600/20
            hover:-translate-y-0.5
            hover:shadow-xl
            hover:shadow-blue-600/30
          "
        >
          Start Free Trial
        </Button>
      </Link>

      <Link href="/contact">
        <Button
          variant="outline"
          className="
            w-full
            sm:w-auto
            px-8
            py-3
            text-base
            hover:-translate-y-0.5
            hover:border-blue-300
            hover:bg-blue-50
          "
        >
          Book Demo
        </Button>
      </Link>

    </div>
  );
}