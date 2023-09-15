import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error(`Error on /api/login: ${res.statusText}`);
        }

        const { access, refresh } = await res.json();

        const userRes = await fetch(
          `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/users/me/`,
          {
            headers: { Authorization: `JWT ${access}` },
          }
        );

        if (!userRes.ok) {
          throw new Error(`Error en /auth/users/me/: ${userRes.statusText}`);
        }

        const userData = await userRes.json();

        console.log(userData);

        const user = {
          id: userData.id,
          email: userData.email,
          name: userData.username,
          image: userData.picture,
          banner: userData.banner,
          role: userData.role,
          verified: userData.verified,
          accessToken: access,
          refreshToken: refresh,
          address: "",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      return { ...token, ...user };
    },

    async session({ session, token }: any) {
      session.user = token as any;
      return session;
    },
  },
};

export const GET = NextAuth(authOptions as any);
export const POST = NextAuth(authOptions as any);
