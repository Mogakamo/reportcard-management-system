import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import User, { UserSchema } from "../../../models/User";

// const isCorrectCredentials = credentials =>
//     credentials.username === process.env.NEXTAUTH_USERNAME &&
//     credentials.password === process.env.NEXTAUTH_PASSWORD

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null;
                    // You can also Reject this callback with an Error or with a URL:
                    // throw new Error("error message") // Redirect to error page
                    // throw "/path/to/redirect"        // Redirect to a URL
                }
            },
        }),
    ],

    adapter: Adapter.TypeORM.Adapter(
        process.env.MONGODB_URI,
        {
            models: {
                User: { model: User, schema: UserSchema },
                // User: Model.User
            }
        }
    )
});