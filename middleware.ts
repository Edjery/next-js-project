import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

// export default middleware;

export const config = {
  matcher: ["/users", "/upload"],
};
