import { useEffect, useState } from "react";
//import suggestions from "../assets/data/suggestions";
import HeroCard from "./HeroCard";

export default function Hero() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(
          "https://foodie-enpvivek-backend.vercel.app/suggestions"
        );
        const response = await data.json();
        setSuggestions(response);
      } catch (error) {
        console.log("Error in hero section : ", error);
      }
    }
    getData();
  }, []);

  return (
    <div className="flex w-full h-auto flex-col p-5 lg:px-32">
      <div className="w-full flex text-3xl font-bold my-5">
        <h1>What's on your mind?</h1>
      </div>
      <div className="w-full flex flex-row my-5 gap-2 mb-10">
        {suggestions.slice(0, 7).map((suggestion, index) => (
          <HeroCard key={index} props={suggestion} />
        ))}
      </div>
      <hr />
    </div>
  );
}
