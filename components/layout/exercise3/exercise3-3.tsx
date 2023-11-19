import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Exercise33() {
  return (
    <div className="z-10 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 p-4 text-4xl font-bold text-white">
        Forensics attack
      </h1>

      <p className="mb-4 p-4 text-white text-center">
        Ok, am stabilit că e posibil ca acel pachet să conțină arhiva, dar cum o putem recupera?
	Putem copia conținutul hexadecimal (o altă bază de reprezentare a datelor, față de cea standard, cu care suntem obișnuiți) prin urmatoarea acțiune:
      </p>

      <Image
        className="mb-4 "
        src="/hex1.jpeg"
        alt="poza cu hex1"
        width={500}
        height={75}
      ></Image>

      <p className="mb-4 p-4 text-white text-center">
        Știu, și acestea arată ciudat, dar măcar sunt doar caractere de la 0-9 și a-f.
	Rămâne de făcut un singur pas pentru descărcarea arhivei și anume introducerea acestui text în hexadecimal într-un editor dedicat, cum ar fi  (<a href="https://hexed.it/">hexed.it</a>)
	Aici putem introduce textul copiat anterior:
      </p>

      <Image
        className="mb-4 "
        src="/hex2.jpeg"
        alt="poza cu o tara"
        width={400}
        height={300}
      ></Image>
      <p className="mb-4 p-4 text-white text-center">Mai departe, vom folosi butonul de “Export” pentru salvarea arhivei</p>
      <Link
        className="nav-link cursor-pointer rounded-lg bg-sky-950 p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
        href="/exercise-3/4"
      >
        Pasul urmator
      </Link>
    </div>
  );
}
