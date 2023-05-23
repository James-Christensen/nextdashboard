"use client";
import React, { useState, useRef } from "react";
import Papa from "papaparse";
import Placeholder from "../../../components/Placeholder";
import WeekTable from "../../../components/WeekTable";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const formRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const contents = event.target.result;
        const parsedData = Papa.parse(contents, {
          header: true,
          skipEmptyLines: true,
        }).data.map((row) => ({
          ...row,
          ...Object.fromEntries(
            Object.entries(row).map(([key, value]) => [
              key,
              isNaN(value) ? value : Number(value),
            ])
          ),
        }));
        setData(parsedData);
        formRef.current.reset();
      };
      reader.readAsText(file);
    }
  };

  return (
    <main className="flex flex-col items-center grow w-full h-full justify-center">
      <h1 className="text-3xl font-bold text-center ">
        Weekly Pipeline Upload Tool
      </h1>
      <form
        ref={formRef}
        className="flex flex-col w-1/3 p-5 justify-center mt-2"
        onSubmit={handleSubmit}
      >
        <p className="text-xl text-center my-4 ">Select a CSV to upload</p>
        <input
          type="file"
          accept=".csv"
          className="file-input file-input-bordered file-input-primary w-full"
          onChange={handleFileChange}
        />
        <button className="btn btn-primary mt-2 self-end" type="submit">
          Upload
        </button>
      </form>
      <p className="text-sm h-5">
        {data && `Data for Week ID: ${data[0].week_id}`}{" "}
      </p>
      {!data && <Placeholder />}
      {data && <WeekTable week={data} title={" "} />}
    </main>
  );
}
