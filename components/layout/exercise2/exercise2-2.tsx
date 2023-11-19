import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Exercise22() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 p-4 text-4xl font-bold text-white">
        Audio Retrieval
      </h1>

      <p className="mb-4 p-4 text-white text-center">
        Ai vorbit cu minerul de afară și ți-a pus la dispoziție ultima înregistrare pe care a primit-o de la cel dinăuntru înainte ca acesta să rămână fără baterie. Poți descifra conținutul acesteia?
      </p>

      <Link href="https://we.tl/t-JXGS8WMFrm">
        Download wav file
      </Link>
      

      <p className="mb-4 p-4 text-white text-center">
        Dupa cum ne asteptam, audio-ul este distorsionat, iar abordarea principala pentru a recrea macar partial fisierul original
        este sa schimbam elementele de baza ale unui semnal continuu: frecventa, amplitudinea, shiftarea.
        Pentru ca fisierul este in formatul ".wav", putem utiliza biblioteca scipy din python pentru a schimba usor datele semnalului.
      </p>

        <p className="mb-4 p-4 text-white text-center">
        In primul rand, presupunem ca frecventa audio-ului este gresita, asa ca incercam sa il aducem la parametri normali. Ulterior putem
        imparti mesajul in fragmente de timp dupa frecventa respectiva:
      </p>

    <Image
        className="mb-4 "
        src="/freq.jpeg"
        alt="poza cu frecventa"
        width={400}
        height={200}
      ></Image>
      <p className="mb-4 p-4 text-white text-center">
        Dupa fiecare pas scriem fisierul intr-un fisier .wav si il ascultam. Inca pare bruiat. Cea mai effective metoda de a schimba in mod clar
        continutul mesajului este shiftarea semnalului. Folosim formula lui Euler pentru lucrul cu semnale:
      </p>
      <Image
        className="mb-4 "
        src="/euler.jpeg"
        alt="poza cu euler"
        width={400}
        height={200}
      ></Image>
      <p className="mb-4 p-4 text-white text-center">
        Acum continutul audio-ului este destul de clar, dar parca este in soapta. Putem mari amplitudinea pentru a rezolva aceasta problema:
      </p>
      <Image
        className="mb-4 "
        src="/amplitude.jpeg"
        alt="poza cu amplitudine"
        width={400}
        height={200}
      ></Image>
      <div className="flex">
        <Link
            className="ml-auto nav-link cursor-pointer rounded-lg bg-sky-950 p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
            href="/exercise-2/3"
        >
            Pasul urmator
        </Link>
        </div>
            </div>
  );
}
