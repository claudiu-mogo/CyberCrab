import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Exercise32() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 p-4 text-4xl font-bold text-white">
        Forensics attack
      </h1>

      <p className="mb-4 p-4 text-white text-center">
        Pentru a deschide fișierele de acest tip, vei avea nevoie de un program numit 
        (<a href="https://www.wireshark.org/">Wireshark</a>)
      </p>

      <p className="mb-4 p-4 text-white text-center">
        Odată instalat, când vei deschide fișierul atașat vei avea afișat pe ecran ceva de genul:
      </p>

      <Image
        className="mb-4 "
        src="/Wireshark_ss.jpeg"
        alt="poza cu pcap"
        width={900}
        height={400}
      ></Image>
      <p className="mb-4 p-4 text-white text-center">
        Dacă analizăm aceste pachete vom observa că două dintre ele sunt mai interesante:
        unul conține textul “parolă”, scris în clar:
      </p>
    <Image
        className="mb-4 "
        src="/parola.jpeg"
        alt="poza cu parola"
        width={400}
        height={200}
      ></Image>

        <p className="mb-4 p-4 text-white text-center">
        unul conține un text ciudat, care conține “file.txt”:
      </p>

    <Image
        className="mb-4 "
        src="/zipul.jpeg"
        alt="poza cu zip binar"
        width={200}
        height={50}
      ></Image>
      <p className="mb-4 p-4 text-white text-center">
        Știu, e posibil să pară un pic înfricoșător, dar caracterele acelea ciudate nu sunt nimic care ar trebui să ne sperie.

        Dacă acest pachet conține “file.txt”, iar noi știm că acesta este singurul fișier din arhivă, putem deduce că este posibil ca acest pachet să conțină arhiva noastră.

      </p>
      <div className="flex">
        <Link
            className="ml-auto nav-link cursor-pointer rounded-lg bg-sky-950 p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
            href="/exercise-3/3"
        >
            Pasul urmator
        </Link>
        </div>
            </div>
  );
}
