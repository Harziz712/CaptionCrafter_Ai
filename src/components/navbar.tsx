import { useState } from "react";
import { NavLinks } from "../data/dict";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 md:p-10 flex flex-col md:grid md:grid-cols-4 justify-center items-center gap-4">
      <div className="w-full flex justify-between items-center md:block">
        <h2 className="font-extrabold text-lg md:text-2xl col-span-1">
          CaptionCrafter_AI
        </h2>
        
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2" aria-label="Toggle menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-10">
              <div className="flex flex-col space-y-4 mt-6">
                {NavLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </a>
                ))}
                <button className="text-sm py-2">Login</button>
                <button className="rounded-full bg-black text-white py-2 px-4 text-sm mt-2">
                  Sign up
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block md:col-span-2">
        <div className="border-2 border-white-800 w-full h-[60px] rounded-full bg-blue-50/40">
          <nav className="w-full flex justify-center items-center gap-10 h-full px-4">
            {NavLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-center text-sm text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                {link.title}
              </a>
            ))}
            <button className="text-sm">Login</button>
            <button className="rounded-full bg-black text-white py-2 px-4 text-sm">
              Sign up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;