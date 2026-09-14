import { useState } from "react";
import logo from "../assets/logo-text.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
       
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

       
        <a href="#top" className="flex items-center md:mr-8">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
        </a>

        
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? "#top" : `#${link.toLowerCase()}`}
              className={
                index === 0
                  ? "text-sm font-medium text-pink-600"
                  : "text-sm font-medium text-slate-600 hover:text-slate-900"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-xs font-medium text-slate-700 hover:text-slate-900 sm:text-sm">
            Sign In
          </button>
          <button className="brand-gradient-bg rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-5 py-3 md:hidden">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? "#top" : `#${link.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
