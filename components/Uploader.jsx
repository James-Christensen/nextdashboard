"use client";
import React from "react";

export default function Uploader({ handleFileChange, handleSubmit }) {
  return (
    <form
      className="flex flex-col w-1/3 p-5 justify-center mt-6"
      onSubmit={handleSubmit}
    >
      <p className="text-xl text-center my-4 ">Select a CSV to upload</p>
      <input
        type="file"
        accept=".csv,.xlsx"
        className="file-input file-input-bordered file-input-primary w-full"
        onChange={handleFileChange}
      />
      <button className="btn btn-primary mt-2 self-end" type="submit">
        Upload
      </button>
    </form>
  );
}
