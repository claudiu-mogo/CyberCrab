import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link";


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


let xp = 100
const isSpecial = xp > 10;
const features = [
  {

    title: " ",
    description: "BattlePass",
    demo: (
      <div className="overflow-x-auto">
        <div className="grid grid-flow-col grid-rows-2 gap-5 p-5 whitespace-nowrap">
          <div className={isSpecial ? "square_pass_unlocked" : "square_pass_locked"}>
            <img
              src="claw.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={isSpecial ? "square_pass_unlocked" : "square_pass_locked"}>
            <img
              src="crab_mic.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={isSpecial ? "square_pass_unlocked" : "square_pass_locked"}>
            <span className="font-mono font-bold" style={{ textShadow: "0 0 5px #fff, 0 0 10px #00f, 0 0 20px #00f" }}>
            Baby Crab</span>
          </div>
          <div className="square_pass_unlocked">
            <span className="font-mono font-bold" style={{ textShadow: "0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 20px #ffd700" }}>
            Learner Crab</span>
          </div>
          <div className="square_pass_unlocked">
            <img
              src="sticker1.png"
              style={{ width: '100px', height: '75px' }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="square_pass_unlocked">
            <img
              src="sticker2.png"
              style={{ width: '100px', height: '75px' }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="square_pass_locked">
            <span className="font-mono font-semibold">Intermediate Lvl</span>
          </div>
          <div className="square_pass_locked">
            <span className="font-mono font-semibold">Hard Lvl</span>
          </div>
          <div className="square_pass_locked">
            <img
              src="RL.png"
              style={{ width: '100px', height: '75px' }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="square_pass_locked">
            <img
              src="SO.png"
              style={{ width: '100px', height: '75px' }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="square_pass_locked">
            <span className="font-mono font-semibold">Hard Lvl</span>
          </div>
          <div className="square_pass_locked">
            <span className="font-mono font-semibold">50% Next Season</span>
          </div>
          
        </div>
      </div>
    ),
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
          <Link href="/exercise-1" className="square-container">
            <span className="font-mono font-semibold">exer 1</span>
          </Link>
          <Link href="/exercise-2" className="square-container">
            <span className="font-mono font-semibold">exer 2</span>
          </Link>
          <Link href="/exercise-3" className="square-container">
            <span className="font-mono font-semibold">exer 3</span>
          </Link>
          <Link href="/exercise-4" className="square-container">
            <span className="font-mono font-semibold">exer 4</span>
          </Link>
        </div>
      </div>
  ),
  },
  {
    title: " ",
    description: "BattlePass",
    demo: (
      <div className="overflow-x-auto">
        <div className="grid grid-flow-col grid-rows-2 gap-5 p-5 whitespace-nowrap">
          <div className="square_pass_unlocked">
            <span className="font-mono font-semibold">useIntersectionObserver</span>
          </div>
          <div className="square_pass_unlocked">
            <img
              src="crab_mic.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="square_pass_unlocked">
            <span className="font-mono font-semibold">useScroll</span>
          </div>
          <div className="square_pass_unlocked">
            <span className="font-mono font-semibold">nFormatter</span>
          </div>
          <div className="square_pass_unlocked">
            <span className="font-mono font-semibold">capitalize</span>
          </div>
          <div className="square_pass_unlocked">
            <span className="font-mono font-semibold">truncate</span>
          </div>
          <div className="square_pass_locked">
            <span className="font-mono font-semibold">useScroll</span>
          </div>
          <div className="square_pass_locked">
            <span className="font-mono font-semibold">nFormatter</span>
          </div>
          <div className="square_pass_locked">
            <span className="font-mono font-semibold">capitalize</span>
          </div>
          <div className="square_pass_locked">
            <span className="font-mono font-semibold">truncate</span>
          </div>
          
        </div>
      </div>
    ),
  },
];


