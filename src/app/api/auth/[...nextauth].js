import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
