"use client";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";

interface IndividualLink {
  href: string;
  name: string;
}
const links = require("@/app/constants");
const navBarLinks: IndividualLink[] = links.navBarLinks;

const Navbar = () => {
  const currPath = usePathname();
  return (
    <nav className="flex space-x-5 border-b h-14 items-center px-2 mb-5">
      <Link href="/">
        <AiFillBug className="text-slate-400 hover:text-emerald-400 transition-colors" />
      </Link>
      <ul className="flex space-x-2">
        {navBarLinks.map((link) => (
          <li key={link.href}>
            <Link
              // className="text-slate-400 hover:text-slate-200 transition-colors"
              className={classnames({
                "text-white": currPath === link.href,
                "text-slate-400": currPath !== link.href,
                "hover:text-slate-200 transition-colors": true,
              })}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
