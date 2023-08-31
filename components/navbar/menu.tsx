/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import HomeIcon from "@/icons/HomeIcon";
import { MenuTab } from "./tab";
import { CalenderIcon } from "@/icons/CalenderIcon";
import ServicesIcon from "@/icons/ServicesIcon";
import { CustomersIcon } from "@/icons/CustomersIcon";

export const Menu = ({ className }: { className?: string }): JSX.Element => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <HomeIcon className="relative w-5 h-5" />,
      selected: false,
    },
    {
      name: "Bookings",
      icon: <CalenderIcon className="relative w-5 h-5" />,
      selected: false,
    },
    {
      name: "Customers",
      icon: <CustomersIcon className="relative w-5 h-5 text-selected" />,
      selected: true,
    },
  ];
  return (
    <div>
      <div
        className={cn(
          "flex w-[1442px] items-center justify-between px-64 py-6 bg-white",
          className
        )}
      >
        <img
          className="relative w-32 h-6"
          alt="Buuk logo"
          src="/full-logo.svg"
        />
        <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
          {menuItems.map((item, i) => (
            <>
              <MenuTab
                key={i}
                className="flex-[0_0_auto]"
                icon={item.icon}
                isSelected={item.selected}
                label={item.name}
              />
            </>
          ))}

          <div className="inline-flex items-center gap-2 px-[12px] py-2 relative flex-[0_0_auto] rounded-[1000px]">
            <ServicesIcon className="relative w-5 h-5" />
            <div className="text-secondary relative w-fit [font-family:'Matter-Medium',_Helvetica] font-medium text-3.5 tracking-[-0.28px] leading-[normal] whitespace-nowrap">
              Services
            </div>
          </div>
        </div>
        <div className="flex w-[208px] items-center justify-center gap-4 px-4 py-2 relative rounded-[4px] overflow-hidden border border-solid border-[#e5e5e4]">
          <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Matter-Medium',_Helvetica] font-medium text-neutral-700 text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Buukmenow Demo
            </div>
            <div className="relative w-fit [font-family:'Matter-Medium',_Helvetica] font-medium text-[#a6a6a5] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              Buukmenow@gmail.com
            </div>
          </div>
          <img
            className="relative w-4 h-4"
            alt="Chevron down"
            src="/chevron-down.svg"
          />
        </div>
      </div>
    </div>
  );
};
