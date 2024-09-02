'use client';
import classnames from "classnames";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();
  const Links = [
    {
      herf: "/",
      label: "Dashborad",
    },
    {
      herf: "/issues",
      label: "issues",
    },
  ];

  return (
    <>
      <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
        <Link href={"/"}>
          <AiFillBug></AiFillBug>
        </Link>
        <ul className="flex items-center space-x-6">
          {Links.map((link, index) => (
            <Link
              href={link.herf}
              key={index}
              className={classnames({
                'text-zinc-900': link.herf === currentPath,
                'text-zinc-500': link.herf !== currentPath,
                'hover:text-zinc-800 transition-colors': true
              })} 
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
