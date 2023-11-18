import React from "react";
import Link from "next/link";

export default function Exercise14() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 p-4 text-4xl font-bold text-white">
        Osint pentru imagini - context cu poza si geografie
      </h1>

      <p className="mb-4 p-4 text-white">
        Reține totuși că nu toate pozele au toate informațiile pe care ți le
        dorești (cum ar fi coordonatele) în metadate, dar mereu poți afla ceva
        nou cu o analiză de genul acesta.
      </p>
      <p className="mb-4 p-4 text-white">
        Felicitări, ai parcurs cu succes primul tău ghid CyberCrab.
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
