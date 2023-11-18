import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "CyberCrab",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim dui, sagittis nec convallis id, aliquam quis lectus. Cras euismod orci ut pharetra convallis. Proin ullamcorper odio non mauris aliquet rhoncus. Nullam id hendrerit lacus. Donec venenatis quam velit, nec ullamcorper dolor aliquam ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras viverra augue quis laoreet gravida. Ut eleifend est dolor, sed posuere diam faucibus vitae. Vivamus laoreet, velit ac mattis faucibus, lorem mauris blandit tellus, nec rhoncus nisi nulla tempor sapien. Donec at euismod lacus. Nullam molestie volutpat urna, at finibus nunc sagittis volutpat. Nulla arcu lorem, consectetur eu luctus vitae, aliquet faucibus felis. Ut sollicitudin eleifend elit eu mollis.",
  metadataBase: new URL("https://cybercrab.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
