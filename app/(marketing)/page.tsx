import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import { Montserrat, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = Montserrat({ subsets: ["latin"] });
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center rounded-full border bg-indigo-500/10 p-4 uppercase text-indigo-700 shadow-sm">
          <Medal className="mr-2 size-6" />
          N°1 Task Manager
        </div>
        <h1 className="mb-6 text-center text-3xl font-bold text-neutral-800 md:text-6xl">
          Loap helps teams to be efficient.
        </h1>
        <div className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pb-4 pt-2 text-3xl font-semibold text-white md:text-6xl">
          work forward
        </div>
      </div>
      <div
        className={cn(
          "mx-auto mt-4 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl",
          textFont.className
        )}
      >
        Collaborate, manage projects and tasks, and track progress with Loap.
        From the smallest task to the biggest project, Loap helps you get more
        done.
      </div>
      <Button className="mt-8" size="lg" asChild>
        <Link href="/sign-up">Get Loap for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
