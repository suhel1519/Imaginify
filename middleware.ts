import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/api/webhooks/clerk']
})

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
