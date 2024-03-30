import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Meetify"
          className="max-sm:size-10"
        />
        <p className="text-[26] font-extrabold text-white max-sm:hidden">
          Meetify
        </p>
      </Link>

      <div className="flex-between gap-5">
      <SignedIn>
      <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
