import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth"

var handler = NextAuth(authOptions)
export { handler as GET, handler as POST };