import { log } from "console";
import { Account, CallbacksOptions, Profile, User } from "next-auth"

export const callbacks:Partial<CallbacksOptions<Profile, Account>> | undefined = {
    async jwt({token,user}){
        if(user){
            token.id = (user as User).id;
            token.name = user.name;
        }

        return token
    },
    async session({ session, token, user }) {
        log(`SESSION USER: ${user}`)
        return {
            ...session,
            user: {
            ...session.user,
            id: token.id as string,
            name: token.name
            },
        };
    },
    async redirect({url,baseUrl}){
        log(`REDIRECT BASEURL: ${baseUrl}`)
        log(`REDIRECT URL: ${url}`)
        return url;
    }
}