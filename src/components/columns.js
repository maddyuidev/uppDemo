import { createColumnHelper } from "@tanstack/react-table";
import { FilterFn } from "../utilities/filterFn";
import { useRef } from "react";

const columnHelper = createColumnHelper();
const handleChange = (rows, id, filterValue) => {
  // debugger;
  // console.log(e, row);
  // row.column.accessorFn((r) => console.log(r, "inner"));
  return rows.filter((row) => {
    const rowValue = row.values[id];
    console.log(rowValue);
    // return rowValue >= filterValue;
  });
};

export const columnDef = [
  columnHelper.accessor("itemDesc", {
    header: "Item Description",
  }),
  // {
  //   header: "Item Description",
  //   accessorKey: "itemDesc",
  // },
  //   {
  //     header: "CIC",
  //     accessorKey: "",
  //   },
  {
    header: "Primary UPC",
    accessorFn: (row) => `${row.primaryUpc}`,
  },
  // columnHelper.accessor("firstName", {
  //   cell: (props) => <span>{1}</span>,
  // }),
  {
    header: "UPCs",
    accessorKey: "itemUpcs",
    cell: (row) => {
      const arr = row.getValue();
      // console.log(arr, "itemupcs");
      return arr.length;
    },
  },
  {
    header: "Pack",
    accessorKey: "packWhse",
  },
  {
    header: "Size",
    accessorKey: "size",
  },
  {
    header: "Master Case Cost",
    accessorKey: "caeListCost",
  },
  {
    header: "Unit List Cost",
    accessorKey: "unitListCost",
  },
  {
    header: "Unit Cost w/Allow",
    accessorKey: "unitCostAllow",
  },
  {
    // header: "Allowance Amount",
    header: (row) => {
      // console.log(row, "header");
      return (
        <div>
          <div>Allowence Amount</div>
          <div className="d-flex justify-content-between">
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                onChange={(e) => handleChange(e.target.value, row)}
                type="text"
                className="form-control"
              />
            </div>
            {/* <select className="form-select">
              {arr.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select> */}
          </div>
        </div>
      );
    },
    filter: handleChange,
    accessorKey: "allowUomTypes",
    cell: (row) => {
      // console.log(row);
      const arr = row.getValue();
      return (
        <div className="d-flex justify-content-between">
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input type="text" className="form-control" />
          </div>
          <select className="form-select">
            {arr.map((opt, i) => (
              <option key={i}>{opt}</option>
            ))}
          </select>
        </div>
      );
    },
  },
  {
    header: "New Unit Cost w/Allow",
    accessorKey: "newUnitCostAllow",
  },
];
