// import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";
//! ovo služi za overwrite internih Nextovih interface-a

declare module "next-auth" {
  //! u mom slučaju id u Useru od next-auth će biti number a ne string, "metoda authorize"
  //! u app\api\register\auth\[...nextauth]\options.ts baca TS error
  //! zato sam pregazio Next-ov interface User sa mojim
  interface User {
    id: number;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
