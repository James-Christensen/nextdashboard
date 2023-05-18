"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full bg-slate-500 h-12 py-2 justify-between items-center px-12 ">
      <div>
        <Link
          href="/"
          className="px-3 rounded-md text-lg font-medium text-gray-300  hover:text-white"
        >
          Sales Dashboard
        </Link>
      </div>
      <div className="">
        <Link
          href="/update"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
        >
          Update
        </Link>
        <Link
          href="/weekly"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
        >
          Weekly
        </Link>
        <Link
          href="/add"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
        >
          Add Data
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
