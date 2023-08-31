import DocumentIcon from "@/icons/DocumentIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import React from "react";

const CustomerSearch = () => {
  return (
    <>
      <div className="flex w-[936px] items-start justify-between relative">
        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <div className="flex h-[51px] items-center gap-[10px] p-4 relative self-stretch w-full mt-[-1.50px] mb-[-1.50px] ml-[-1.50px] mr-[-1.50px] bg-white rounded-[6px] border-[1.5px] border-solid border-[#cccfce66]">
              <SearchIcon className="relative w-5 h-5 mt-[-2.00px]" />
              <p className="relative w-fit [font-family:'Matter-Regular',_Helvetica] font-normal text-secondary text-sm tracking-[-0.35px] whitespace-nowrap">
                Search customer log by customer name, email address &amp; phone
                number
              </p>
            </div>
          </div>
          <button className="inline-flex h-12 items-center justify-center gap-[10px] p-4 relative flex-[0_0_auto] bg-white rounded-[6px] border border-solid border-[#004741] all-[unset] box-border">
            <div className="relative w-fit [font-family:'Matter-Medium',_Helvetica] font-medium text-[#004741] text-sm tracking-[-0.35px] whitespace-nowrap">
              Search
            </div>
          </button>
        </div>
        <button className="inline-flex h-12 items-center justify-center gap-[10px] p-4 relative flex-[0_0_auto] bg-[#004741] rounded-[6px] border border-solid all-[unset] box-border">
          <DocumentIcon className="relative w-5 h-5 mt-[-2.00px] mb-[-2.00px]" />
          <div className="relative w-fit [font-family:'Matter-Medium',_Helvetica] font-medium text-white text-sm tracking-[-0.35px] whitespace-nowrap">
            Create a campaign
          </div>
        </button>
      </div>
    </>
  );
};

export default CustomerSearch;
