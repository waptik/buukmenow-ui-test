import { cn } from "@/lib/utils";

export const LeftArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("h-4 w-4 text-secondary", className)}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.83334 8.18288L12.8333 8.18288"
        stroke="currentColor"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.86655 12.1991L2.83321 8.18314L6.86655 4.16647"
        stroke="currentColor"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
