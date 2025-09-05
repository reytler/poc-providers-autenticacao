"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function FormLogin(){
    const [usuario,setUsuario] = useState("")
    const [senha,setSenha] = useState("")
    const [loading,setLoading] = useState(false)
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault()
        setLoading(true)

        const result = await signIn("credentials", {
            redirect: false,
            usuario,
            senha,
        });
        setLoading(false)
        if(result?.ok){
            router.push("/")
        }
    }

    return(
        <main>
            <b><h1>Login</h1></b>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <Label>Usuário:</Label>
                    <Input type="text" value={usuario} onChange={(e)=>setUsuario(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Senha:</Label>
                    <Input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                </div>
                <Button type="submit">{!loading ? "Fazer Login" : "Carregando..."}</Button>
            </form>
        </main>
    )
}