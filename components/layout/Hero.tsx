import React from "react";
import Erou from "./erou";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Hero() {
  const session = await getServerSession(authOptions);
  return <Erou session={session} />;
}