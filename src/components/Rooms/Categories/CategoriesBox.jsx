import React from "react";

const CategoriesBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-2  border-b-2 hover:text-neutral-800 transition cursor-pointer ">
      <Icon size={26}></Icon>
      <div className="text-sm font-medium"> {label}</div>
    </div>
  );
};

export default CategoriesBox;
