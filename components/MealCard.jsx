import Image from "next/image";
import React from "react";

const MealCard = ({ data }) => {
  const {
    id,
    slug,
    title,
    image,
    summary,
    instructions,
    creator,
    creator_email,
  } = data;
  return (
    <div className="flex flex-col gap-2 bg-black rounded-md p-4 text-white w-96 hover:bg-gray-900 cursor-pointer">
      <Image
        src={image}
        alt={title}
        width={200}
        height={100}
        className="rounded-md"
      />
      <div className="flex flex-col">
        <h2 className="font-semibold text-xl">{title}</h2>
        <span className="text-gray-500 text-sm">{creator}</span>
      </div>
      <p className="text-gray-400">{summary}</p>
      <button className=" text-xs button-87 w-fit ">View Details</button>
    </div>
  );
};

export default MealCard;
