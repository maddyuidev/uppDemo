import React, { useState } from "react";
import dataJSON from "./allowance_data.json";
const TestFn = () => {
  const data = [];
  const [updateAll, setUpdateAll] = useState(0);

  dataJSON.allowances.map((item, i) => {
    const obj = {
      itemDescription: item.allowanceItems[i].itemDesc,
      cic: i + 1.3,
      primaryUpc: item.allowanceItems[i].primaryUpc,
      upcs: item.allowanceItems[i].itemUpcs.length,
      pack: item.allowanceItems[i].packWhse,
      size: item.allowanceItems[i].size,
      allowances: item.allowanceItems,
    };

    data.push(obj);
  });
  const [tableData, setTableData] = useState(data);
  //   console.log({ tableData });

  const handleColumnChange = (val, i) => {
    console.log(val, i);
    const data = [...tableData];

    data.map((col) => {
      col.allowances[i].allowanceAmount = val;
    });
    data[0].allowances[i].allowanceHeaderAmount = val;
    console.log(data, "modified");
    setTableData(data);
  };
  const handleTableChange = (val) => {
    setUpdateAll(val);
  };
  const handleUpdateAll = () => {
    const data = [...tableData];
    data.map((col) =>
      col.allowances.map((d, i) => {
        d.allowanceAmount = updateAll;
        d.allowanceHeaderAmount = updateAll;
      })
    );
    setTableData(data);
  };
  const handleInputChange = (val, i, rowId) => {
    const data = [...tableData];
    data[rowId].allowances[i].allowanceAmount = val;
    setTableData(data);
  };
  const handleSave = () => {
    console.log({ ...dataJSON, allowances: tableData });
  };
  return (
    <>
      <div className="d-flex justify-content-evenly col-5">
        <label className="form-label">Update All</label>
        <input
          onChange={(e) => handleTableChange(e.target.value)}
          className="form-control  ms-2"
          type="text"
        />
        <button
          className="btn btn-sm btn-primary  ms-2"
          onClick={handleUpdateAll}
        >
          Update All
        </button>
        <button className="btn btn-sm btn-primary  ms-2" onClick={handleSave}>
          Save All
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item Description</th>
            <th scope="col">CIC</th>
            <th scope="col">Primary Upc</th>
            <th scope="col">UPCs</th>
            <th scope="col">Pack</th>
            <th scope="col">Size</th>
            {data[0].allowances.map((items, i) => (
              <React.Fragment key={i}>
                <th>Master Case Cost</th>
                <th>Unit List Cost</th>
                <th>Unit Cost w/Allow</th>
                <th>
                  Allowance Amount
                  <div className="d-flex master-cost">
                    <input
                      value={items.allowanceHeaderAmount || ""}
                      onChange={(e) => handleColumnChange(e.target.value, i)}
                      className="form-control"
                      type="text"
                    />
                    <select className="form-select">
                      <option value="ea">EA</option>
                      <option value="ae">AE</option>
                    </select>
                  </div>
                </th>
                <th>New Unit Cost w/Allow</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.itemDescription}</td>
              <td>{item.cic}</td>
              <td>{item.primaryUpc}</td>
              <td>{item.upcs}</td>
              <td>{item.pack}</td>
              <td>{item.size}</td>
              {item.allowances.map((data, i) => (
                <React.Fragment key={i}>
                  <td>${data.caseListCost}</td>
                  <td>${data.unitListCost}</td>
                  <td>${data.unitCostAllow}</td>
                  <td>
                    <div className="d-flex master-cost">
                      <input
                        value={data.allowanceAmount || ""}
                        onChange={(e) =>
                          handleInputChange(e.target.value, i, idx)
                        }
                        className="form-control"
                        type="text"
                      />
                      <select className="form-select">
                        <option value="ea">EA</option>
                        <option value="ae">AE</option>
                      </select>
                    </div>
                  </td>
                  <td>${data.unitCostAllow}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TestFn;
