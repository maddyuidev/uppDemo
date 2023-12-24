import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dataJSON from "./allowance_data.json";
import { columnDef } from "./columns";
import { useMemo } from "react";

const BasicTable = () => {
  const columns = useMemo(() => columnDef, []);
  const mockdata = useMemo(
    () => dataJSON.allowances.map((el) => el.allowanceItems.flat(1)),
    []
  );
  const data = mockdata.flat(1);
  console.log(data);
  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  // const handleChange = (e) => {
  //   console.log(e);
  // };

  return (
    <table className="table">
      <thead>
        {tableInstance.getHeaderGroups().map((headerEl) => (
          <tr key={headerEl.id}>
            {headerEl.headers.map((header) => (
              <th key={header.id} colSpan={header.colSpan}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((rowEl) => (
          <tr key={rowEl.id}>
            {rowEl.getVisibleCells().map((cellEl) => (
              <td key={cellEl.id}>
                {flexRender(cellEl.column.columnDef.cell, cellEl.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BasicTable;
