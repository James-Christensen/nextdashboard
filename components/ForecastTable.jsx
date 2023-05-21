import React from 'react';
import { options,formatCurrency } from '../public/helpers/helpers';

//function that corrects the display of segment values. 
//The function makes the first letter uppercase and replaces "_" with a space. 
function formatSegment(segment) {
    let formattedSegment = segment
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  
    if (formattedSegment.startsWith("Apm")) {
      formattedSegment = formattedSegment.replace("Apm", "APM ");
    } else if (formattedSegment.startsWith("Mips")) {
      formattedSegment = formattedSegment.replace("Mips", "MIPS ");
    }
  
    return formattedSegment;
  }





export default function ForecastTable({ data }) {
    return (
      <div className="overflow-x-auto mb-5 flex flex-col justify-center border rounded-sm border-primary w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center text-lg">
              <th className="text-center ">Segment</th>
              <th className="text-center ">Orders</th>
              <th className="text-center ">Forecast</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr className="text-center" key={row.id}>
                <td className="text-center ">{formatSegment(row.segment)}</td>
                <td className="text-center">{formatCurrency(row.current)}</td>
                <td className="text-center">{formatCurrency(row.forecast)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  