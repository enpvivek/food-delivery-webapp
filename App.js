import { Header } from "./components/Header";

export function App() {
  return (
    // Main Container
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <Header />

      <h1>Hello world!</h1>
      <button className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition">
        Click Me
      </button>
    </div>
  );
}
