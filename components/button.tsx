import { cn } from "@/lib/utils";
import React from "react";
// import { Document } from "./Document";

export const Button = ({
  icon,
  label,
    className,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}): JSX.Element => {
  return (
    <button className={cn("inline-flex h-12 items-center justify-center gap-2.5 p-4 relative bg-primary rounded-lg border border-solid border-primary all-[unset] box-border", className)}>
      {/* <Document className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" /> */}
      {icon}
      <div className="relative w-fit [font-family:'Matter-Medium',_Helvetica] font-medium text-white text-sm tracking-[-0.35px] leading-[normal] whitespace-nowrap">
        {label}
      </div>
    </button>
  );
};
