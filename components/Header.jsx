import Link from "next/link";

import { Button } from "./ui/button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Amit<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav & hire me button */}
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
          <Button>Hire me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
