import { cn } from "@/lib/utils";

export const RightArrowIcon = ({
  className,
}: {
  className?: string;
}) => {
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
        className="path"
        d="M13.1667 8.18288L3.16666 8.18288"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M9.13345 12.1991L13.1668 8.18314L9.13345 4.16647"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
