import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { headerLinks } from "@/constans";
import { MenuIcon, MountainIcon } from "../Icons";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <MenuIcon className="size-6" />
          <span className="sr-only">
            Toggle navigation menu
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] bg-white p-4 dark:bg-gray-950"
      >
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center"
            prefetch={false}
          >
            <MountainIcon className="size-6" />
            <span className="ml-2 text-lg font-semibold">
              Acme Inc
            </span>
          </Link>
          <SheetClose />
        </div>
        <nav className="grid gap-4">
          {headerLinks.map((link, i) => (
            <Link
              key={i}
              href={link.route}
              className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
