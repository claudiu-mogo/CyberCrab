import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Exercise13() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 p-4 text-4xl font-bold text-white">
        Osint pentru imagini - context cu poza si geografie
      </h1>

      <p className="mb-4 p-4 text-white">
        Cealaltă metodă este una din linia de comandă, un mediu bazat pe text,
        fără interfață grafică, cu care de-a lungul timpului veți deveni cei mai
        buni prieteni.
      </p>

      <p className="mb-4 p-4 text-white">
        Pentru moment, doar o să-ți arăt cum se extrag metadatele dintr-o poză:
      </p>

      <Image
        className="mb-4 "
        src="/stepp3.jpeg"
        alt="poza cu o tara"
        width={400}
        height={300}
      ></Image>
      <p className="mb-4 p-4 text-white">Destul de tare, nu?</p>
      <Link
        className="nav-link cursor-pointer rounded-lg bg-sky-950 p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
        href="/exercise-1/4"
      >
        Pasul urmator
      </Link>
    </div>
  );
}
