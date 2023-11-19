"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getGlobalVariable, setGlobalVariable } from '../globals';

export default function Exercise24() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 p-4 text-4xl font-bold text-white">
        Forensics attack
      </h1>

      <p className="mb-4 p-4 text-white">
        Odată ce am descărcat arhiva, putem băga parola obținută din primul pachet:
      </p>
      <Image
        className="mb-4 "
        src="/arhiva.jpeg"
        alt="poza cu hex1"
        width={300}
        height={400}
      ></Image>
      <p className="mb-4 p-4 text-white">
        Felicitări, ai parcurs cu succes încă un ghid CyberCrab.
      </p>
      <Link
        className="nav-link cursor-pointer rounded-lg bg-sky-950 p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
        href="/"
        onClick={() => {
          setGlobalVariable(getGlobalVariable() + 25);
        }}
      >
        Finalizează lecția
      </Link>
    </div>
  );
}
