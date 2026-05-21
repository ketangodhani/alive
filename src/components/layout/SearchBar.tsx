"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {

  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {

    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center"
    >

      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full border border-zinc-700 bg-black px-4 py-2 text-sm outline-none transition focus:border-white"
      />

    </form>
  );
}