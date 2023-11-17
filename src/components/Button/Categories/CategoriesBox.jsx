import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoriesBox = ({ label, icon: Icon, selected }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      // console.log(currentQuery);
    }
    const updatedQuery = { ...currentQuery, category: label };
    const url = qs.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });
    // console.log(url)
    navigate(url);
  };
  params.get("category");
  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center items-center gap-2 p-2 hover:text-neutral-800 transition cursor-pointer "
    >
      <Icon size={26}></Icon>
      <div
        className={`text-sm font-medium border-b-2 ${
          selected ? "border-b-neutral-800 text-neutral-900" : ""
        }    `}
      >
        {" "}
        {label}
      </div>
    </div>
  );
};

export default CategoriesBox;
