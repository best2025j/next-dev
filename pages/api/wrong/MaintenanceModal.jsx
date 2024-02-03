import PageWrapper from "@/pages/PageWrapper";
import React from "react";

export default function MaintenanceModal() {
  return (
    <PageWrapper>
      <div className="w-full h-screen bg-slate-200 flex justify-center items-center mx-auto flex-col">
        <div className="bg-white h-72 flex-col flex items-center rounded-2xl justify-center  w-[60%]">
          <h1 className="md:text-xl text-xs font-[700] capitalize ">
            sorry site is under Maintenance !!!
          </h1>
          <p className="text-[9px] md:text-xl">
            We apologize for the inconvenience. Please check back later.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
