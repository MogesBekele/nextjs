import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Match exact route or subroutes of /mock-users
const isProtectedRoute = createRouteMatcher(["/mock-users"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); // Protect the route and redirect to sign-in if not authenticated
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
