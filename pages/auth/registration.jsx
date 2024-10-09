import ButtonDefault from "@/components/buttons/ButtonDefault";
import ButtonWhite from "@/components/buttons/ButtonWhite";
import React from "react";
import { useState, useEffect } from "react";

export default function registration() {
  return (
    <div className="py-20 w-full h-full">
      <div className="h-full flex flex-col justify-center mt-10 items-center w-full md:max-w-3xl mx-auto md:border rounded-2xl shadow">
        <div className="flex-col flex py-4">
          <h1 className="font-black text-3xl capitalize">registration Form</h1>
          <p className="">Fill out the form carefully for registration</p>
        </div>

        <form className="py-4 w-full px-6">
          <h1 className="font-medium text-xl">Student Name</h1>
          <div className="md:space-x-4 flex flex-col md:flex-row space-y-2 pb-2 md:space-y-0">
            <div className="flex flex-col space-y-1">
              <label htmlFor="firstName" className="text-slate-500 text-sm">
                first Name
              </label>
              <input
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="middleName" className="text-slate-500 text-sm">
                Middle Name
              </label>
              <input
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                last Name
              </label>
              <input
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
              />
            </div>
          </div>
          {/*  */}
          <div className="py-4">
            <div className="w-full md:space-x-3 py-2 flex ">
              <div className="flex flex-row md:space-x-4 space-x-1.5 w-full">
                {/* Day */}
                <div>
                  <label
                    htmlFor="day"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Day
                  </label>
                  <select
                    required
                    className="mt-1 block  w-full md:w-32  p-2 border border-gray-300 bg-white dark:bg-black dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Day</option>
                  </select>
                </div>

                {/* Month */}
                <div>
                  <label
                    htmlFor="month"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Month
                  </label>
                  <select
                    required
                    className="mt-1 block  w-full md:w-32  p-2 border border-gray-300 bg-white dark:bg-black dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Year
                  </label>
                  <select
                    required
                    className="mt-1 block w-full md:w-32 p-2 border border-gray-300 bg-white dark:bg-black dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Year</option>
                  </select>
                </div>
              </div>

              {/* sex */}
              <div className="md:w-72 w-44">
                <label
                  htmlFor="sex"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sex
                </label>
                {/* sex */}
                <select
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 bg-white dark:bg-black dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">sex options</option>
                  <option value="1">male</option>
                  <option value="2">female</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}
          <h1 className="font-medium text-xl"> Address</h1>
          <div className="flex flex-col space-y-1">
            <label htmlFor="lastName" className="text-slate-500 text-sm">
              Street Address
            </label>
            <input
              className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="lastName" className="text-slate-500 text-sm">
              Street Address Line 2
            </label>
            <input
              className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
              type="text"
            />
          </div>

          <div className="gap-4 py-4 grid md:grid-cols-2">
            <div className="flex flex-col space-y-1">
              <label htmlFor="firstName" className="text-slate-500 text-sm">
                City
              </label>
              <input
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="middleName" className="text-slate-500 text-sm">
                State / Province
              </label>
              <input
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="lastName" className="text-slate-500 text-sm">
              Postal / Zip Code
            </label>
            <input
              className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
              type="text"
            />
          </div>

          <div className="gap-4 py-4 grid md:grid-cols-2">
            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                Student E-mail
              </label>
              <input
                placeholder="enter ur email adress here example@example.com
 ....."
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                Mobile Number
              </label>
              <input
                placeholder="(000) 000 0000"
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                Company
              </label>
              <input
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                Courses
              </label>
              <select
                required
                className="mt-1 block w-full p-2 border border-gray-300 bg-white dark:bg-black dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Courses</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          </div>
          {/* Submit Button */}
          <div className="text-center py-4">
            <ButtonWhite label="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
