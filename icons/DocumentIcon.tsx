import { cn } from "@/lib/utils";
import React from "react";

function DocumentIcon({ className }: { className?: string }) {
  return (
    <>
      <svg
      className={cn("doc-icon text-[#808885]", className)}
      width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Iconly/Light/Document">
          <g id="Document">
            <path
              id="Stroke 1"
              d="M13.0968 13.5195H7.08017"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Stroke 2"
              d="M13.0968 10.0308H7.08017"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Stroke 3"
              d="M9.37606 6.55009H7.08023"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Stroke 4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2572 2.2915C13.2572 2.2915 6.85965 2.29484 6.84965 2.29484C4.54965 2.309 3.12549 3.82234 3.12549 6.13067V13.794C3.12549 16.114 4.56049 17.6332 6.88049 17.6332C6.88049 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </>
  );
}

export default DocumentIcon;
