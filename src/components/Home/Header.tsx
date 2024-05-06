import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";

type MenuItemType = {
  title: string;
  href: string;
  isActive: boolean;
};

const Header = () => {
  const router = useRouter();
  console.log(router.asPath);
  const menues: MenuItemType[] = [
    {
      title: "Home",
      href: "/",
      isActive: router.asPath.includes("/"),
    },
    {
      title: "Fetures",
      href: "/Fetures",
      isActive: router.asPath.includes("Home"),
    },
    {
      title: "Pricing",
      href: "/Pricing",
      isActive: router.asPath.includes("Home"),
    },
    {
      title: "Blog",
      href: "/Blog",
      isActive: router.asPath.includes("Home"),
    },
    {
      title: "Be",
      href: "/Be",
      isActive: router.asPath.includes("Home"),
    },
  ];
  return (
    <div className="flex flex-row items-center gap-4 pt-[85px]">
      {menues.map((menuItem, index) => (
        <Link
          href={menuItem.href}
          className={clsx("", {
            "text-white": menuItem.isActive,
            "text-gray-400": !menuItem.isActive,
          })}
        >
          {menuItem.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
