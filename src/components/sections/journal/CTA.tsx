import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative flex h-[520px] w-full flex-col items-center justify-center bg-white border-b-8 border-loren-primary">
      <h2 className="mb-10 text-center font-dmSerifDisplay text-5xl md:text-6xl lg:text-7xl text-loren-black leading-tight tracking-[0.01em]">
        Designed Beyond <br /> Seasons
      </h2>

      <Link href="/collection">
        <Button variant="primary" className="px-6 py-4 text-xs md:px-8 md:py-6 md:text-sm">EXPLORE COLLECTIONS</Button>
      </Link>
    </section>
  );
}
