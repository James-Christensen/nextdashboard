import React from "react";
//Prisma stuff
import prisma from "../../../public/helpers/Client";
export const revalidate = 0;

const url = "http://localhost:3000/api/results";

import ProgressTable from "../../../components/ProgressTable";
async function getProgressData() {
  const targets = await prisma.targets.findMany({ orderBy: { id: "asc" } });
  let results;
  try {
    results = await fetch(
      "/api/results",
      { cache: "no-store" },
      { next: { tags: ["resultData"] } }
    ).then((res) => res.json());
  } catch (error) {
    console.error(error);
    try {
      results = await fetch(
        "https://salesdashboard-orpin.vercel.app/api/results",
        { cache: "no-store" },
        { next: { tags: ["resultData"] } }
      ).then((res) => res.json());
    } catch (error) {
      console.error(error);
      results = await prisma.results.findMany({ orderBy: { id: "asc" } });
    }
  }
  const forecast = await prisma.month_forecast.findMany({
    orderBy: { id: "asc" },
  });
  return { targets, results, forecast };
}

export default async function Progress() {
  const { targets, results, forecast } = await getProgressData();

  return (
    <main className="flex flex-col items-center grow w-full h-full justify-center mb-5">
      <h1 className="text-center text-2xl w-full mb-5">
        Month & Year Progress
      </h1>
      <ProgressTable targets={targets} results={results} forecast={forecast} />
    </main>
  );
}
