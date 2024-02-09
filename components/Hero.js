import suggestions from "../assets/data/suggestions";
import HeroCard from "./HeroCard";

export function Hero() {
  return (
    <div className="flex w-full h-auto flex-col p-5 lg:px-32">
      <div className="w-full flex text-3xl font-bold my-5">
        <h1>What's on your mind?</h1>
      </div>
      <div className="w-full flex flex-row my-5 gap-2 mb-10">
        {suggestions.slice(0, 6).map((suggestion, index) => (
          <HeroCard key={index} props={suggestion} />
        ))}

        <HeroCard props={suggestions[0]} />
      </div>
      <hr className="w-2" />
    </div>
  );
}
