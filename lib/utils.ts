import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appUrl = process.env.NEXT_PUBLIC_VERCEL_ENV
  ? `https://${process.env.APP_URL}`
  : "http://localhost:3000";

export const gqlUrl = `${appUrl}/api/gql`;

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
