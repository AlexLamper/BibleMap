import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes using the route matcher
const isPublicRoute = createRouteMatcher([
  '/login', 
  '/signup', 
  '/forgot-password', 
  '/reset-password',
  '/guest',
]);

export default clerkMiddleware((auth, request) => {
  // Protect routes that are not public
  if (!isPublicRoute(request)) {
    auth.protect();
  }
});

// Middleware configuration
export const config = {
  matcher: [
    // Public routes
    '/guest',
    '/login',
    '/sign-in',
    '/sign-up',
    '/forgot-password',
    '/reset-password', // Ensure this route starts with a '/'
    '/about',
    '/help',

    // Protected routes
    '/home',
    '/(api|trpc)(.*)',

    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
