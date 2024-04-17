import Link from "next/link";
import { getAllMeals } from "../../lib/meals";
import MealsGrid from "../../components/MealsGrid";
import { Suspense } from "react";

async function Meals() {
  const Meals = await getAllMeals();
  return <MealsGrid mealsData={Meals} />;
}

export default function MealsPage() {
  return (
    <div className="flex flex-col gap-4 m-auto justify-center w-full p-6 pt-12">
      <h2 className="text-5xl font-bold">
        Delicious Meals, created <span className="text-orange-400">by you</span>
      </h2>
      <p className="text-gray-500">
        Choose your favourite recipe & cook it yourself. It is easy & fun.
      </p>
      <Link href={"/meals/share"}>
        <button className="button-87">Share your favourite recipe</button>
      </Link>
      <Suspense
        fallback={
          <div className="w-full  flex justify-center items-center loading text-xs text-orange-700">
            <span>Preparing meals...</span>
          </div>
        }
      >
        <Meals />
      </Suspense>
    </div>
  );
}
