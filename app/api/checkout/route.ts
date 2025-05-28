import { Checkout } from "@polar-sh/nextjs";

export const GET = Checkout({
  accessToken: process.env.NEXT_PUBLIC_POLAR_ACCESS_TOKEN_1!,
  successUrl: process.env.NEXT_PUBLIC_SUCCESS_URL!,
  server: "sandbox", // Use "production" for live
});
