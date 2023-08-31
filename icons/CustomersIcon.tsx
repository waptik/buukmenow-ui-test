import { cn } from "@/lib/utils";

export const CustomersIcon = ({
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      className={cn("h-4 w-4 text-secondary", className)}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.9062 9.08057C16.0688 8.91723 16.9638 7.92056 16.9663 6.71306C16.9663 5.52306 16.0988 4.5364 14.9613 4.34973"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M16.4399 11.8752C17.5658 12.0436 18.3516 12.4377 18.3516 13.2502C18.3516 13.8094 17.9816 14.1727 17.3833 14.4011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M9.90529 12.2198C7.22695 12.2198 4.93945 12.6256 4.93945 14.2465C4.93945 15.8665 7.21279 16.284 9.90529 16.284C12.5836 16.284 14.8703 15.8823 14.8703 14.2606C14.8703 12.639 12.5978 12.2198 9.90529 12.2198Z"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M9.90518 9.90656C11.6627 9.90656 13.0877 8.4824 13.0877 6.72406C13.0877 4.96656 11.6627 3.54156 9.90518 3.54156C8.14768 3.54156 6.72268 4.96656 6.72268 6.72406C6.71601 8.47573 8.13018 9.90073 9.88185 9.90656H9.90518Z"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M4.90375 9.08057C3.74042 8.91723 2.84625 7.92056 2.84375 6.71306C2.84375 5.52306 3.71125 4.5364 4.84875 4.34973"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M3.36967 11.8752C2.24384 12.0436 1.45801 12.4377 1.45801 13.2502C1.45801 13.8094 1.82801 14.1727 2.42634 14.4011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
