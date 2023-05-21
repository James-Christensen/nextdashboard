"use client";
import {React, useState, useEffect} from "react";
import { getCurrentMonth,calculateTotals } from "../public/helpers/helpers";
import ForecastTable from "./ForecastTable";
import UpdateMonth from "./UpdateMonth";


  export default function ForecastPage({data}){
    const [isEditing, setIsEditing] = useState(false);
    const [currentMonth, setCurrentMonth] = useState("This Months");
    const displayMonth = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
      const [monthData, setMonthData] = useState(data);
    //   const [resultData, setResultData] = useState();
    
      useEffect(() => {
    const month = getCurrentMonth();
    setCurrentMonth(month);
  }, []);



  const handleSave = () =>{
    alert('saved')
    calculateTotals(monthData)
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


    if (isEditing === true) {
        return (
          <div className="flex flex-col justify-center items-center w-1/2 mx-auto">
            <h1 className="mb-1 text-2xl  text-warning">Editing...</h1>
            <UpdateMonth data={monthData} onUpdate={handleInputChange} />
            <button
              onClick={handleUpdateResults}
              className="btn btn-outline btn-warning self-end"
            >
              Update Test
            </button>
            <div className="self-end">
              <button
                onClick={handleSave}
                className="btn btn-outline btn-warning self-end"
              >
                Save
              </button>
            </div>
          </div>
        );
      }
      return (
        <div className="flex flex-col justify-center items-center w-1/2 mx-auto">
          <h1 className="mb-1 text-2xl">{`${displayMonth} Bookings and Forecast`}</h1>
          <ForecastTable data={monthData} />
          <button
            onClick={handleEdit}
            className="btn btn-outline btn-info self-end"
          >
            Edit
          </button>
        </div>
      );
    }


 