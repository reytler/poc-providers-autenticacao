"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { logoutAuth } from "./api/auth/[...nextauth]/authFunctions";

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className="flex flex-col w-full justify-center items-center h-[100vh]">
      <Button onClick={()=>logoutAuth()}>Sair</Button>
      <h1>Olá, {session?.user?.name}</h1>
    </main>
  );
}
