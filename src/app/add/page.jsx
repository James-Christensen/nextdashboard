import {React} from "react";
import ForecastPage from "../../../components/ForecastPage";

//get month_forecast data from Prisma
import prisma from "../../../public/helpers/Client";
export const revalidate = 300;

//async function to get forecastData from Prisma Postgres DB
async function getForecastData () {
  const forecast = await prisma.month_forecast.findMany({
    orderBy: [
      {id: "asc"},]
  });
  return forecast;
}
//Async function to update forecast data in Prisma Postgres DB
async function updateForecastData (data) {
  const forecast = await prisma.month_forecast.updateMany({
    where: {id: data.id},
    data: {
      current: data.current,
      forecast: data.forecast,
    },
  });
  return forecast;
}


export default async function  AddData() {
  const data = await getForecastData();
return(
  <main className="flex flex-col items-center grow w-full h-full justify-center">
    <ForecastPage data={data}  />
    </main>
)
}

 

 


  
