import { cn } from "@/lib/utils";
import React from "react";

const HomeIcon = ({ className }: { className?: string }) => {
  return (
    <div>
      <svg
        className={cn("home-icon text-secondary", className)}
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          d="M10 15V12.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M8.39172 2.34998L2.61672 6.97498C1.96672 7.49164 1.55006 8.58331 1.69172 9.39998L2.80006 16.0333C3.00006 17.2166 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2083 17.2001 16.0333L18.3084 9.39998C18.4417 8.58331 18.0251 7.49164 17.3834 6.97498L11.6084 2.35831C10.7167 1.64164 9.27506 1.64164 8.39172 2.34998Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <g className="g" opacity="0" />
      </svg>
    </div>
  );
};

export default HomeIcon;
