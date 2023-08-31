import React from "react";
import { cn } from "@/lib/utils";

export const TableHead = ({ className }: { className?: string }) => {
  const headers = [
    { title: "Campaign Title", class:"" },
    { title: "Description", class:"" },
    { title: "Target Group", class:"" },
    { title: "Campaign Status", class:"" },
  ];

  return (
    <div className={cn("flex items-start relative w-[937px]", className)}>
      {headers.map((h, i) => (
        <div
          key={i}
          className={cn(
            "items-center bg-gray-200 border-b-2 border-gray-300 border-l-2 rounded-lg border-t-2 flex -mb-1 -ml-1 -mt-1 relative w-48 gap-4 px-4 py-6",
            h.class
          )}
        >
          <div className="column-title-wrapper">
            <div className="column-title">{h.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
