"use client";
import React from "react";
import {options,columns} from "../public/helpers/helpers";

export default function WeekTable({ week, title }) {
  return (
    <div className="w-11/12 h-[270px]">
    <h1 className="text-sm mb-2 justify-self-start ml-1/5 mr-auto">
      {title}
    </h1>
      <div className="overflow-x-auto flex flex-col justify-center border rounded-sm border-primary">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr className="text-center text-xs">
              <th key={"segment"} className="text-center text-xs w-40">
                Segment
              </th>
              {columns.map((column) => (
                <th key={column} className="text-center text-xs w-40">
                  {column}
                </th>
                
              ))}
              <th className="text-center text-xs">
                Closed Won
              </th>
              <th className="text-center text-xs ">
                Closed Lost
              </th>
            </tr>
          </thead>
          <tbody>
            {week.map((row) => (
              <tr className="text-center text-xs" key={row.id}>
                <td className="text-center text-xs">{row.segment}</td>
                <td className="text-center text-xs">
                  {row.prospecting.toLocaleString("en-US", options)}
                </td>
                <td className="text-center text-xs">
                  {row.needs_analysis.toLocaleString("en-US", options)}
                </td>
                <td className="text-center text-xs">
                  {row.meeting_demo.toLocaleString("en-US", options)}
                </td>
                <td className="text-center text-xs">
                  {row.proposal_price_quote.toLocaleString("en-US", options)}
                </td>
                <td className="text-center text-xs">
                  {row.negotiation_review.toLocaleString("en-US", options)}
                </td>
                <td className="text-center text-xs">
                  {row.pipeline_total.toLocaleString("en-US", options)}
                </td>
                <td className="text-center text-xs">
                  {row.closed_won.toLocaleString("en-US", options)}
                </td>
                <td className="text-center text-xs">
                  {row.closed_lost.toLocaleString("en-US", options)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  );
}
