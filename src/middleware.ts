import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Match /mock-users and its subroutes
const isProtectedRoute = createRouteMatcher(["/mock-users(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); // Automatically redirects to sign-in if not authenticated
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
