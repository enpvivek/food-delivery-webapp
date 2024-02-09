import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export function App() {
  return (
    // Main Container
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <Header />

      {/* What's on Your Mind Section */}
      <Hero />

      
      {/* <button className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition">
        Click Me
      </button> */}
    </div>
  );
}
