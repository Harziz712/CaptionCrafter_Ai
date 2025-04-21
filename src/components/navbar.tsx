import { useState } from "react";
import { NavLinks } from "../data/dict";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 md:p-10 flex flex-col md:grid md:grid-cols-4 justify-center items-center gap-4">
      <div className="w-full flex justify-between items-center md:block">
        <h2 className="font-extrabold lg:text-lg md:text-md col-span-1">
          CaptionCrafter.AI
        </h2>
        
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden ">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2" aria-label="Toggle menu">
                <Menu size={32} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-10 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 border-l-5 border-white-800">
              <div className="flex flex-col space-y-4 mt-6 justify-center items-center">
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
                <button className="rounded-full bg-black text-white py-2 px-8 text-sm mt-2">
                  Sign up
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block xl:col-span-2 lg:col-span-3 md:col-span-3 ">
        <div className="border-2 border-white-800 w-full h-[60px] rounded-full bg-blue-50/40">
          <nav className="w-full flex justify-around items-center  lg:gap-10 md:gap-5 h-full px-4">
            {NavLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-center lg:text-sm md:text-xs text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                {link.title}
              </a>
            ))}
            <button className="text-sm text-purple-600"><a href="#">Login</a></button>
            <button className="rounded-full bg-purple-500 text-blue-50 py-2 px-4 text-sm">
              <a href="#">Sign up</a>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;