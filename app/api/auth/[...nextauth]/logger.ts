import { LoggerInstance } from "next-auth";

export const logger: Partial<LoggerInstance> ={
    debug(code,metadata){
        console.info(`AUTH DEBUG - Code: ${code} Info: ${metadata}`)
    },
    error(code,metadata){
        console.error(`AUTH ERROR - Code: ${code} Info: ${metadata}`)
    },
    warn(code){
        console.warn(`AUTH WARN - Code: ${code}`)
    }
}