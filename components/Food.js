import restaurants2 from "../assets/data/restaurants2";
import RestaurantCard from "./RestaurantCard";

export function Food() {
  return (
    <div className="flex w-full h-auto flex-col p-5 lg:px-32">
      <div className="w-full flex text-3xl font-bold my-5">
        <h1>Online food delivery in India</h1>
      </div>
      <div className="w-full flex flex-row flex-wrap my-5 gap-4 mb-10">
        {restaurants2.slice(0, 16).map((restaurant2, index) => (
          <RestaurantCard key={index} props={restaurant2} />
        ))}
      </div>
      <hr />
    </div>
  );
}
