import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const gqlApi = `${
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/gql`
    : "http://localhost:3000"
}/api/gql`;


export const fetcher = (url: string) => fetch(url).then(res => res.json())