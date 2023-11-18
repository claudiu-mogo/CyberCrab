"use client";

import React from 'react'
import { Session } from "next-auth";
import UserDropdown from "./user-dropdown";
import { useSignInModal } from "./sign-in-modal";
import { useRegisterModal } from './register-in-modal';
import { usePathname } from 'next/navigation'


export default function Erou({ session }: { session: Session | null }) {
    const { SignInModal, setShowSignInModal } = useSignInModal();
    const { RegisterModal, setRegisterModal } = useRegisterModal();
    const path = usePathname();
    if (path !== '/') {
      return null; // Render nothing if not on the root page
    }
  return (
    <>
    <SignInModal/>
    <RegisterModal/>
    <div className="h-screen w-screen flex flex-col flex-grow items-center justify-center p-4">
          <video
            className="absolute left-0 top-0 h-screen w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
          <h5
            className="text-{128px} border-white  animate-fade-up bg-[conic-gradient(var(--tw-gradient-stops))] from-sky-950  to-white bg-clip-text text-center font-display font-extrabold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-xl [text-wrap:balance] md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            CyberCrab
          </h5>
          <p
            className="mt-6 block animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-sky-950 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-sky-950"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="flex max-w-fit max-h-fit items-center justify-center space-x-2 rounded-full border border-black bg-white px-5 py-2 text-sm text-black shadow-md transition-colors hover:text-white hover:bg-sky-950"
                onClick={() => setRegisterModal(true)}
              >
                Register
              </button>
            )}
          </div>
            </div>
        </div>
    </>
  )
}