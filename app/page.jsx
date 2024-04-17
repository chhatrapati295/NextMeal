import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeBanner from "../assets/tomato-salad.jpg";

const page = () => {
  return (
    <div className="py-10 flex flex-col gap-12">
      <div className=" flex gap-12 justify-center items-center">
        <Image
          className=" border border-black w-1/3  rounded-md bg-cover"
          src={HomeBanner}
          alt="banner"
        />
        <div className="flex flex-col gap-3 w-1/3">
          <h2 className="text-4xl font-bold">
            NextMeal food for <br />
            NextMeal <span className="text-orange-400">foodies</span>
          </h2>
          <p className="text-gray-500">Taste & share food from all over the world.</p>
          <div className="flex gap-3 items-center ">
            <Link href={"/community"}>
              <button className="px-4 py-2 border border-orange-400 hover:bg-gray-100 rounded-md text-xs text-orange-400 outline-none">
                Join the community
              </button>
            </Link>
            <Link href={"/meals"}>
              <button className="px-4 py-2 border border-orange-400 hover:bg-gray-100 rounded-md text-xs text-orange-400 outline-none">
                Explore Meals
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-6 pt-4 m-auto">
            <h2 className="font-semibold text-xl">How it works</h2>
            <p className="text-gray-500">
              NextMeal food is a platform for foodies to share their favourite
              recipes with the world. Its a place to discover new dishes and to
              connect with another food lovers.{" "}
            </p>
            <p className="text-gray-500">
              NextMeal food is a platform for foodies to share their favourite
              recipes with the world. Its a place to discover new dishes and to
              connect with another food lovers.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
