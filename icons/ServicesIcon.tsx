import { cn } from "@/lib/utils";
import React from "react";

const ServicesIcon = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
      className={cn("h-4 w-4 text-secondary", className)}
      width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8286 8.33332H16.4952C18.1619 8.33332 18.9952 7.49999 18.9952 5.83332V4.16666C18.9952 2.49999 18.1619 1.66666 16.4952 1.66666H14.8286C13.1619 1.66666 12.3286 2.49999 12.3286 4.16666V5.83332C12.3286 7.49999 13.1619 8.33332 14.8286 8.33332Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.82855 18.3333H6.49522C8.16189 18.3333 8.99522 17.5 8.99522 15.8333V14.1667C8.99522 12.5 8.16189 11.6667 6.49522 11.6667H4.82855C3.16189 11.6667 2.32855 12.5 2.32855 14.1667V15.8333C2.32855 17.5 3.16189 18.3333 4.82855 18.3333Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.66189 8.33332C7.50283 8.33332 8.99522 6.84094 8.99522 4.99999C8.99522 3.15904 7.50283 1.66666 5.66189 1.66666C3.82094 1.66666 2.32855 3.15904 2.32855 4.99999C2.32855 6.84094 3.82094 8.33332 5.66189 8.33332Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.6619 18.3333C17.5028 18.3333 18.9952 16.8409 18.9952 15C18.9952 13.159 17.5028 11.6667 15.6619 11.6667C13.8209 11.6667 12.3286 13.159 12.3286 15C12.3286 16.8409 13.8209 18.3333 15.6619 18.3333Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ServicesIcon;
