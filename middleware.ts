import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define protected routes (including '/test')
const isProtectedRoute = createRouteMatcher([
  '/home',                   // Home page
  '/api(.*)',                // All routes under /api
  '/chapters(.*)',           // All routes under /chapters
  '/characters(.*)',         // All routes under /characters
  '/dashboard(.*)',          // All routes under /dashboard
  '/events(.*)',             // All routes under /events
  '/leaderboard',            // Leaderboard page
  '/notes(.*)',              // All routes under /notes (assuming "notes" was meant to be "chapters" from your input)
  '/places(.*)',             // All routes under /places
  '/progress',               // Progress page
  '/settings',               // Settings page
  '/teachings(.*)',          // All routes under /teachings
  '/themes(.*)',             // All routes under /themes
])

const isPublicRoute = createRouteMatcher([
  '/guest',                  // Guest page
  '/login',                  // Login page
  '/sign-in',                // Sign in page
  '/sign-up',                // Sign up page
  '/about',                  // About page
  '/help',                   // Help page
  '/tos',                    // Terms of Service page
])

export default clerkMiddleware(async (auth, req) => {
  // Protect the routes that match the defined protected routes
  if (isProtectedRoute(req)) await auth.protect()

  if (isPublicRoute(req)) {
    return
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Always run for API routes
    '/(api|trpc)(.*)',   // Matches all routes under /api

    // Match the rest of your protected routes and public routes
    '/(dashboard|forum|test|chapters|characters|events|leaderboard|notes|places|progress|settings|teachings|themes)(.*)',  // Protected routes
    '/guest',             // Public route for guest page
    '/login',             // Public route for login
    '/sign-in',           // Public route for sign-in
    '/sign-up',           // Public route for sign-up
    '/about',             // Public route for about page
    '/help',              // Public route for help page
    '/tos',               // Public route for terms of service
  ],
}