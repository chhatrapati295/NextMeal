import React from "react";
import Img1 from "../../assets/icons/meal.png";
import Img2 from "../../assets/icons/events.png";
import Img3 from "../../assets/icons/community.png";
import Image from "next/image";
const communityData = [
  {
    id: 1,
    title: "Share & discover recipes",
    imgSrc: Img1,
  },
  {
    id: 2,
    title: "Find new friends & like minded people",
    imgSrc: Img2,
  },
  {
    id: 3,
    imgSrc: Img3,
  },
];

const Community = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4">
      <h2 className="text-3xl font-bold mt-4">
        One shared passion <span className="text-orange-500">Food</span>
      </h2>
      <p className="mb-4 text-gray-500">Join our community and share your favorite recipes!</p>
      <h1 className="font-medium">Community Perks</h1>
      <div className="flex flex-col gap-4  ">
        {communityData?.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <Image height={80} width={120} src={item?.imgSrc} alt="banner" />
            {item?.title && <h2 className="font-medium">{item?.title}</h2>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
