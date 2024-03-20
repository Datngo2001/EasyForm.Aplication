import { AuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }) {
            if (account) {
                token.idToken = account.id_token;
                token.sub = account.userId;
            }
            return token
        },
        async session({ session, token, user }) {
            return { ...session, idToken: token.idToken } as AppSession;
        }
    }
}

export interface AppSession extends Session {
    idToken?: string
}