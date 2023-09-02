"use client";

import { sdk } from "@gql/hooks";
import { useState } from "react";
import Pagination from "../pagination";
import { TableRowData } from "./trow";

interface IOptions {
  limit: number;
  next?: string;
  previous?: string;
  sortBy?: string;
  orderBy?: string;
  search?: string;
}

const CustomersTable = ({ search }: { search?: string }) => {
  const [options, setOptions] = useState<IOptions>({
    limit: 2,
    search,
  });
  const { data, error } = sdk.useGetCampaigns("campaigns", options);
  const total = data?.campaigns.docs.length || 0;
  const isError = error ?? !data;

  return (
    <>
      <div className="flex my-8 w-[937px] items-center relative left-[250px]">
        {(data?.campaigns.docs || []).length > 0 ? (
          <div className="flex items-center flex-col">
            <p className="text-md text-black pb-8">
              {total} campaign{total > 1 ? "s" : ""} found
            </p>
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
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-2xl">
              {isError ? (
                <span className="text-red-500">
                  <span className="text-gray-400">Error: </span>-{" "}
                  {error?.message || "Something went wrong"}
                </span>
              ) : (
                <span className="text-gray-400">No campaigns found</span>
              )}
            </p>
          </div>
        )}
      </div>
      {total > 0 && (
        <Pagination
          setCursor={(cursor) => {
            console.log("cursor", cursor);
            setOptions({
              ...options,
              next:
                cursor === "next"
                  ? (data?.campaigns.next as string)
                  : undefined,
              previous:
                cursor === "previous"
                  ? (data?.campaigns.previous as string)
                  : undefined,
            });
          }}
          next={data?.campaigns.next as string}
          previous={data?.campaigns.previous as string}
          total={total}
        />
      )}
    </>
  );
};

export default CustomersTable;
