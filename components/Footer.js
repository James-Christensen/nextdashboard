import React from "react";

export default function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <div className="w-full bg-slate-500 h-12">
      <div className="text-justify">
        <p className="text-center my-2 font-medium text-gray-300">
          Copyright &copy; {footerYear} All rights reserved
        </p>
      </div>
    </div>
  );
}
