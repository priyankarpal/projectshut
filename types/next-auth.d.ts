import NextAuth, { DefaultSession } from 'next-auth'
declare module 'next-auth' {
 interface Token {
   access: JWT 
 }
  interface Session {
    accessToken: JWT 
  }
}