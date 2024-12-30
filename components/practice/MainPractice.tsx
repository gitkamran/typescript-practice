import React from "react";

const MainPractice = () => {
  const firstname: string = "محمد";
  const lastname: string = "کامران";

  return (
    <div className="flex items-start h-full">{firstname + " " + lastname}</div>
  );
};

export default MainPractice;
