"use client";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { calculateChanges, options,columns } from "../public/helpers/helpers";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const darkTheme = createTheme({ palette: { mode: "dark" } });


export default function PipelineChanges({ currentWeek, priorWeek }) {

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
    <ThemeProvider theme={darkTheme}>
      <TableContainer className="w-11/12" component={Paper}>
        <Table padding="none" size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="text-md py-2 text-center ">
                Segment
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column}
                  //   sx={{ color: "black", borderColor: "#292929" }}
                  className="text-sm text-center px1"
                  colSpan="2"
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {weeklyPipelineChanges.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="p-2 text-sm" component="th" scope="row">
                  {row.segment}
                </TableCell>
                {/* _percent */}
                <TableCell align="left">
                  {row.prospecting.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell className="text-xs" align="left">
                  {row.prospecting_percent}%
                </TableCell>
                <TableCell align="left">
                  {row.needs_analysis.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell className="text-xs" align="left">
                  {row.needs_analysis_percent}%
                </TableCell>
                <TableCell align="left">
                  {row.meeting_demo.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell className="text-xs" align="left">
                  {row.meeting_demo_percent}%
                </TableCell>
                <TableCell align="left">
                  {row.proposal_price_quote.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell className="text-xs" align="left">
                  {row.proposal_price_quote_percent}%
                </TableCell>
                <TableCell align="left">
                  {row.negotiation_review.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell className="text-xs" align="left">
                  {row.negotiation_review_percent}%
                </TableCell>
                <TableCell align="left">
                  {row.pipeline_total.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell className="text-xs" align="left">
                  {row.pipeline_total_percent}%
                </TableCell>
                <TableCell align="left">
                  {row.closed_won.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell className="text-xs" align="left">
                  {row.closed_won_percent}%
                </TableCell>
                <TableCell align="left">
                  {row.closed_lost.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell className="text-xs" align="left">
                  {row.closed_lost_percent}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
