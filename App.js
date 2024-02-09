import { Food } from "./components/Food";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Restaurants } from "./components/Restaurants";

export function App() {
  return (
    // Main Container
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <Header />

      {/* What's on Your Mind Section */}
      <Hero />

      {/* Top Restaurants Section */}
      <Restaurants />

      {/* Food Listing */}
      <Food />

      {/* Nearby & Suggestions */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
