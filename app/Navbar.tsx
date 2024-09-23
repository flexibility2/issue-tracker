"use client";
import classnames from "classnames";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Button,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { Skeleton } from "@/app/components";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
        <Container>
          <Flex justify={"between"}>
            <Flex align={"center"} gap={"3"}>
              <Link href={"/"}>
                <AiFillBug></AiFillBug>
              </Link>
              <NavLinks />
            </Flex>
            <AuthStatus />
          </Flex>
        </Container>
      </nav>
    </>
  );
};

const NavLinks = () => {
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

  return (
    <ul className="flex space-x-6">
      {Links.map((link) => (
        <Link
          href={link.herf}
          key={link.herf}
          className={classnames({
            "nav-link": true,
            "text-zinc-900": link.herf === currentPath,
          })}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton width="3rem" height={"1.5rem"} />;
  if (status === "unauthenticated")
    return <Link href="/api/auth/signin">Login</Link>;

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="outline">
            <Avatar
              src={session!.user!.image!}
              fallback="?"
              size="2"
              radius="full"
              className="cursor-pointer"
            />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default Navbar;
