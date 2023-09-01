"use client";

import { sdk } from "@gql/hooks";
import { TableRowData } from "./trow";

const CustomersTable = () => {
  const { data } = sdk.useGetCampaigns("campaigns", {
    limit: 2,
  });

  return (
    <>
      <div>
        {(data?.campaigns.docs || []).length > 0 ? (
          <table className="table-auto shadow-lg bg-white">
            <thead>
              <tr>
                <th className="bg-gray-100 text-left text-selected px-8 py-4">
                  Campaign Title
                </th>
                <th className="bg-gray-100 text-left text-selected px-8 py-4">
                  Description
                </th>
                <th className="bg-gray-100 text-left text-selected px-8 py-4">
                  Target Group
                </th>
                <th className="bg-gray-100 text-left text-selected px-8 py-4">
                  Campaign Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.campaigns.docs.map((campaign, i) => (
                <TableRowData key={i} campaign={campaign} />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-2xl text-gray-400">No campaigns found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomersTable;
