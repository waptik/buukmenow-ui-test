import HomeIcon from "@/icons/HomeIcon";

interface Props {
  isSelected: boolean;
  icon: JSX.Element;
  label: string;
  className?: string;
}

export const MenuTab = ({ isSelected, label, icon }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-[1000px] relative ${
        isSelected ? "bg-gray-100" : ""
      }`}
    >
      {icon}
      <div
        className={`[font-family:'Matter-Medium',_Helvetica] w-fit tracking-[-0.28px] text-sm font-medium leading-[normal] whitespace-nowrap relative ${
          !isSelected
            ? "text-secondary"
            : "text-selected"
        }`}
      >
        {label}
      </div>
    </div>
  );
};
