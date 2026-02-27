export { proxy } from "nextra/locales";

export const config = {
  // Matcher ignoring `/_next/` and `/api/` and static resources
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|favicon.png|icon.svg|apple-icon.png|manifest|_pagefind|images|fonts|logo-circle.svg|logo-square.svg).*)",
  ],
};
