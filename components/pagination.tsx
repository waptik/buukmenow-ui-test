"use client";

import { LeftArrowIcon } from "@/icons/LeftArrowIcon";
import { RightArrowIcon } from "@/icons/RightArrowIcon";
import React, { useState } from "react";

export interface IPaginationProps {
  setCursor: (cursor: "next" | "previous") => void;
  next?: string;
  previous?: string;
  total: number;
  pages: number;
}

const Pagination = (props: IPaginationProps) => {
  console.debug("Pagination", props);
  const [current, setCurrent] = useState(1)
  
  return (
    <>
      <div className="flex items-center relative my-8 gap-2 left-[955px]">
        <div className="flex w-8 h-8 rounded-[4px] items-center justify-center gap-2.5 relative">
          <LeftArrowIcon className="relative" />
        </div>
        <div className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2 relative bg-primary rounded-[100px]">
          <div className="text-white relative w-fit mt-[-0.50px] [font-family:'Matter-Regular',_Helvetica] font-normal text-xs tracking-[0] whitespace-nowrap">
            1
          </div>
        </div>
        <div className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2 relative bg-white rounded-[100px] opacity-80">
          <div className="text-primary relative w-fit mt-[-0.50px] [font-family:'Matter-Regular',_Helvetica] font-normal text-xs tracking-[0] whitespace-nowrap">
            2
          </div>
        </div>
        {props.pages > 4 && (
          <div className="flex w-8 h-8 items-center justify-center gap-0.5 p-2 relative bg-white rounded-[100px] opacity-80">
            <div className="relative bg-primary w-[2px] h-[2px] rounded-[1px]" />
            <div className="relative bg-primary w-[2px] h-[2px] rounded-[1px]" />
            <div className="relative bg-primary w-[2px] h-[2px] rounded-[1px]" />
          </div>
        )}
        {props.pages > 1 ? (
          <>
            <div className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2 relative bg-white rounded-[100px]">
              <div className="text-primary relative w-fit mt-[-0.50px] [font-family:'Matter-Regular',_Helvetica] font-normal text-xs tracking-[0] whitespace-nowrap">
                6
              </div>
            </div>
            <div className="flex w-8 h-8 rounded-[4px] rotate-180 items-center justify-center gap-2.5 relative">
              <div className="relative w-4 h-4">
                <RightArrowIcon className="absolute top-0 left-0 -rotate-180 w-4 h-4 text-primary" />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Pagination;
