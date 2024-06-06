"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
  },
  {
    id: 3,
    name: "Resume",
    path: "/resume",
  },
  {
    id: 4,
    name: "Work",
    path: "/work",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}{" "}
    </nav>
  );
};

export default Nav;
