import React from "react";
import {
    getCurrentMonthAndRatio,
    calculateYtdData,
    options,
  } from "../public/helpers/ProgressHelpers";

const { currentMonth, currentMonthRatio } = getCurrentMonthAndRatio();

export default function ProgressTable({ targets, results, forecast }) {
  const { contract, non_contract, indirect,mips_total, apm_solutions, grand_total } =
    calculateYtdData(targets, results);

  const MIPS_target = contract.target + non_contract.target + indirect.target;
  const MIPS_progress =
    contract.progress + non_contract.progress + indirect.progress;
  const MIPS_monthly_progress =
    forecast[0].current + forecast[1].current + forecast[2].current;
  const MIPS_monthly_target =
    targets[0][currentMonth] +
    targets[1][currentMonth] +
    targets[2][currentMonth];

  const MIPS_monthly_forecast =
    forecast[0].forecast + forecast[1].forecast + forecast[2].forecast;

  return (
    <div className="overflow-x-auto flex flex-col justify-center border rounded-sm border-primary">
      <table className="table table-zebra w-full">
        <thead>
          <tr className="text-center text-xs">
            <th rowSpan="1" className="text-center text-xs"></th>
            <th colSpan="5" className="text-center text-xs ">
              Current Month
            </th>
            <th colSpan="3" className="text-center text-xs">
              Year to Date
            </th>
          </tr>
          <tr className="text-center text-xs">
            <th className="text-center text-xs">Segment</th>
            <th className="text-center text-xs">Actual</th>
            <th className="text-center text-xs">Forecast</th>
            <th className="text-center text-xs">Target</th>
            <th className="text-center text-xs">Forecast: Target</th>
            <th className="text-center text-xs">Actual: Target</th>
            <th className="text-center text-xs">2023 YTD</th>
            <th className="text-center text-xs">2023 Financial Target</th>
            <th className="text-center text-xs">Percent</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-xs">
            <td className="text-center text-xs">Contract</td>
            <td className="text-center text-xs">
              {forecast[0].current.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {forecast[0].forecast.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {targets[0][currentMonth].toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {(
                (forecast[0].Forecast / targets[0][currentMonth]) *
                100
              ).toFixed(0) + "%"}
            </td>
            <td className="text-center text-xs">
              {((forecast[0].Current / targets[0][currentMonth]) * 100).toFixed(
                0
              ) + "%"}
            </td>
            <td className="text-center text-xs">
              {results[0].segment_total.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {contract.target.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {contract.percent.toFixed(0) + "%"}
            </td>
          </tr>
          <tr className="text-center text-xs">
            <td className="text-center text-xs">Non-Contract</td>
            <td className="text-center text-xs">
              {forecast[1].current.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {forecast[1].forecast.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {targets[1][currentMonth].toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {(
                (forecast[1].forecast / targets[1][currentMonth]) *
                100
              ).toFixed(0) + "%"}
            </td>
            <td className="text-center text-xs">
              {((forecast[0].current / targets[1][currentMonth]) * 100).toFixed(
                0
              ) + "%"}
            </td>
            <td className="text-center text-xs">
              {results[1].segment_total.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {non_contract.target.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {non_contract.percent.toFixed(0) + "%"}
            </td>
          </tr>
          <tr className="text-center text-xs">
            <td className="text-center text-xs">Indirect</td>
            <td className="text-center text-xs">
              {forecast[2].current.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {forecast[2].forecast.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {targets[2][currentMonth].toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {(
                (forecast[2].forecast / targets[2][currentMonth]) *
                100
              ).toFixed(0) + "%"}
            </td>
            <td className="text-center text-xs">
              {((forecast[2].current / targets[2][currentMonth]) * 100).toFixed(
                0
              ) + "%"}
            </td>
            <td className="text-center text-xs">
              {results[2].segment_total.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {indirect.target.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {indirect.percent.toFixed(0) + "%"}
            </td>
          </tr>
          <tr className="text-center text-xs">
            <td className="text-center text-xs">MIPS Solutions</td>
            <td className="text-center text-xs">
              {MIPS_monthly_progress.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {MIPS_monthly_forecast.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {MIPS_monthly_target.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {((MIPS_monthly_forecast / MIPS_monthly_target) * 100).toFixed(
                0
              ) + "%"}
            </td>
            <td className="text-center text-xs">
              {((MIPS_monthly_progress / MIPS_monthly_target) * 100).toFixed(
                0
              ) + "%"}
            </td>
            <td className="text-center text-xs">
              {MIPS_progress.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {MIPS_target.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {((MIPS_progress / MIPS_target) * 100).toFixed(0) + "%"}
            </td>
          </tr>
          <tr className="text-center text-xs">
            <td className="text-center text-xs">APM Solutions</td>
            <td className="text-center text-xs">
              {forecast[4].current.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {forecast[4].forecast.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {targets[4][currentMonth].toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {(
                (forecast[4].forecast / targets[4][currentMonth]) *
                100
              ).toFixed(0) + "%"}
            </td>
            <td className="text-center text-xs">
              {((forecast[4].current / targets[3][currentMonth]) * 100).toFixed(
                0
              ) + "%"}
            </td>
            <td className="text-center text-xs">
              {results[4].segment_total.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {apm_solutions.target.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {apm_solutions.percent.toFixed(0) + "%"}
            </td>
          </tr>
          <tr className="text-center text-xs">
            <td className="text-center text-xs">Total Bookings</td>
            <td className="text-center text-xs">
              {forecast[5].current.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {forecast[5].forecast.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {targets[5][currentMonth].toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {(
                (forecast[5].forecast / targets[5][currentMonth]) *
                100
              ).toFixed(0) + "%"}
            </td>
            <td className="text-center text-xs">
              {((forecast[5].current / targets[5][currentMonth]) * 100).toFixed(
                0
              ) + "%"}
            </td>
            <td className="text-center text-xs">
              {results[5].segment_total.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {grand_total.target.toLocaleString("en-US", options)}
            </td>
            <td className="text-center text-xs">
              {grand_total.percent.toFixed(0) + "%"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
