import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import { verifyMessage, getUser } from '../../../utils/auth';
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'MoralisAuth',
            credentials: {
                message: {
                    label: 'Message',
                    type: 'text',
                    placeholder: '0x0',
                },
                signature: {
                    label: 'Signature',
                    type: 'text',
                    placeholder: '0x0',
                },
            },
            async authorize(credentials) {
                try {
                    const { user } = await verifyMessage(credentials.message, credentials.signature);
                    const token = user.token;
                    const userData = await getUser(token)
                    return userData;
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.expires = token.user.expirationTime;
            session.user = token.user;
            return session;
        },
    },
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/',
    },
});