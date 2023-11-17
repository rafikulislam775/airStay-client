import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoriesBox = ({ label, icon: Icon , selected}) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updatedQuery = { ...currentQuery, category: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
    }
  };
  params.get("category");
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col justify-center items-center gap-2 p-2  border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected?'border-b-neutral-800 text-neutral-900':'border-transparent text-neutral-500'} `}
    >
      <Icon size={26}></Icon>
      <div className="text-sm font-medium"> {label}</div>
    </div>
  );
};

export default CategoriesBox;
