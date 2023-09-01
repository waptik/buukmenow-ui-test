"use client";

export const TableRowData = ({
  campaign,
}: {
  campaign: {
    title: string;
    description: string;
    group: string;
    active: boolean;
  };
}) => {
  return (
    <>
      <tr>
        <td className="px-8 text-tbl py-4">{campaign.title}</td>
        <td className="px-8 text-tbl py-4">{campaign.description}</td>
        <td className="px-8 text-tbl py-4">{campaign.group}</td>
        <td className="px-8 text-tbl py-4">
          {campaign.active ? "Active" : "Inactive"}
        </td>
      </tr>
    </>
  );
};
