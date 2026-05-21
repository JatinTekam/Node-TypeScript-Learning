import type { jwtTokenPayload } from "./types";

declare global {
  namespace Express {
    interface Request {
      user?: jwtTokenPayload;
    }
  }
}

export {};
