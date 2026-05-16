import { NextResponse, type NextRequest } from "next/server"

const SESSION_COOKIE = "unity_session"
const protectedRoutes = [
  "/dashboard",
  "/find-match",
  "/music-room",
  "/subscription",
]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasSessionCookie = Boolean(request.cookies.get(SESSION_COOKIE)?.value)
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )

  if (isProtectedRoute && !hasSessionCookie) {
    const url = request.nextUrl.clone()
    url.pathname = "/signin"
    url.searchParams.set("next", pathname)

    return NextResponse.redirect(url)
  }

  if ((pathname === "/signin" || pathname === "/signup") && hasSessionCookie) {
    const url = request.nextUrl.clone()
    url.pathname = "/dashboard"
    url.search = ""

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/find-match/:path*",
    "/music-room/:path*",
    "/signin",
    "/signup",
    "/subscription/:path*",
  ],
}
