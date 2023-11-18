import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Exercise11() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 text-4xl font-bold text-white p-4">
        Osint pentru imagini - context cu poza si geografie
      </h1>

      <p className="mb-4 text-white p-4">
        Salutare și bine ai venit la primul tău laborator de securitate
        cibernetică de pe platforma CyberCrab! Astăzi vei învăța de ce este
        securitate importantă, printr-un exercițiu care arată cât de ușor este
        să găsești informații dacă știi unde să te uiți. Fă pariul următor cu un
        prieten bun la geografie: Ce țară este cea din poză?
      </p>

      <Image
        src="/steppe.png"
        alt="poza cu o tara"
        width={400}
        height={300}
      ></Image>
      <p className="mb-4 text-white p-4">
        Cel mai probabil răspuns pe care îl vei primi, va fi Mongolia, un
        răspuns greșit. Tu ca viitor expert în securitate, nu doar că vei putea
        să identifici țara în care s-a făcut poza, ci vei afla coordonatele
        exacte ale acesteia.
      </p>

      <p className="mb-4 text-white p-4">Te întrebi cum? Mergi la următorul pas.</p>
      <Link
        className="nav-link cursor-pointer bg-sky-950 rounded-lg p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
        href= "/exercise-1/2">
        Pasul urmator
        </Link>
    </div>
  );
}
