import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Exercise12() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 p-4 text-4xl font-bold text-white">
        Osint pentru imagini - context cu poza si geografie
      </h1>

      <p className="mb-4 p-4 text-white text-center">
        Până să îți pot răspunde la întrebare trebuie să analizăm datele
        problemei: O poză cu formatul .png Conținutul acesteia (o poză cu doi
        cai și un peisaj superb)
      </p>

      <p className="mb-4 p-4 text-white text-center">
        Prietenul tău probabil s-a folosit de a doua informație, dar noi ne vom
        folosi de prima. Fișierele de tip imagine au de cele mai multe ori
        informații legate de acestea salvate înăuntrul lor. Aceste informații se
        numesc metadate, prin definiție niște date despre date. Pentru
        vizualizarea acestora vom folosi pentru început o unealtă online
        (<a href="https://www.metadata2go.com/">https://www.metadata2go.com/</a>), iar mai apoi vom explora o altă metodă.
        Aici putem observa printre alte detalii chiar ce ne interesează pe noi:
      </p>

      <Image
        className="mb-4 "
        src="/steppe2.jpeg"
        alt="poza cu o tara"
        width={700}
        height={500}
      ></Image>

      <Link
        className="nav-link cursor-pointer rounded-lg bg-sky-950 p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
        href="/exercise-1/3"
      >
        Pasul urmator
      </Link>
    </div>
  );
}
