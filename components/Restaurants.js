import restaurants from "../assets/data/restaurant";
import RestaurantCard from "./RestaurantCard";

export function Restaurants() {
  console.log(restaurants);
  return (
    <div className="flex w-full h-auto flex-col p-5 lg:px-32">
      <div className="w-full flex text-3xl font-bold my-5">
        <h1>Top restaurant chains in India</h1>
      </div>
      <div className="w-full flex flex-row  my-5 gap-4 mb-10">
        {restaurants.slice(0, 4).map((restaurant, index) => (
          <RestaurantCard key={index} props={restaurant} />
        ))}
      </div>
      <hr />
    </div>
  );
}
