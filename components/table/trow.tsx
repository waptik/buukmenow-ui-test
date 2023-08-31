"use client";

export const TableRowData = ({ total = 3 }: { total: number }) => {
  const structure = {
    title: "Mobile app coming soon",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
    group: "All customers",
    status: "Active",
  };

  const array = Array.from(Array(total).keys());


  return (
    <>
      {array.map((_, i) => (
        <tr key={i}>
          <td className="px-8 text-tbl py-4">{structure.title}</td>
          <td className="px-8 text-tbl py-4">{structure.description}</td>
          <td className="px-8 text-tbl py-4">{structure.group}</td>
          <td className="px-8 text-tbl py-4">{structure.status}</td>
        </tr>
      ))}
    </>
  );
};
