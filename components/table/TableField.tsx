import React from "react";

interface Props {
    body: boolean;
    header: boolean;
    multiselect: boolean;
    leftEnd: boolean;
    rightEnd: boolean;
    bodyType: "text" | "not-applicable";
    className: any;
    text: string;
}

export const TableField = ({
    body,
    header,
    multiselect,
    leftEnd,
    rightEnd,
    bodyType,
    className,
    text = "Column title",
}: Props): JSX.Element => {
    return (
        <div
            className={`flex items-center relative gap-[16px] [border-bottom-style:solid] ${
                !body ? "border-[#ececeb]" : bodyType === "text" ? "border-[color:var(--gray-6)]" : ""
            } ${!body ? "border-t-2" : ""} ${
                !body ? "px-[24px] py-[16px]" : bodyType === "text" ? "px-[24px] py-[10px]" : ""
            } ${!body ? "border-b-2" : bodyType === "text" ? "border-b" : ""} ${
                rightEnd ? "[border-right-style:solid]" : ""
            } ${!body ? "w-[184px]" : bodyType === "text" ? "w-[180px]" : ""} ${!body ? "[border-top-style:solid]" : ""} ${
                leftEnd ? "rounded-[8px_0px_0px_0px]" : rightEnd ? "rounded-[0px_8px_0px_0px]" : ""
            } ${leftEnd ? "[border-left-style:solid]" : ""} ${
                header || multiselect ? "bg-white" : body && !multiselect ? "bg-[color:var(--white)]" : ""
            } ${leftEnd && multiselect ? "h-[52px]" : bodyType === "text" ? "h-[48px]" : ""} ${className}`}
        >
            {(leftEnd || !multiselect) && (
                <div
                    className={`relative ${!body ? "inline-flex" : ""} ${multiselect ? "mt-[-6.00px]" : ""} ${
                        !body ? "items-center" : ""
                    } ${!body ? "flex-[0_0_auto]" : ""} ${bodyType === "text" ? "text-[color:var(--primary-colour4)]" : ""} ${
                        bodyType === "text" ? "leading-[15px]" : ""
                    } ${bodyType === "text" ? "[font-family:'Matter-Regular',_Helvetica]" : ""} ${
                        bodyType === "text" ? "w-fit" : ""
                    } ${bodyType === "text" ? "font-normal" : ""} ${bodyType === "text" ? "whitespace-nowrap" : ""} ${
                        bodyType === "text" ? "text-[13px]" : ""
                    } ${bodyType === "text" ? "tracking-[0]" : ""} ${multiselect ? "h-[28px]" : ""}`}
                >


                    {text}
                </div>
            )}
        </div>
    );
};
