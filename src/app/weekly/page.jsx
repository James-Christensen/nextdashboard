//weekly pipeline page. Displays the pipleine tables showing most recent week
//outputs a comparison of the most recent and the prior weeks.
import React from "react";
import WeekTable from "../../../components/WeekTable";

//bring in prisma client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//revalidate prisma cache every 5 minutes
export const revalidate = 300;

async function getTwoWeeksPipeline() {
  const pipeline = await prisma.Pipeline.findMany({
    take: 12, // Retrieve only the last 12 entries
    orderBy: { id: "desc" }, // Order the entries by createdAt in descending order
  });
  return pipeline;
}

//async function to get weeks from prisma
async function getWeeks() {
  const weeks = await prisma.Week.findMany();
  return weeks;
}
//Helper function to convert week input to week value for display in table. can be moved
function formatDate(input) {
  const formattedDate = new Date(
    input.getUTCFullYear(),
    input.getUTCMonth(),
    input.getUTCDate()
  ).toLocaleDateString("en-US", { month: "long", day: "numeric" });
  return formattedDate;
}
//helper function can be moved.
function updateWeekObject(weekInput, weeksArray) {
  return weekInput.map((item) => {
    const matchingWeek = weeksArray.find((week) => week.id === item.week_id);
    const weekDate = matchingWeek ? matchingWeek.date : null;

    return {
      ...item,
      week: formatDate(weekDate),
    };
  });
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
  console.log(priorWeek);
  console.log(currentWeek);

  return (
    <main className="flex flex-col items-center grow w-full h-full justify-center">
      <WeekTable
        week={currentWeek}
        title={`Current Week ${currentWeek[0].week}`}
      />
      <div className="my-2"> Prior Week: {priorWeek[0].week}</div>
    </main>
  );
}
