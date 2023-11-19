import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Exercise21() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 text-4xl font-bold text-white p-4">
        Audio Retrieval
      </h1>

      <p className="mb-4 text-white p-4 text-center">
        Bine ai revenit la un exercițiu de pe CyberCrab:
Astăzi vei învăța despre schimbat frecvențe, operații matematice pe semnale
audio, sau mai simplu: să te joci cu fișiere audio.
	Doi mineri s-au aventurat într-o peșteră periculoasă care nu a mai fost explorată anterior. Astfel, aceștia au decis ca unul dintre ei să stea afară, pentru a putea facilita comunicarea cu echipa de recuperare și a-l urmări conform hărții (prea puțin documentate) pe care o aveau la dispoziție.
	O abordare bună pentru securitate, însă nu suficientă pentru a preveni eșecul.
	Aceștia au folosit stații de comunicare prin semnale radio.
	Totuși, la un moment dat, minerului din peșteră i s-a stricat partial stația și a început să producă mesaje ciudate, greu de descifrat.
Cel din afară te-a chemat pe tine, expert în acest domeniu ca să îl ajuți.
Sunt și eu cu tine, în caz că ai nevoie de o mână în plus.


      </p>
      
      <p className="mb-4 text-white p-4">Mergi la următorul pas.</p>
      <Link
        className="nav-link cursor-pointer bg-sky-950 rounded-lg p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
        href= "/exercise-2/2">
        Pasul urmator
        </Link>
    </div>
  );
}
