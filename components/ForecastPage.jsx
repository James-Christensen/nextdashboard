"use client";
import {React, useState, useEffect} from "react";
import { getCurrentMonth,calculateTotals,updateForecastData,calculateResultData,updateResultsData } from "../public/helpers/helpers";
import ForecastTable from "./ForecastTable";
import UpdateMonth from "./UpdateMonth";

  export default function ForecastPage({data}){
    const [isEditing, setIsEditing] = useState(false);
    const [currentMonth, setCurrentMonth] = useState("This Months");
    const displayMonth = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
      const [monthData, setMonthData] = useState(data);

      useEffect(() => {
    const month = getCurrentMonth();
    setCurrentMonth(month);
  }, []);
  
  const newResultData = calculateResultData(monthData, currentMonth);


  async function handleSave() {
    await calculateTotals(monthData);
    await updateForecastData(monthData);
    const newResultData = calculateResultData(monthData, currentMonth);
    await updateResultsData(newResultData);
    setIsEditing(!isEditing);
  }
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdateResults = () =>{
    alert('updated')
  }
  const handleInputChange = (newData) => {
    setMonthData(newData);
  };


  const doubleClick = (event) => {
    if(event.detail == 2){
      setIsEditing(!isEditing);
    }
  }

    if (isEditing === true) {
        return (
          <div className="flex flex-col justify-center items-center w-1/2 mx-auto">
            <h1 className="mb-1 text-2xl  text-warning">Editing...</h1>
            <UpdateMonth data={monthData} onUpdate={handleInputChange} />
            <div className="flex w-full justify-end mb-5">
            <div className="self-end">
              <button
                onClick={handleSave}
                className="btn btn-outline btn-warning self-end"
              >
                Save
              </button>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="flex flex-col justify-center items-center w-1/2 mx-auto">
          <h1 className="mb-1 text-2xl">{`${displayMonth} Bookings and Forecast`}</h1>
          <ForecastTable data={monthData} doubleClick={doubleClick} />
          <button
            onClick={handleEdit}
            className="btn btn-outline btn-info self-end mb-5"
          >
            Edit
          </button>
        </div>
      );
    }


 