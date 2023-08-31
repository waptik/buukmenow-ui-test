import React from "react";

const NavTabs = () => {
  const tabs = [
    {
      name: " Customer Log",
      isSelected: false,
    },
    {
      name: "Campaigns",
      isSelected: true,
    },
  ];
  return (
    <>
      <div className="flex w-[939px] gap-16 relative my-8 left-[250px] border-b-[1.5px]">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`flex gap-2.5 pt-0 pb-5 relative ${
              tab.isSelected
                ? " border-b-[1.5px] [border-bottom-style:solid] border-selected"
                : ""
            }`}
          >
            <div
              className={`relative w-fit mt-[-1.50px] [font-family:'Matter-Regular',_Helvetica] font-${
                tab.isSelected ? "medium" : "normal"
              } text-${
                tab.isSelected ? "selected" : "secondary"
              } text-sm tracking-[-0.35px] whitespace-nowrap${
                tab.isSelected ? "" : ""
              }`}
            >
              {tab.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavTabs;
