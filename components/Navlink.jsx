"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
  const path = usePathname();
  console.log(path);
  return (
    <Link className={path.startsWith(href) && "text-orange-500 "} href={href}>
      {children}
    </Link>
  );
};

export default Navlink;
