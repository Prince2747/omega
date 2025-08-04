import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define role access rules
const roleAccess = {
  ADMIN: ["/admin", "/hr", "/department", "/jobs", "/applicant", "/chat"],
  HR: ["/hr", "/jobs", "/applicant", "/chat"],
  DEPARTMENT: ["/department", "/jobs", "/chat"],
  APPLICANT: ["/applicant", "/jobs", "/chat"],
} as const;

// Public routes that don't require authentication
const publicRoutes = ["/", "/signin", "/signup", "/forgot-password", "/reset-password", "/jobs", "/faq"];

// Check if a path matches any public route (including nested paths)
const isPublicPath = (path: string) => {
  return publicRoutes.some(route => path === route || path.startsWith(`${route}/`));
};

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Allow access to public routes (including nested paths)
    if (isPublicPath(path)) {
      return NextResponse.next();
    }

    // Check if user has access to the requested path
    const userRole = token?.role as keyof typeof roleAccess;
    const allowedPaths = roleAccess[userRole] || [];

    const hasAccess = allowedPaths.some(allowedPath => 
      path.startsWith(allowedPath)
    );

    if (!hasAccess) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
);

export const config = {
  matcher: [
    // Protected routes that require authentication
    "/admin/:path*",
    "/hr/:path*",
    "/department/:path*",
    "/applicant/:path*",
    "/chat/:path*",
    
    // Auth-related routes that need special handling
    "/api/auth/:path*"
  ],
};