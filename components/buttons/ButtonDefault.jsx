"use client";
import React from "react";

export default function ButtonDefault({ label, className }) {
  return (
    <button
      className={`text-[#00AFF0] font-500 rounded-full px-6 py-3 active:text-[#ebecee] shadow-none capitalize active:scale-100 ${className}`}
    >
      {label}
    </button>
  );
}
