"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy text-white shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Soojal Kumar
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition hover:text-cyan-300 ${
                isActive(pathname, link.href)
                  ? "border border-sky-400 text-cyan-300 shadow-[0_0_0_1px_rgba(14,165,233,0.35)]"
                  : "text-slate-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="rounded-md p-2 text-slate-100 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-800 px-5 py-3 md:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  isActive(pathname, link.href) ? "bg-slate-800 text-cyan-300" : "text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
