import Link from "next/link";

const menuItems = [
  "Technology",
  "Business",
  "India",
  "World",
  "Sports",
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
              {item}
            </Link>
          ))}
        </nav>

        <button className="text-zinc-300 hover:text-white">
          Search
        </button>
      </div>
    </header>
  );
}