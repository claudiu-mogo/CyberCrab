import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Exercise41() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 text-4xl font-bold text-white p-4">
        Side-Channel Attack
      </h1>

      <p className="mb-4 text-white p-4 text-center">
        ACEST TIP DE EXERCITIU VA FI DISPONIBIL INCEPAND CU SEZONUL VIITOR
      </p>
      <p className="mb-4 text-white p-4 text-center">
        Un side-channel attack (atac pe canal lateral) este o metodă de atac cibernetic în care atacatorul încearcă să obțină informații relevante
        prin analiza unor canale secundare sau, mai bine zis, de la nivelul fizic, care sunt generate în timpul funcționării unui sistem.
      </p>
      <p className="mb-4 text-white p-4 text-center">
        Un side-channel attack (atac pe canal lateral) este o metodă de atac cibernetic în care atacatorul încearcă să obțină informații relevante
        prin analiza unor canale secundare sau, mai bine zis, de la nivelul fizic, care sunt generate în timpul funcționării unui sistem.
      </p>
      <Image
        className="mb-4 "
        src="/sidech.png"
        alt="poza cu un atac"
        width={500}
        height={300}
      ></Image>
      <p className="mb-4 text-white p-4 text-center">
        Exemple concrete: Analiză a Consumului de Energie, Atac de Analiză a Timpului, Analiză Electromagnetică
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
