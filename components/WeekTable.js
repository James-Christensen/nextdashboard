"use client";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const options = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

export default function WeekTable({ week, title }) {
  console.log(week);
  const columns = [
    "Segment",
    "Prospecting",
    "Needs Analysis",
    "Meeting/Demo",
    "Proposal/Quote",
    "Negotiation/Review",
    "Pipeline Total",
    "Closed Won",
    "Closed Lost",
  ];

  return (
    <>
      <h1 className="text-lg w-full text-center mb-2">{title}</h1>
      <TableContainer
        sx={{ bgcolor: "#64748b" }}
        className="w-10/12"
        component={Paper}
      >
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow sx={{ borderColor: "#292929" }}>
              {columns.map((column) => (
                <TableCell
                  sx={{ color: "black", borderColor: "#292929" }}
                  className="text-md font-medium text-center"
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {week.map((row) => (
              <TableRow sx={{ borderColor: "#292929" }} key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderColor: "#292929" }}
                >
                  {row.segment}
                </TableCell>
                <TableCell align="left" sx={{ borderColor: "#292929" }}>
                  {row.prospecting.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell align="left" sx={{ borderColor: "#292929" }}>
                  {row.needs_analysis.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell align="left" sx={{ borderColor: "#292929" }}>
                  {row.meeting_demo.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell align="left" sx={{ borderColor: "#292929" }}>
                  {row.proposal_price_quote.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell align="left" sx={{ borderColor: "#292929" }}>
                  {row.negotiation_review.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell align="left" sx={{ borderColor: "#292929" }}>
                  {row.pipeline_total.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell align="left" sx={{ borderColor: "#292929" }}>
                  {row.closed_won.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell align="left" sx={{ borderColor: "#292929" }}>
                  {row.closed_lost.toLocaleString("en-US", options)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
