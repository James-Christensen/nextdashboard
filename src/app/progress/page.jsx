import React from "react";
//Prisma stuff
import prisma from "../../../public/helpers/Client";
export const revalidate = 0;

const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
import ProgressTable from "../../../components/ProgressTable";
async function getProgressData() {
  const targets = await prisma.targets.findMany({ orderBy: { id: "asc" } });
  let results;
  try {
    results = await fetch(`${baseUrl}/api/results`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ next: { tags: ["resultData"] } }),
    }).then((res) => res.json());
  } catch (error) {
    console.error(error);
    try {
      results = await prisma.results.findMany({ orderBy: { id: "asc" } });
    } catch (error) {
      console.error(error);
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
