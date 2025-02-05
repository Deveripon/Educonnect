import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { User } from "./models/user-model";
export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth,
} = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (credentials == null) return null;
                try {
                    const user = await User.findOne({
                        email: credentials?.email,
                    });
                    if (user) {
                        const isMatchedPassword = bcrypt.compare(
                            credentials.password === user?.password
                        );
                        if (!isMatchedPassword) {
                            throw new Error("Invalid Credentials");
                        } else {
                            return user;
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {}
            },
        }),
    ],
});
