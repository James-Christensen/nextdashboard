//weekly pipeline page. Displays the pipleine tables showing most recent week
//outputs a comparison of the most recent and the prior weeks.
import React from "react";
import WeekTable from "../../../components/WeekTable";
import PipelineChanges from "../../../components/PipelineChanges";
import { updateWeekObject,formatDate } from "../../../public/helpers/helpers";

//bring in prisma client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//revalidate prisma cache every 5 minutes
export const revalidate = 300;

async function getTwoWeeksPipeline() {
  const pipeline = await prisma.Pipeline.findMany({
    take: 12, // Retrieve only the last 12 entries
    orderBy: { id: "desc" }, // Order the entries by id in descending order
  });
  return pipeline;
}

//async function to get weeks from prisma
async function getWeeks() {
  const weeks = await prisma.Week.findMany();
  return weeks;
}


//server componenet is async and awaits the pipeline
export default async function Weekly() {
  //async function to get the weeks
  const weeks = await getWeeks();
  //async function to get the data for the last two weeks of pipeline
  const weeklyPipeline = await getTwoWeeksPipeline();
  const weekTwo = weeklyPipeline.slice(-6);
  const weekOne = weeklyPipeline.slice(-12, -6);

  //weeks to use in table and comparision data.
  const priorWeek = updateWeekObject(weekTwo.reverse(), weeks);
  const currentWeek = updateWeekObject(weekOne.reverse(), weeks);
  // console.log(priorWeek);
  // console.log(currentWeek);

  return (
    <main className="flex flex-col items-center grow w-full h-full justify-center">
      <PipelineChanges currentWeek={currentWeek} priorWeek={priorWeek} />
      <WeekTable week={priorWeek} title={`Prior Week: ${priorWeek[0].week}`} />
    </main>
  );
}
