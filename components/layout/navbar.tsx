"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const path = usePathname();
  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-sky-950 backdrop-blur-xl"
            : "bg-sky-950"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/icon.png"
              alt="Precedent logo"
              width={200}
              height={150}
              className="mr-2 rounded-sm"
            ></Image>
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <>
                {path === "/" ? (
                  <Link
                    href="/about"
                    className="nav-link cursor-pointer rounded-lg p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
                  >
                    About us
                  </Link>
                ) : (
                  <Link
                    href="/"
                    className="nav-link cursor-pointer rounded-lg p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
                  >
                    Home
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
