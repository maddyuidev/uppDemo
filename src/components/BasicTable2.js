import React from "react";

const BasicTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th colSpan="2"></th>
          <th colSpan="4"></th>
          <th
            colSpan="5"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Hello
            <label>
              <input type="checkbox" />
              Exclude
            </label>
          </th>
        </tr>
        <tr>
          <th>Item Dscription</th>
          <th>CIC</th>
          <th>Primary UPC</th>
          <th>UPCs</th>
          <th>Pack</th>
          <th>Size</th>
          <th>Master Case Cost</th>
          <th>Unit List Cost</th>
          <th>Unit Cost w/Allow</th>
          <th>
            Allowance Amount
            <div>
              <input />
              <select>
                <option></option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </th>
          <th>New Unit Cost w/Allow</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>Row 1, Column 1</td>
          <td>Row 1, Column 2</td>
          <td>Row 1, Column 3</td>
          <td>Row 1, Column 4</td>
        </tr>
        <tr>
          <td>Row 2, Column 1</td>
          <td>Row 2, Column 2</td>
          <td>Row 2, Column 3</td>
          <td>Row 2, Column 4</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default BasicTable;
