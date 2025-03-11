import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { authConfig } from "./auth.config";
export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth,
} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
                role: {},
            },
            authorize: async (credentials) => {
                if (credentials == null) return null;
                console.log(`credentials from nextAuth`, credentials);
                return credentials;
            },
        }),
        Google,
    ],
});
