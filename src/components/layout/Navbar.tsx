import Link from "next/link";
import SearchBar from "./SearchBar";

const menuItems = [
   "technology",
  "business",
  "sports",
  "science",
  "entertainment",
  "health",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="container-main flex h-16 items-center justify-between">
        
        <Link
          href="/"
          className="editorial-title text-4xl tracking-wider"
        >
          ALIVE
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/category/${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wide text-zinc-300 hover:text-white transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        <SearchBar />
      </div>
    </header>
  );
}