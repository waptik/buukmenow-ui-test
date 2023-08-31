"use client";

import React from "react";
import { TableRowData } from "./trow";

const CustomersTable = () => {
  return (
    <>
      <div>
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
            <TableRowData total={30} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomersTable;
