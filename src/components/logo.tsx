import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/images/loap-logo.svg" alt="Logo" height={64} width={64} />
        <p
          className={cn(
            "pb-0 text-lg font-bold text-neutral-700",
            headingFont.className
          )}
        >
          .pm
        </p>
      </div>
    </Link>
  );
};
