import { ReactNode } from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="h-full bg-slate-100">
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className="pb-20 pt-40">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default MarketingLayout;
