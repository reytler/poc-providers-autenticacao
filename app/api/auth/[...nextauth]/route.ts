import NextAuth from "next-auth";
import { callbacks } from "./calbacks";
import { providers } from "./providers";
import { pages } from "./pages";
import { logger } from "./logger";

const handler =  NextAuth({
    callbacks,
    providers,
    pages,
    logger
})

export {handler as GET, handler as POST}