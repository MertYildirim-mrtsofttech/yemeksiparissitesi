import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuth = !!token;
  const isAdmin = token?.role === 'admin';
  const isAdminPage = req.nextUrl.pathname.startsWith('/admin');

  if (isAdminPage) {
    if (!isAuth) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard') || 
                          req.nextUrl.pathname.startsWith('/profile');
  
  if (isProtectedRoute && !isAuth) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  
  const isPublicRoute = req.nextUrl.pathname.startsWith('/login') || 
                        req.nextUrl.pathname.startsWith('/register') || 
                        req.nextUrl.pathname === '/';
  
  if (isPublicRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    '/admin/:path*', 
    '/dashboard/:path*', 
    '/profile/:path*',
    '/login',
    '/register',
    '/'
  ],
};