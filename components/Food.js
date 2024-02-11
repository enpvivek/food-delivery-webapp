import restaurants2 from "../assets/data/restaurants2";
import RestaurantCard from "./RestaurantCard";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
export function Food() {
  // Declaring state variables for data and filter-reset-button
  const [restaurants, setRestaurants] = useState(restaurants2);
  const [filteredData, setFilteredData] = useState(restaurants2);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilter = (filterName, filterCondition) => {
    if (selectedFilter === filterName) {
      setFilteredData(restaurants2);
      setSelectedFilter(null);
    } else {
      let filteredData =
        filterCondition === "distance"
          ? filterData.sort(
              (item1, item2) =>
                item1.info.sla.lastMileTravel - item2.info.sla.lastMileTravel
            )
          : restaurants.filter(filterCondition);
      setFilteredData(filteredData);
      setSelectedFilter(filterName);
    }
  };

  const resetFilters = () => {
    setFilteredData(restaurants);
    setSelectedFilter(null);
  };

  return (
    <div className="flex w-full h-auto flex-col p-5 lg:px-32">
      <div className="w-full flex text-3xl font-bold my-5">
        <h1>Online food delivery in India</h1>
      </div>
      <div className="w-full h-auto flex flex-row">
        <div className="flex text-sm font-semibold">
          <button
            onClick={resetFilters}
            className="flex items-center my-4 mr-8 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md  
             bg-primary text-white "
          >
            <div className="mr-2">Reset Filter</div>
          </button>
        </div>

        <div className="flex text-sm font-semibold">
          <button
            onClick={() =>
              handleFilter("topproducts", (item) =>
                [
                  "KFC",
                  "Domino's Pizza",
                  "McDonald's",
                  "Pizza Hut",
                  "Burger King",
                ].includes(item.info.name)
              )
            }
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectedFilter === "topproducts"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Top Products
          </button>
        </div>

        <div className="flex text-sm font-semibold">
          <button
            onClick={() =>
              handleFilter(
                "delivery",
                (item) => item.info.sla.deliveryTime < 30
              )
            }
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectedFilter === "delivery"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Fast Delivery
          </button>
        </div>
        <div className="flex text-sm font-semibold">
          <button
            onClick={() => handleFilter("veg", (item) => item.info.veg)}
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectedFilter === "veg"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Pure Veg
          </button>
        </div>
        <div className="flex text-sm font-semibold">
          <button
            onClick={() =>
              handleFilter("rating", (item) => item.info.avgRating > 4.2)
            }
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectedFilter === "rating"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Ratings 4.2+
          </button>
        </div>
        <div className="flex text-sm font-semibold">
          <button
            onClick={() =>
              handleFilter(
                "distance",
                (item1) => item1.info?.sla.lastMileTravel < 2.3
              )
            }
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectedFilter === "distance"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Distance
          </button>
        </div>

        <div className="flex text-sm font-semibold">
          <button
            onClick={() => handleFilter("opennow", (item) => item.info.isOpen)}
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectedFilter === "opennow"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Open Now
          </button>
        </div>
      </div>

      {/* Cards */}
      {/* {console.log(rating)} */}
      <div className="w-full flex flex-row flex-wrap my-5 gap-4 mb-10">
        {filteredData.map((restaurant2, index) => (
          <RestaurantCard key={index} props={restaurant2} />
        ))}
      </div>
      <hr />
    </div>
  );
}
