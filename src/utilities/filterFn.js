import React, { useMemo } from "react";

export const FilterFn = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  // Calculate the min and max
  // using the preFilteredRows

  const val = useMemo(() => {
    preFilteredRows.forEach((row) => {
      console.log(row, "Filtering...");
    });
    return val;
  }, [id, preFilteredRows]);

  return (
    <>
      <input
        type="text"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(parseInt(e.target.value));
        }}
      />
    </>
  );
};
