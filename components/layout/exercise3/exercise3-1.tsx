import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Exercise31() {
  return (
    <div className="z-20 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 text-4xl font-bold text-white p-4">
        Forensics attack
      </h1>

      <p className="mb-4 text-white p-4 text-center">
        Bine ai revenit la un exercițiu de pe CyberCrab:
        Astăzi vei învăța despre fișierele de capturi de pachete (.pcap) și vei afla cum o aplicație care nu e făcută cu grijă poate duce la o breșă de securitate.
        Imaginează-ți că prietenul tău a ascuns niște fișiere importante într-o arhivă. Acesta vrea să-ți trimită arhiva pe un server făcut de tine, pe care l-ați testat în prealabil și ați aflat că transferul de date este funcțional.
        Totuși, unul dintre cunoscuții voștri mai puțin apropiați a reușit să intercepteze atât arhiva și să afle conținutul secret al acesteia.
        Din fericire, ați trimis doar o arhivă de test, pentru că vă așteptați la un astfel de scenariu.
        Totuși, începi investigarea, astfel încât să îți securizezi serverul.
        Întâi o să descărcăm captura de pachete ce a avut loc odată cu transferul vostru:

      </p>
      <Link href="https://cdn.discordapp.com/attachments/1175511706127056956/1175586864493760543/recv.pcap?ex=656bc595&is=65595095&hm=8aa3d1b52893f9d5c643ef36765920587e512c217ec120d958f397c3e14fbd2c&">
        Download pcap file
      </Link>
      <p className="mb-4 text-white p-4 text-center">Mergi la următorul pas.</p>
      <Link
        className="nav-link cursor-pointer bg-sky-950 rounded-lg p-2 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sky-950"
        href= "/exercise-3/2">
        Pasul urmator
        </Link>
    </div>
  );
}
