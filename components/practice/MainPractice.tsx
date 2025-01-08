"use client";
import React from "react";

type InformationMe = {
  firstname: string;
  lastname: string;
  age: number;
  job: string;
};

const MainPractice = () => {
  const informationMe: InformationMe = {
    firstname: "محمد",
    lastname: "کامران",
    age: 32,
    job: "برنامه نویس",
  };

  sessionStorage.setItem("data", JSON.stringify(informationMe));

  return (
    <div className="flex items-start h-full">
      <div className="flex flex-col gap-4 p-2 text-sm">
        <span>
          {informationMe.firstname} {informationMe.lastname}
        </span>
        <span>سن: {informationMe.age}</span>
        <span>شغل: {informationMe.job}</span>
      </div>
    </div>
  );
};

export default MainPractice;
