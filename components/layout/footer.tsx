import Image from "next/image";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-white">
        A project by{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
        >
        </a>
      </p>
      <a className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-sky-950 px-6 py-2 transition-all duration-75 hover:scale-105"
        href="https://github.com/ReGeLePuMa/CyberCrab"
        target="_blank"
        rel="noopener noreferrer"
        >
      <Image
              src="/icon.png"
              alt="Precedent logo"
              width= {200}
              height = {150}
              className="mr-2 rounded-sm"
            ></Image> 
      </a>
    </div>
  );
}
