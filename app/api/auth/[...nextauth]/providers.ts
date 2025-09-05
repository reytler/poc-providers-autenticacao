import { randomUUID } from "crypto";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { Provider } from "next-auth/providers/index";

export const providers: Provider[] = [
    Credentials({
        name:"credentials",
        credentials:{
            usuario: {label: "Usuario",type:"text",placeholder:"seunome"},
            senha: {label: "Senha",type:"password"}
        },
        async authorize(credentials){
            const user = {id:randomUUID(),name: credentials?.usuario}

            if(user){
                return user
            }

            return null
        }
    }),
    Github({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!
    }),
]