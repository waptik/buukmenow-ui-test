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
      <div className="flex w-[942px] items-start gap-3 absolute top-[200px] left-[250px] border-b-[1.5px]">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`inline-flex items-end gap-[10px] pt-0 pb-5 px-3 relative flex-[0_0_auto]${
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
