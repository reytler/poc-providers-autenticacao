import { signOut, SignOutParams } from "next-auth/react";

const options:SignOutParams = {
    redirect: true,
    callbackUrl:"/login"
}
export function logoutAuth(){
    signOut(options)
}