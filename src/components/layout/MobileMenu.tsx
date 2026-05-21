"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  "technology",
  "business",
  "sports",
  "science",
  "entertainment",
  "health",
];

export default function MobileMenu({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95"
    >
      <div className="container-main py-10">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-3xl text-white">
            ×
          </button>
        </div>

        <nav className="mt-20 flex flex-col gap-8">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/category/${item}`}
              onClick={onClose}
              className="editorial-title text-5xl uppercase text-white"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
