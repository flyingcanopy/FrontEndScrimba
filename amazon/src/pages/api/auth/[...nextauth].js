import NextAuth from "next-auth"
import Providers from 'next-auth/providers'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: '1027119335601-11c7hvlbr20g99aih14lgo47uk48lksh.apps.googleusercontent.com',
      clientSecret: 's0vMTxcCngPqTS_5gTs1-9-5'
    })
  ],
})