import {React} from "react";
import ForecastPage from "../../../components/ForecastPage";

//get month_forecast data from Prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const revalidate = 300;
//async function to get forecastData from Prisma Postgres DB
async function getForecastData () {
  const forecast = await prisma.month_forecast.findMany({
    orderBy: [
      {id: "asc"},]
  });
  return forecast;
}


export default async function  AddData() {
  const data = await getForecastData();
return(
    <ForecastPage data={data}/>
)
}

 

 


  
