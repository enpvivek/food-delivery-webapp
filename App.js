import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import About from "./components/About";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Restaurants from "./components/Restaurants";
import Error from "./components/Error";

export function App() {
  return (
    // Main Container
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <Header />

      {/* Body */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Restaurants />
            <Food />
          </>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errrorElement: <Error />,
  },
]);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
