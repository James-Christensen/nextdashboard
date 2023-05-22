import React from 'react'
//Prisma stuff
import prisma from '../../../public/helpers/Client';
export const revalidate = 30;

import ProgressTable from '../../../components/ProgressTable';
async function getProgressData () {
  const targets = await prisma.targets.findMany({orderBy: { id: "asc" },});
  const results = await prisma.results.findMany({orderBy: { id: "asc" },});
  const forecast = await prisma.month_forecast.findMany({orderBy: { id: "asc" },});
  return {targets, results, forecast};
}

export default async function Progress() {
  const {targets, results, forecast} = await getProgressData();
  console.log(results)
  console.log(forecast)
  return (
    <main className="flex flex-col items-center grow w-full h-full justify-center">
      <h1 className="text-center text-2xl w-full mb-5">Month & Year Progress</h1>
      <ProgressTable targets={targets} results={results} forecast={forecast} />
    </main>
  );
}
