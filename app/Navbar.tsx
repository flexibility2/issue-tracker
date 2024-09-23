"use client";
import classnames from "classnames";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

const Navbar = () => {
  const currentPath = usePathname();
  const Links = [
    {
      herf: "/",
      label: "Dashborad",
    },
    {
      herf: "/issues/list",
      label: "issues",
    },
  ];
  const { status, data: session } = useSession();

  return (
    <>
      <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
        <Container>
          <Flex justify={"between"}>
            <Flex align={"center"} gap={"3"}>
              <Link href={"/"}>
                <AiFillBug></AiFillBug>
              </Link>
              <ul className="flex items-center space-x-6">
                {Links.map((link, index) => (
                  <Link
                    href={link.herf}
                    key={index}
                    className={classnames({
                      "text-zinc-900": link.herf === currentPath,
                      "text-zinc-500": link.herf !== currentPath,
                      "hover:text-zinc-800 transition-colors": true,
                    })}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </Flex>
            <Box>
              {status === "authenticated" && (
                <Link href={"/api/auth/signout"}>Log out</Link>
              )}
              {status === "unauthenticated" && (
                <Link href={"/api/auth/signin"}>Log in</Link>
              )}
            </Box>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
