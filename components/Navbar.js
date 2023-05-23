"use client";

import React from "react";
import Link from "next/link";


export default function Navbar({ title }) {
  return (
    <nav className="navbar mb-6 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link href="/" className="text-lg font-bold text-primary-content">
            Sales Dashboard
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn m-1">
                Reports
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link
                  href="/weekly"
                  className="btn btn-ghost text-primary-content btn-sm rounded-btn"
                >
                  Weekly Pipeline
                </Link>
                <Link
                  href="/progress"
                  className="btn btn-ghost text-primary-content btn-sm rounded-btn"
                >
                  Month & YTD
                </Link>
                <Link
                  href="/add"
                  className="btn btn-ghost text-primary-content btn-sm rounded-btn"
                >
                  Forecast Page
                </Link>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn m-1">
                Profile
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p

                    className="btn btn-ghost text-primary-content btn-sm rounded-btn"
                  >
                    Logout
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
