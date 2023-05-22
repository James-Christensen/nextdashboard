import React from 'react';
import { options,formatSegment,formatCurrency } from '../public/helpers/helpers';

export default function UpdateMonth({ data, onUpdate }) {
    //A function to handleInputChange that updates the values of current or forecast in the table.
    const handleInputChange = (e, id, key) => {
        const value = Number(e.target.value); // convert value to number
        const index = data.findIndex((row) => row.id === id);
        const newData = [...data];
        newData[index][key] = value;
        
        onUpdate(newData);
    }
  
    const renderRow = (row) => {
        const isDisabled = row.segment === "mips_total" || row.segment === "grand_total";
        return (
          <tr className="text-center" key={row.id}>
            <td className="text-center">{formatSegment(row.segment)}</td>
            <td className="text-center p-0 m-0">
              <input
                type="number"
                value={row.current}
                placeholder={row.current.toLocaleString("en-US", options)}
                className="input input-warning p-0 m-0 max-w-xs"
                onChange={(e) => handleInputChange(e, row.id, "current")}
                disabled={isDisabled}
              />
            </td>
            <td className="text-center p-0 m-0">
              <input
                type="number"
                value={row.forecast}
                placeholder={row.forecast.toLocaleString("en-US", options)}
                className="input input-warning  p-0 m-0 max-w-xs"
                onChange={(e) => handleInputChange(e, row.id, "forecast")}
                disabled={isDisabled}
              />
            </td>
          </tr>
        );
      };
  
    return (
      <div className="overflow-x-auto mb-5 flex flex-col justify-center border rounded-sm border-warning w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th className="text-center">Segment</th>
              <th className="text-center">Orders</th>
              <th className="text-center">Forecast</th>
            </tr>
          </thead>
          <tbody>{data.map((row) => renderRow(row))}</tbody>
        </table>
      </div>
    );
  }
  