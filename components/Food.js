import restaurants2 from "../assets/data/restaurants2";
import RestaurantCard from "./RestaurantCard";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export function Food() {
  // Declaring state variables for data and filter-reset-button
  const [restaurants, setRestaurants] = useState(restaurants2);
  const [filteredData, setFilteredData] = useState(restaurants2);
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Declaring state variables for individual filters
  const [selectDelivery, setSelectDelivery] = useState(false);
  const [selectVeg, setSelectVeg] = useState(false);
  const [selectRating, setSelectRating] = useState(false);
  const [selectDistance, setSelectDistance] = useState(false);
  const [selectOpennow, setSelectOpennow] = useState(false);

  const handleDelivery = () => {
    if (selectDelivery) {
      setFilteredData(restaurants2);
      setSelectedFilter(null);
      setSelectDelivery(false);
    } else {
      let filteredData = restaurants.filter(
        (item) => item.info.sla.deliveryTime < 30
      );
      setFilteredData(filteredData);
      setSelectedFilter("delivery");
      setSelectDelivery(true);
      setSelectVeg(false);
      setSelectRating(false);
      setSelectDistance(false);
      setSelectOpennow(false);
    }
  };

  const handleVeg = () => {
    if (selectVeg) {
      setFilteredData(restaurants2);
      setSelectedFilter(null);
      setSelectVeg(false);
    } else {
      let filteredData = restaurants.filter((item) => item.info.veg === true);
      setFilteredData(filteredData);
      setSelectedFilter("veg");
      setSelectDelivery(false);
      setSelectVeg(true);
      setSelectRating(false);
      setSelectDistance(false);
      setSelectOpennow(false);
    }
  };

  const handleRating = () => {
    // If the rating button is already selected, reset the state
    if (selectRating) {
      setFilteredData(restaurants2); // Reset filtered data to the original restaurants data
      setSelectedFilter(null); // Reset selected filter
      setSelectRating(false); // Reset selectRating state
    } else {
      // If the rating button is not selected, filter the data based on rating
      let filteredData = restaurants.filter(
        (item) => item.info.avgRating > 4.2
      );
      setFilteredData(filteredData);
      setSelectedFilter("rating");
      setSelectDelivery(false);
      setSelectVeg(false); // Reset selectVeg state
      setSelectDistance(false); // Reset selectDistance state
      setSelectRating(true); // Set selectRating state to true
      setSelectOpennow(false); // Reset selectOpennow state
    }
  };

  const handleDistance = () => {
    if (selectDistance) {
      setFilteredData(restaurants2);
      setSelectedFilter(null);
      setSelectDistance(false);
    } else {
      let filteredData = [...restaurants]
        .sort((a, b) => a.info.sla.lastMileTravel < b.info.sla.lastMileTravel)
        .slice(4, 9); // Assuming distance is stored in item.info.distance, adjust the condition based on your distance criteria
      console.log(filteredData);
      setFilteredData(filteredData);
      setSelectedFilter("distance");
      setSelectDelivery(false);
      setSelectVeg(false);
      setSelectDistance(true);
      setSelectRating(false);
      setSelectOpennow(false);
    }
  };

  const handleOpenow = () => {
    if (selectOpennow) {
      setFilteredData(restaurants2);
      setSelectedFilter(null);
      setSelectOpennow(false);
    } else {
      let filteredData = restaurants.filter(
        (item) => item.info.isOpen === true
      );
      setFilteredData(filteredData);
      setSelectedFilter("opennow");
      setSelectDelivery(false);
      setSelectVeg(false);
      setSelectRating(false);
      setSelectDistance(false);
      setSelectOpennow(true);
    }
  };

  const resetFilters = () => {
    setFilteredData(restaurants);
    setSelectedFilter(null);
    setSelectVeg(false);
    setSelectDistance(false);
    setSelectRating(false);
    setSelectOpennow(false);
  };

  const selected = false;
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
            onClick={handleDelivery}
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectDelivery
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Fast Delivery
          </button>
        </div>
        <div className="flex text-sm font-semibold">
          <button
            onClick={handleVeg}
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectVeg ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Pure Veg
          </button>
        </div>
        <div className="flex text-sm font-semibold">
          <button
            onClick={handleRating}
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectRating
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Ratings 4.0+
          </button>
        </div>
        <div className="flex text-sm font-semibold">
          <button
            onClick={handleDistance}
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectDistance
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Distance
          </button>
        </div>

        <div className="flex text-sm font-semibold">
          <button
            onClick={handleOpenow}
            className={`m-4 py-2 px-4 border-[1px] rounded-full border-gray-400 shadow-md ${
              selectOpennow
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
