import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: "/docs1",
}

export default middleware
