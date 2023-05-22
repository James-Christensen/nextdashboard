import React from 'react';
import { formatCurrency,formatSegment } from '../public/helpers/helpers';



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
  