"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
  "technology",
  "business",
  "sports",
  "science",
  "entertainment",
  "health",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur transition-colors duration-300 dark:border-zinc-800 dark:bg-black/80">
        <div className="container-main flex h-16 items-center justify-between">
          <Link href="/" className="editorial-title text-4xl tracking-wider text-zinc-900 dark:text-white">
            ALIVE
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`/category/${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wide text-zinc-650 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-white"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SearchBar />
            </div>

            <ThemeToggle />

            <button onClick={() => setIsOpen(true)} className="md:hidden text-zinc-900 dark:text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
