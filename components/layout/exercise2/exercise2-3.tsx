import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Exercise23() {
  return (
    <div className="z-10 flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-6 p-4 text-4xl font-bold text-white">
        Audio Retrieval
      </h1>

      <p className="mb-4 p-4 text-white text-center">
        Acum se poate auzi destul de clar mesajul.
        Ai reușit astfel să salvezi mineriul blocat, aflând conținutul înregistrării.
	Felicitări, ai parcurs cu succes încă un ghid CyberCrab.
      </p>
      <Link
        className="nav-link cursor-pointer rounded-lg bg-sky-950 p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
        href="/"
      >
        Finalizează lecția
      </Link>
    </div>
  );
}
