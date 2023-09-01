import { cn } from "@/lib/utils";

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4 text-secondary", className)}
    >
      <circle
        cx="9.80553"
        cy="9.8055"
        r="7.49047"
        stroke="currentColor"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0153 15.4043L17.9519 18.3333"
        stroke="currentColor"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
