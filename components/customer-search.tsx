"use client";

import { sdk } from "@/gql/client/hooks";
import { SearchIcon } from "@/icons/SearchIcon";
import { mutate } from "swr";
import CampaignModal from "./campaign-modal";
import { toast } from "./ui/use-toast";

const CustomerSearch = () => {
  return (
    <>
      <div className="flex w-[939px] h-12 items-center justify-between left-[250px] relative">
        <div className="flex items-center gap-2.5 ">
          <div className="flex gap-4 relative items-center p-4 w-full bg-white rounded-md border-md border-solid border-[#cccfce66]">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {/* {isValidating && searchInputRef.current?.value.length > 0 ? (
          <LoadingSpinner className="h-4 w-4" />
        ) : ( */}
              <SearchIcon className="h-4 w-4 text-gray-400" />
              {/* )} */}
            </div>
            <input
              type="text"
              className="w-full rounded-md border-none border-gray-300 pl-10 text-black placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm"
              placeholder="Search customer log by customer name, email address &amp; phone
                  number"
            />
          </div>
          <button className="inline-flex h-12 items-center justify-center gap-[10px] p-4 relative flex-[0_0_auto] bg-white rounded-[6px] border border-solid border-[#004741] all-[unset] box-border">
            <div className="relative w-fit [font-family:'Matter-Medium',_Helvetica] font-medium text-[#004741] text-sm tracking-[-0.35px] whitespace-nowrap">
              Search
            </div>
          </button>
        </div>
        <CampaignModal
          onSave={async (d) => {
            try {
              await sdk.addCampaignMutation({
                input: {
                  ...d,
                },
              });
              mutate("campaigns")
              toast({
                type: "background",
                description: "Your campaign has been added succefully 🥳",
              });
            } catch (error) {
              toast({
                type: "background",
                description: "Your campaign couldn't be added 😥",
              });
            }
          }}
        />
      </div>
    </>
  );
};

export default CustomerSearch;
