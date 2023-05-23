"use client";

import React from "react";
import { calculateChanges, options, columns } from "../public/helpers/helpers";

export default function PipelineChanges({ currentWeek, priorWeek, title }) {
  const changes = calculateChanges(currentWeek, priorWeek);

  //Combine changes and current week data
  let weeklyPipelineChanges = currentWeek.map((obj) => {
    let changeObj = changes.find((change) => change.segment === obj.segment);
    if (changeObj) {
      return Object.assign({}, obj, changeObj);
    } else {
      return obj;
    }
  });

  return (
    <div className="w-11/12">
      <h1 className="text-sm mb-2 justify-self-start ml-1/5 mr-auto">
        {title}
      </h1>
      <div className="overflow-x-auto mb-5 flex flex-col justify-center border rounded-sm border-primary">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr className="text-center text-xs">
              <th className="text-center text-xs ">Segment</th>
              {columns.map((column) => (
                <th key={column} className="text-center text-xs " colSpan="2">
                  {column}
                </th>
              ))}
              <th className="text-center text-xs" colSpan="2">
                Closed Won
              </th>
              <th className="text-center text-xs " colSpan="2">
                Closed Lost
              </th>
            </tr>
          </thead>
          <tbody>
            {weeklyPipelineChanges.map((row) => (
              <tr className="text-center text-xs" key={row.id}>
                <td className="text-center text-xs">{row.segment}</td>
                {/* _percent */}
                <td className="text-xs">
                  {row.prospecting.toLocaleString("en-US", options)}
                </td>
                <td
                  className={`text-xs ${
                    row.prospecting_percent === 0
                      ? "text-warning"
                      : row.prospecting_percent > 0
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {row.prospecting_percent}%
                </td>
                <td className="text-xs">
                  {row.needs_analysis.toLocaleString("en-US", options)}
                </td>
                <td
                  className={`text-xs ${
                    row.needs_analysis_percent === 0
                      ? "text-warning"
                      : row.needs_analysis_percent > 0
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {row.needs_analysis_percent}%
                </td>
                <td className="text-xs">
                  {row.meeting_demo.toLocaleString("en-US", options)}
                </td>
                <td
                  className={`text-xs ${
                    row.meeting_demo_percent === 0
                      ? "text-warning"
                      : row.meeting_demo_percent > 0
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {row.meeting_demo_percent}%
                </td>
                <td className="text-xs">
                  {row.proposal_price_quote.toLocaleString("en-US", options)}
                </td>
                <td
                  className={`text-xs ${
                    row.proposal_price_quote_percent === 0
                      ? "text-warning"
                      : row.proposal_price_quote_percent > 0
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {row.proposal_price_quote_percent}%
                </td>
                <td className="text-xs">
                  {row.negotiation_review.toLocaleString("en-US", options)}
                </td>
                <td
                  className={`text-xs ${
                    row.negotiation_review_percent === 0
                      ? "text-warning"
                      : row.negotiation_review_percent > 0
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {row.negotiation_review_percent}%
                </td>
                <td className="text-xs">
                  {row.pipeline_total.toLocaleString("en-US", options)}
                </td>
                <td
                  className={`text-xs ${
                    row.pipeline_total_percent === 0
                      ? "text-warning"
                      : row.pipeline_total_percent > 0
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {row.pipeline_total_percent}%
                </td>
                <td className="text-xs">
                  {row.closed_won.toLocaleString("en-US", options)}
                </td>
                <td
                  className={`text-xs ${
                    row.closed_won_percent === 0
                      ? "text-warning"
                      : row.closed_won_percent > 0
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {row.closed_won_percent}%
                </td>
                <td className="text-xs">
                  {row.closed_lost.toLocaleString("en-US", options)}
                </td>
                <td
                  className={`text-xs ${
                    row.closed_lost_percent === 0
                      ? "text-warning"
                      : row.closed_lost_percent > 0
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {row.closed_lost_percent}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
