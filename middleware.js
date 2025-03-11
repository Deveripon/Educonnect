import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import { LOGIN, PRIVATE_ROUTS } from "./routes/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isAuthenticated = !!req.auth;
    console.log(`isAuthenticated`, isAuthenticated);
    console.log(`url`, nextUrl);

    const isPrivateRoute = PRIVATE_ROUTS.find((route) =>
        nextUrl.pathname.includes(route)
    );
    if (!isAuthenticated && isPrivateRoute) {
        return NextResponse.redirect(new URL(LOGIN, req.url));
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
