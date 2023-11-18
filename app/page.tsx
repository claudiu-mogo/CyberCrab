import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";


export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div className="mt-4 flex flex-col flex-grow items-center justify-center p-4">
          <video
            className="absolute left-0 top-0 h-0 w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
          <h5
            className="text-{128px} animate-fade-up bg-[conic-gradient(var(--tw-gradient-stops))] from-sky-950  to-white bg-clip-text text-center font-display font-extrabold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            CyberCrab
          </h5>
          <p
            className="mt-6 block animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <button
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-sky-950 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-sky-950"
            rel="noopener noreferrer"
          >
            <p>Login</p>
          </button>
          <button
            className="flex max-w-fit max-h-fit items-center justify-center space-x-2 rounded-full border border-black bg-white px-5 py-2 text-sm text-black shadow-md transition-colors hover:text-white hover:bg-sky-950"
            rel="noopener noreferrer"
          >
            <p>Register</p>
            </button>
            </div>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Our CTF challenges",
    description:
      "Here are our 4 ctf challenges:",
    demo: (
      <div>
        <div className="grid grid-flow-col grid-rows-2 gap-10 p-10">
          <button className="square-container">
            <span className="font-mono font-semibold">exer 1</span>
          </button>
          <button className="square-container">
            <span className="font-mono font-semibold">exer 2</span>
          </button>
          <button className="square-container">
            <span className="font-mono font-semibold">exer 3</span>
          </button>
          <button className="square-container">
            <span className="font-mono font-semibold">exer 4</span>
          </button>
        </div>
      </div>
  ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];


