import React from 'react'
//Prisma stuff
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const revalidate = 300;

import ProgressTable from '../../../components/ProgressTable';
async function getProgressData () {
  const targets = await prisma.targets.findMany();
  const results = await prisma.results.findMany();
  const forecast = await prisma.month_forecast.findMany();
  return {targets, results, forecast};
}

export default async function Progress() {
  const {targets, results, forecast} = await getProgressData();
  return (
    <main className="flex flex-col items-center grow w-full h-full justify-center">
      <h1 className="text-center text-2xl w-full mb-5">Month & Year Progress</h1>
      <ProgressTable targets={targets} results={results} forecast={forecast} />
      <button className="btn mt-2 btn-primary">Button</button>
    </main>
  );
}
