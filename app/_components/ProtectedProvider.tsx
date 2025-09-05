"use client"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function ProtectedProvider({children}:{children: ReactNode}){
    const pathname = usePathname();
    const { status } = useSession({
    required: true,
    onUnauthenticated() {
        if (pathname !== "/login" && status !== "authenticated") {
            redirect("/login")
        }
    },
  })
  console.log("status: ",status)
  switch(status){
    case "loading":
        if (pathname !== "/login") {
            return <h1>Carregando...</h1>
        }else{
            return children
        }
        break;
    case "authenticated":
        return children
        break;
    default:
        return 
        break;
  }
}