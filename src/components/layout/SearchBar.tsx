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
        className="w-40 rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm text-zinc-800 placeholder-zinc-400 outline-none transition-all duration-300 focus:border-zinc-500 focus:bg-white dark:border-zinc-700 dark:bg-black dark:text-zinc-300 dark:placeholder-zinc-500 dark:focus:border-white dark:focus:bg-black"
      />

    </form>
  );
}